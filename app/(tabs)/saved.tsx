import { View, Text, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function saved() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>saved</ThemedText>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
