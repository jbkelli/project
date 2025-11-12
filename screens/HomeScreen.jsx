import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0a0a0a', '#1a1a2e', '#0a0a0a']}
        style={styles.gradient}
      >
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.greeting}>Hi, I'm</Text>
          <LinearGradient
            colors={['#05c6bf', '#00ff88', '#05c6bf']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.nameGradient}
          >
            <Text style={styles.name}>Alvin</Text>
          </LinearGradient>
          <Text style={styles.location}>From Kenya</Text>
          <Text style={styles.title}>WEB DEVELOPER</Text>
          <Text style={styles.title}>MOBILE DEVELOPER</Text>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
  },
  nameGradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#0a0a0a',
  },
  location: {
    fontSize: 30,
    color: '#fff',
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: '#05c6bf',
    fontWeight: 'bold',
    letterSpacing: 4,
    marginVertical: 5,
    textShadowColor: 'rgba(5, 198, 191, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
