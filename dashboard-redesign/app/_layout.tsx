import { Slot } from 'expo-router';
import { View } from 'react-native';
import Sidebar from '../components/Sidebar';
import HeaderBar from '../components/HeaderBar';

export default function Layout() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ flex: 1, backgroundColor: '#eef4ff' }}>
        <HeaderBar />
        <View style={{ padding: 20 }}>
          <Slot />
        </View>
      </View>
    </View>
  );
}
