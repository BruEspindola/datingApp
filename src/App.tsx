import {StatusBar} from 'react-native';
import {Main} from './navigator/Main';
import {Provider} from 'jotai';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider>
        <Main />
      </Provider>
    </>
  );
};
