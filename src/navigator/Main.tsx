import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {First} from '../screens/OnBoarding/First';
import {Second} from '../screens/OnBoarding/Second';
import {Interests} from '../screens/Register/Interests/Interests';
import {OTP} from '../screens/OTP';
import {Third} from '@screens/OnBoarding/Third';
import {Fourth} from '@screens/OnBoarding/Fourth';

const Stack = createStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={First}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fourth"
          component={Fourth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Interest"
          component={Interests}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Main};
