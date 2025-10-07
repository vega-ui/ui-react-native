import React, { useState } from 'react'
import { View } from 'react-native';
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, ButtonLabel, TextField, Switch, IconButton, IconButtonIcon } from "@vega-ui/react-native";
import { Globe } from "@vega-ui/reanimated-icons";

export default function HomeScreen() {
  const scheme = useColorScheme()
  const [value, setValue] = useState(0)
  
  return (
    <View style={{ paddingTop: 200, flex: 1, alignItems: 'center', backgroundColor: scheme === 'dark' ? 'black' : 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <View style={{ flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <TextField keyboardType='email-address' placeholder='First name' />
        <TextField error keyboardType='email-address' placeholder='Last name' />
        <TextField disabled keyboardType='email-address' placeholder='Last name' />
        <TextField error disabled keyboardType='email-address' placeholder='Last name' />
        <Switch />
        <Button variant='secondary' appearance='transparent' onPress={() => setValue(value + 1)}>
          <ButtonLabel>Increment (now: {value})</ButtonLabel>
        </Button>
        <IconButton>
          <IconButtonIcon><Globe /></IconButtonIcon>
        </IconButton>
      </View>
    </View>
  );
}
