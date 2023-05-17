import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BlogProvider} from './src/context/BlogContext';
import BlogListScreen from './src/screens/BlogListScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BlogList"
          screenOptions={{headerShown: true}}>
          <Stack.Screen name="BlogList" component={BlogListScreen} />
          <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
