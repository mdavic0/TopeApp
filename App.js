// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './screens/HomeScreen';
// import DiscountCalculatorScreen from './screens/DiscountCalculatorScreen';
// import TopDiscountCalculatorScreen from './screens/TopDiscountCalculatorScreen';
// import HistoryScreen from './screens/HistoryScreen';
// import OnboardingScreen from './screens/OnboardingScreen';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="DiscountCalculator" component={DiscountCalculatorScreen} />
//       <Tab.Screen name="TopDiscountCalculator" component={TopDiscountCalculatorScreen} />
//       <Tab.Screen name="History" component={HistoryScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Onboarding">
//         <Drawer.Screen name="Onboarding" component={OnboardingScreen} />
//         <Drawer.Screen name="Home" component={HomeTabs} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return <AppNavigation />;
}