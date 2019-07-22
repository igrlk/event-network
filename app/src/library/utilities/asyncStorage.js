import { AsyncStorage } from 'react-native';

const prefix = 'EventNetwork/';

export default class Storage {
  static async getItem(name) {
    return JSON.parse(await AsyncStorage.getItem(prefix + name));
  }

  static setItem(name, value) {
    return AsyncStorage.setItem(prefix + name, JSON.stringify(value));
  }

  static removeItem(name) {
    return AsyncStorage.removeItem(prefix + name);
  }
}
