import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Header} from '../../components/ui';
import TextBlock from './text-block';
import Player from './record-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import recordData from '../../configs/recordData';
import Finished from './finished';
import Storage from '../../services/storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Main = props => {
  const [currentText, setCurrentText] = useState(0);
  const [recordingData, setRecordingData] = useState([]);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [isRecording, setIsRecording] = useState(false);

  const currentRecord = recordingData[currentText];

  //start recording record
  const onStartRecord = async () => {
    try {
      await audioRecorderPlayer.startRecorder(
        `sdcard/vrecord_${currentRecord.name}.mp3`,
      );
      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        );
        return;
      });
    } catch (e) {
      console.log(e);
    }
  };

  //stop recording record
  const onStopRecord = async () => {
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    ToastAndroid.show(
      `Recording saved to: sdcard/vrecord_${currentRecord.name}.mp3`,
      ToastAndroid.BOTTOM,
      ToastAndroid.LONG,
    );
    await onNext();
    setRecordTime('00:00:00');
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    getUnSavedData().then(data => {
      setRecordingData(data);
      setCurrentText(0);
    });
  }, [isFocused]);

  //getting only text that are not recorded
  const getUnSavedData = async () => {
    const savedData = await Storage.getRecord();
    return recordData.filter(record => {
      return !savedData.find(r => r.id === record.id);
    });
  };

  //getting next text after finishing one
  const onNext = async () => {
    let count = currentText + 1;
    setCurrentText(count);
    await onSave(currentRecord);
  };

  //save recorded text to storage
  const onSave = record => {
    return Storage.setRecord({
      id: record.id,
      name: record.name,
      duration: recordTime,
      path: `sdcard/vrecord_${record.name}.mp3`,
      date: new Date().toLocaleDateString(),
    });
  };

  //showing recorded recordings
  const showRecordings = async () => {
    await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    props.navigation.navigate('Recordings');
    setRecordTime('00:00:00');
    setIsRecording(false);
  };

  //start and stop recording
  const startStopRecording = async () => {
    if (isRecording) {
      setIsRecording(false);
      await onStopRecord();
    } else {
      setIsRecording(true);
      await onStartRecord();
    }
  };

  return (
    <View style={styles.bg}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Header />
      <ScrollView style={styles.container}>
        {currentRecord && <TextBlock text={currentRecord} />}
        {currentText >= recordingData.length && (
          <Finished onPress={() => props.navigation.navigate('Recordings')} />
        )}
      </ScrollView>
      {currentText < recordingData.length && (
        <Player
          startRecording={startStopRecording}
          isRecording={isRecording}
          time={recordTime}
          onMenuPress={showRecordings}
        />
      )}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
