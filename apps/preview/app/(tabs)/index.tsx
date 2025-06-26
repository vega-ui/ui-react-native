import React, {useState} from 'react'
import { View } from 'react-native';
import { Text, Button, ButtonLabel, ButtonIcon } from "@vega-ui/react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Heart } from '@vega-ui/reanimated-icons'

export default function HomeScreen() {
  const scheme = useColorScheme()
  
  return (
    <View style={{ paddingTop: 200, flex: 1, alignItems: 'center', backgroundColor: scheme === 'dark' ? 'black' : 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Text size={3}>Hello</Text>
      <Button disabled variant='primary' appearance='ghost' size='large'>
        <ButtonLabel>Hello, world!</ButtonLabel>
        <ButtonIcon>
          <Heart />
        </ButtonIcon>
      </Button>
    </View>
  );
}
