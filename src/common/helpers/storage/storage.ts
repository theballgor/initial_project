import {StorageKeys} from './models';

export const setToLocalStorage = <T>(key: StorageKeys, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

export const getFromLocalStorage = <T>(key: StorageKeys): T | null => {
  try {
    const value: string | null = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  } catch (e) {
    return null;
  }
};

export const removeFromLocalStorage = (key: StorageKeys): void => {
  localStorage.removeItem(key);
};
