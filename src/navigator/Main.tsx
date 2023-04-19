import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {First} from '../screens/OnBoarding/First';
import {Second} from '../screens/OnBoarding/Second';
import {Name} from '../screens/Register/Name/Name';
import {Gender} from '../screens/Register/Gender/Gender';
import {Interests} from '../screens/Register/Interests/Interests';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Main};
