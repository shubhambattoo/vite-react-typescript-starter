const storagePrefix = 'cadenz_react_';

const storage = {
  getItem: (key: string) => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}${key}`) as string,
    );
  },
  setItem: (key: string, value: string | number | object | boolean) => {
    window.localStorage.setItem(
      `${storagePrefix}${key}`,
      JSON.stringify(value),
    );
  },
  removeItem: (key: string) => {
    window.localStorage.removeItem(`${storagePrefix}${key}`);
  },
  removeAll: () => {
    window.localStorage.clear();
  },
};

export default storage;
