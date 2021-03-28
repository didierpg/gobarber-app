import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAppointment from '../pages/CreateAppointment';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
  </App.Navigator>
);

export default AppRoutes;
