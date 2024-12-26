import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth-context';
import { LoginScreen } from './src/screens/auth/login-screen';
import { RegisterScreen } from './src/screens/auth/register-screen';
import { CreateGistScreen } from './src/screens/gists/create-gist-screen';
import { AllGistsScreen } from './src/screens/gists/all-gists-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="CreateGist"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="CreateGist" component={CreateGistScreen} />
            <Stack.Screen name="AllGists" component={AllGistsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}