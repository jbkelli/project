import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ServicesScreen from './screens/ServicesScreen';
import InterestsScreen from './screens/InterestsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'About':
        return <AboutScreen />;
      case 'Services':
        return <ServicesScreen />;
      case 'Interests':
        return <InterestsScreen />;
      case 'Projects':
        return <ProjectsScreen />;
      case 'Contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        {renderScreen()}
      </View>
      <View style={styles.tabBar}>
        <TabButton
          icon="home"
          label="Home"
          active={activeTab === 'Home'}
          onPress={() => setActiveTab('Home')}
        />
        <TabButton
          icon="person"
          label="About"
          active={activeTab === 'About'}
          onPress={() => setActiveTab('About')}
        />
        <TabButton
          icon="code-slash"
          label="Services"
          active={activeTab === 'Services'}
          onPress={() => setActiveTab('Services')}
        />
        <TabButton
          icon="heart"
          label="Interests"
          active={activeTab === 'Interests'}
          onPress={() => setActiveTab('Interests')}
        />
        <TabButton
          icon="briefcase"
          label="Projects"
          active={activeTab === 'Projects'}
          onPress={() => setActiveTab('Projects')}
        />
        <TabButton
          icon="mail"
          label="Contact"
          active={activeTab === 'Contact'}
          onPress={() => setActiveTab('Contact')}
        />
      </View>
    </View>
  );
}

const TabButton = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    <Ionicons
      name={active ? icon : `${icon}-outline`}
      size={24}
      color={active ? '#00ff88' : '#05c6bf'}
    />
    <Text style={[styles.tabLabel, active && styles.activeTabLabel]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderTopColor: '#1a4d4a',
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    color: '#05c6bf',
    marginTop: 4,
  },
  activeTabLabel: {
    color: '#00ff88',
  },
});
