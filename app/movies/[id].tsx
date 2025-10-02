import { View, Text, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams , Stack} from 'expo-router';

export default function MovieDetails() {
    const { id } = useLocalSearchParams();
  return (
    <>
         <Stack.Screen 
        options={{ 
          title: `${id}`,  
        }} 
      />
    <ThemedView style={styles.container}>
      <ThemedText>Movie Details {id}</ThemedText>
    </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
