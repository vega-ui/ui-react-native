import React from 'react'
import { View } from 'react-native';
import { Text, Button, ButtonLabel, ButtonIcon, IconButton } from "@vega-ui/react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Heart, Globe } from '@vega-ui/reanimated-icons'

export default function HomeScreen() {
  const scheme = useColorScheme()
  
  return (
    <View style={{ paddingTop: 200, flex: 1, alignItems: 'center', backgroundColor: scheme === 'dark' ? 'black' : 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Text size={3}>Hello</Text>
      <IconButton variant='secondary' appearance='ghost'>
        {({ pressed }) => (
          pressed ? <Heart /> : <Globe />
        )}
      </IconButton>
      <Button variant='primary' appearance='ghost' size='large'>
        <ButtonLabel>Hello, world!</ButtonLabel>
        <ButtonIcon>
          <Heart />
        </ButtonIcon>
      </Button>
    </View>
  );
}
