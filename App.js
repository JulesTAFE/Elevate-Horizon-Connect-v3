import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AboutUsScreen from './screens/AboutUsScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AboutUs" component={AboutUsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}