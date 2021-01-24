import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Splash} from './src/screens/Splash';
import Songs from './src/screens/Songs';
import {SongDetails} from './src/screens/SongDetails';
import {APP_COLOR} from './src/utils/constant';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Songs" 
          component={Songs} 
          options={{
          title: 'Songs',
          headerStyle: {
            backgroundColor: APP_COLOR.DODGER_BLUE,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="SongDetails" component={SongDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
