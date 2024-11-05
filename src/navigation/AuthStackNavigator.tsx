import LoginScreen from '@features/auth/LoginScreen';
import RegisterScreen from '@features/auth/RegisterScreen';
import SplashScreen from '@features/auth/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
