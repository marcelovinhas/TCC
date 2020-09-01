import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'tcc',
      storage: AsyncStorage,
      whitelist: ['auth', 'usuario', 'senha'],
    },
    reducers
  );

  return persistedReducer;
};
