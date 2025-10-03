import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { icons } from "@/constants/icons";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

function TabIcon({ focused, icon, title }: any) {
  return (
    <View 
      className="flex flex-row items-center justify-center 
      rounded-full"
      style={{
        backgroundColor: focused ? '#8B7FD8' : 'transparent',  // Light purple
        minWidth: focused ? 112 : 60,
        minHeight: 56,
        paddingHorizontal: 16,
      }}
    >
      <Image 
        source={icon} 
        tintColor={focused ? "#151312" : "#A8B5DB"} 
        style={{ width: 20, height: 20 }}
      />
      {focused && (
        <ThemedText 
          className="font-semibold ml-2"
          style={{ color: '#151312', fontSize: 16 }}
        >
          {title}
        </ThemedText>
      )}
    </View>
  );
}

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopColor: Colors[colorScheme ?? 'light'].background,
          height: 70,
          borderRadius: 50,
          marginHorizontal: 20,
          
          paddingBottom: 8,
          paddingTop: 8,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}