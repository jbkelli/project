import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function AboutScreen() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0a0a0a', '#0f0f1a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>About Me</Text>
          
          <View style={styles.imageContainer}>
            <LinearGradient
              colors={['#05c6bf', '#00ff88']}
              style={styles.imageGradient}
            >
              <Image
                source={require('../assets/profile.png')}
                style={styles.profileImage}
                resizeMode="contain"
              />
            </LinearGradient>
          </View>

          <Text style={styles.description}>
            I'm a passionate web developer & problem solver with a love for building efficient, scalable, and innovative solutions. 
            With expertise in Python, JavaScript, HTML & CSS, React Native, Dart & Flutter, I specialize in web development and frontend development.
            {'\n\n'}
            I'm always excited to take on new challenges. I thrive on turning ideas into reality through clean, maintainable, and well-documented code.
          </Text>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab('skills')}
            >
              <View style={[styles.tabButton, activeTab === 'skills' && styles.activeTabButton]}>
                <Text style={[styles.tabText, activeTab === 'skills' && styles.activeTabText]}>
                  SKILLS
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.tab}
              onPress={() => setActiveTab('education')}
            >
              <View style={[styles.tabButton, activeTab === 'education' && styles.activeTabButton]}>
                <Text style={[styles.tabText, activeTab === 'education' && styles.activeTabText]}>
                  EDUCATION
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {activeTab === 'skills' ? (
            <View style={styles.tabContent}>
              <SkillItem title="WEB DEVELOPMENT" description="Creating Web apps/sites" />
              <SkillItem title="FRONT-END DEVELOPMENT" description="Web user-interface" />
              <SkillItem title="MOBILE DEVELOPMENT" description="Creating mobile applications" />
            </View>
          ) : (
            <View style={styles.tabContent}>
              <EducationItem period="2024 - CURRENT" institution="POWER LEARN PROJECT ACADEMY" />
              <EducationItem period="2024 - CURRENT" institution="BACHELOR OF BUSINESS INFORMATION TECHNOLOGY AT KIRINYAGA UNIVERSITY" />
              <EducationItem period="2020 - 2023" institution="HIGH SCHOOL CERTIFICATE AT KANJURI BOYS HIGH SCHOOL" />
            </View>
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const SkillItem = ({ title, description }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

const EducationItem = ({ period, institution }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{period}</Text>
    <Text style={styles.itemDescription}>{institution}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageGradient: {
    borderRadius: 100,
    padding: 4,
    width: 220,
    height: 220,
  },
  profileImage: {
    width: 212,
    height: 212,
    borderRadius: 96,
    backgroundColor: '#0a0a0a',
  },
  description: {
    color: '#e0e0e0',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#1a2a2a',
    borderWidth: 1,
    borderColor: '#1a4d4a',
  },
  activeTabButton: {
    backgroundColor: '#05c6bf',
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  activeTabText: {
    color: '#0a0a0a',
  },
  tabContent: {
    marginBottom: 15,
  },
  listItem: {
    backgroundColor: '#1a2a2a',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#05c6bf',
    marginBottom: 15,
  },
  itemTitle: {
    color: '#00ff88',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  itemDescription: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 13,
    lineHeight: 20,
  },
});
