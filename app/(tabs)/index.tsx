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
            style={{ backgroundColor: BrandColors.secondary, padding: 12, borderRadius: 8 }}
            className='w-32 items-center self-center'
          >
            <ThemedText>Sign UP</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={{  alignItems: 'center', justifyContent: 'center' }}>
          <ThemedText className="text-3xl font-bold text-blue-500">
            Welcome to Nativewind!
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}