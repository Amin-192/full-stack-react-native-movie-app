import { Image } from 'expo-image';
import { Platform, StyleSheet,TouchableOpacity,View,Text , ScrollView} from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { BrandColors, Colors } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 16, gap: 16 }}>
          <ThemedText style={{ fontSize: 24, fontWeight: '600' }}>
            Welcome to the App!
          </ThemedText>

          <TouchableOpacity
            className='w-32 items-center self-center px-4 py-4 rounded-2xl bg-accent'
          >
            <ThemedText>Sign UP</ThemedText>
          </TouchableOpacity>
        </View>

        <View >
          <ThemedText className="text-3xl font-bold self-center">
            Welcome to Nativewind!
          </ThemedText>
          <Link 
          className='items-center self-center'
          href="./Onboarding">
         <ThemedText> Onboarding</ThemedText> 
          </Link>
          <Link 
          className='items-center self-center'
          href="./movies/avengers">
         <ThemedText> Avengers Movie</ThemedText> 
          </Link>
          <Link 
          className='items-center self-center'
          href="./movies/iron-man">
         <ThemedText> iron-man Movie</ThemedText> 
          </Link>
        </View>
      </ScrollView>
    </ThemedView>
  );
}