import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import {AppText, Header, RecordBox} from '../../components/ui';
import Storage from '../../services/storage';

import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Recordings = props => {
  const [isExpand, setIsExpand] = useState('');
  const [recordings, setRecordings] = useState([]);
  const [playTime, setPlayTime] = useState('00:00:00');
  const [isPlaying, setIsPlaying] = useState('');

  useEffect(() => {
    getRecordings().then(data => setRecordings(data));
  }, []);

  //start playing audio
  const onStartPlay = async record => {
    try {
      await audioRecorderPlayer.startPlayer(record.path);
      audioRecorderPlayer.addPlayBackListener(async e => {
        setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
        if (e.current_position === e.duration) {
          setIsPlaying('');
          await onStopPlay();
        }
        return;
      });
    } catch (e) {
      console.log(e);
    }
  };

  //pause playing audio
  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  //stop playing audio
  const onStopPlay = async () => {
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  //start and pause playing audio
  const startStopPlaying = async record => {
    if (isPlaying === record.name) {
      setIsPlaying('');
      await onPausePlay();
    } else {
      setIsPlaying(record.name);
      await onStartPlay(record);
    }
  };

  //expand record box on click
  const onExpand = async value => {
    if (isExpand === value) {
      return setIsExpand('');
    }
    setIsPlaying('');
    await onStopPlay();
    return setIsExpand(value);
  };

  //getting record data form storage
  const getRecordings = () => {
    return Storage.getRecord();
  };

  //delete record from storage
  const onDelete = async id => {
    await Storage.removeRecord(id);
    const newData = await getRecordings();
    setRecordings(newData);
  };

  return (
    <View style={styles.bg}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Header back onBackPress={() => props.navigation.goBack()} />
      <ScrollView style={styles.container}>
        {!recordings.length && (
          <AppText font={16} type="bold" center>
            No recordings found.
          </AppText>
        )}
        {recordings.map((record, i) => (
          <RecordBox
            onRowPress={value => onExpand(value)}
            key={i}
            record={record}
            expand={isExpand === record.name}
            deleteRecord={() => onDelete(record.id)}
            startPlaying={startStopPlaying}
            isPlaying={isPlaying === record.name}
            playTime={playTime}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recordings;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
