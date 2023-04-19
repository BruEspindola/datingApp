import {StatusBar} from 'react-native';
import {Main} from './navigator/Main';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Main />
    </>
  );
};
