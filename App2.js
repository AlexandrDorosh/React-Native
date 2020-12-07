import * as React from 'react';
import { withGoodsstoreService } from './Components/hoc/with-goodsstore-services';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreenContainer from './Components/List/ListScreenContainer';
import LoginScreen from './Components/Login/LoginScreen';


const Tab = createBottomTabNavigator();


const App2 = ({ eShopService }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'List') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Login') {
              return (
                <SimpleLineIcons
                  name={focused ? 'login' : 'login'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="List" component={ListScreenContainer} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default withGoodsstoreService()(App2);