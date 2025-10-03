import { TextInput, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Image } from 'react-native';
import { icons } from '@/constants/icons';

interface Props {
  placeholder: string;
  onPress: () => void;
}
export default function SearchBar({ placeholder, onPress}: Props) {
 
  return (
    <ThemedView className='flex-row self-center rounded-full px-5 py-4 '>
      <Image source={icons.search} 
      className='w-5 h-5 mr-3' resizeMode='contain'/>
      <TextInput
    onPress={onPress}
    placeholder = {placeholder}
    value =""
    onChangeText={()=>{}}
    placeholderTextColor= "#888"
    className='flex-1 ml-2 text-white'
      >
        Search
      </TextInput>
    </ThemedView>
  );
}
