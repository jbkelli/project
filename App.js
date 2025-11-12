import React, { useState } from 'react';
<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { getAllConversions, getBaseName, validateInput } from './utils/converter';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedBase, setSelectedBase] = useState(10);
  const [results, setResults] = useState(null);

  const bases = [
    { value: 2, label: 'Binary', color: '#4CAF50' },
    { value: 8, label: 'Octal', color: '#2196F3' },
    { value: 10, label: 'Decimal', color: '#FF9800' },
    { value: 16, label: 'Hex', color: '#9C27B0' },
  ];

  const handleConvert = () => {
    if (!inputValue.trim()) {
      Alert.alert('Error', 'Please enter a value to convert');
      return;
    }

    if (!validateInput(inputValue, selectedBase)) {
      Alert.alert(
        'Invalid Input',
        `Please enter a valid ${getBaseName(selectedBase)} number`
      );
      return;
    }

    const result = getAllConversions(inputValue, selectedBase);
    
    if (result.success) {
      setResults(result.conversions);
    } else {
      Alert.alert('Conversion Error', result.error);
      setResults(null);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setResults(null);
  };

  const getPlaceholder = () => {
    const examples = {
      2: 'e.g., 1010',
      8: 'e.g., 752',
      10: 'e.g., 255',
      16: 'e.g., FF',
    };
    return examples[selectedBase];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a237e" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Number System Converter</Text>
        <Text style={styles.headerSubtitle}>Convert between different bases</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Base Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Input Base</Text>
          <View style={styles.baseSelector}>
            {bases.map((base) => (
              <TouchableOpacity
                key={base.value}
                style={[
                  styles.baseButton,
                  selectedBase === base.value && {
                    backgroundColor: base.color,
                    borderColor: base.color,
                  },
                ]}
                onPress={() => {
                  setSelectedBase(base.value);
                  setInputValue('');
                  setResults(null);
                }}
              >
                <Text
                  style={[
                    styles.baseButtonText,
                    selectedBase === base.value && styles.baseButtonTextActive,
                  ]}
                >
                  {base.label}
                </Text>
                <Text
                  style={[
                    styles.baseButtonBase,
                    selectedBase === base.value && styles.baseButtonBaseActive,
                  ]}
                >
                  Base {base.value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Input Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Enter {getBaseName(selectedBase)} Number
          </Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={getPlaceholder()}
            placeholderTextColor="#999"
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.convertButton]}
            onPress={handleConvert}
          >
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.clearButton]}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* Results Section */}
        {results && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conversion Results</Text>
            
            <View style={styles.resultCard}>
              <View style={styles.resultRow}>
                <Text style={styles.resultLabel}>Binary (Base 2)</Text>
                <Text style={styles.resultValue}>{results.binary}</Text>
              </View>
            </View>

            <View style={styles.resultCard}>
              <View style={styles.resultRow}>
                <Text style={styles.resultLabel}>Octal (Base 8)</Text>
                <Text style={styles.resultValue}>{results.octal}</Text>
              </View>
            </View>

            <View style={styles.resultCard}>
              <View style={styles.resultRow}>
                <Text style={styles.resultLabel}>Decimal (Base 10)</Text>
                <Text style={styles.resultValue}>{results.decimal}</Text>
              </View>
            </View>

            <View style={styles.resultCard}>
              <View style={styles.resultRow}>
                <Text style={styles.resultLabel}>Hexadecimal (Base 16)</Text>
                <Text style={styles.resultValue}>{results.hexadecimal}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a237e',
    padding: 20,
    paddingTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#b3b3ff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  baseSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  baseButton: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  baseButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  baseButtonTextActive: {
    color: '#fff',
  },
  baseButtonBase: {
    fontSize: 12,
    color: '#666',
  },
  baseButtonBaseActive: {
    color: '#fff',
    opacity: 0.9,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    color: '#333',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  convertButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#1a237e',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  resultValue: {
    fontSize: 18,
    color: '#1a237e',
    fontWeight: 'bold',
    fontFamily: 'monospace',
=======
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
>>>>>>> 4f5e332dae5df2c0e05ad8e2d6da1389b056df3d
  },
});
