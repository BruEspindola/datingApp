import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {First} from '../screens/OnBoarding/First';
import {Second} from '../screens/OnBoarding/Second';
import {Name} from '../screens/Register/Name/Name';
import {Gender} from '../screens/Register/Gender/Gender';
import {Interests} from '../screens/Register/Interests/Interests';
import { UploadImage } from '../screens/Register/UploadImage';
import { Login } from '../screens/Login';
import { OTP } from '../screens/OTP';
import { Home } from '../screens/Home';

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
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Interest"
          component={Interests}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upload"
          component={UploadImage}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Main};
