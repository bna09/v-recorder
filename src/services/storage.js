import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'v-recorder-1';
class Storage {
  async setItem(value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  async getRecord() {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
    }
  }

  async setRecord(value) {
    const store = await this.getRecord();
    store.push(value);
    return this.setItem(store);
  }

  async removeRecord(id = '') {
    const store = await this.getRecord();
    const filterStore = store.filter(record => record.id !== id);
    return this.setItem(filterStore);
  }
}

export default new Storage();
