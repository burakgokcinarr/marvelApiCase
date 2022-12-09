import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRouter from './src/router/NavigationRouter';
import { store } from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationRouter/>
      </NavigationContainer>
    </Provider>
  );
}