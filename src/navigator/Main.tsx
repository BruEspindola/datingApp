import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {First} from '../screens/OnBoarding/First';
import {Second} from '../screens/OnBoarding/Second';
import {Interests} from '../screens/OnBoarding/Interests';
import {OTP} from '../components/OTP';
import {Third} from '@screens/OnBoarding/Third';
import {Fourth} from '@screens/OnBoarding/Fourth';
import {Birthday} from '@screens/OnBoarding/Birthday';
import { Gender } from '@screens/OnBoarding/Gender';

const Stack = createStackNavigator();
const Main = () => {
  const option = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={First} options={option} />
        <Stack.Screen name="Second" component={Second} options={option} />
        <Stack.Screen name="Fourth" component={Fourth} options={option} />
        <Stack.Screen name="Third" component={Third} options={option} />
        <Stack.Screen name="OTP" component={OTP} options={option} />
        <Stack.Screen name="Birthday" component={Birthday} options={option} />
        <Stack.Screen name="Gender" component={Gender} options={option} />
        <Stack.Screen name="Interest" component={Interests} options={option} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Main};
