import React, {useState} from 'react'
import { View } from 'react-native';
import {
  Text,
  Button,
  ButtonLabel,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent, AccordionTriggerLabel, IconButton, IconButtonIcon, Alert,
  AlertBody, Badge, BadgeLabel
} from "@vega-ui/react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Heart } from "@vega-ui/reanimated-icons";

export default function HomeScreen() {
  const scheme = useColorScheme()
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <View style={{ paddingTop: 200, flex: 1, alignItems: 'center', backgroundColor: scheme === 'dark' ? 'black' : 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <IconButton size='small' appearance='ghost'>
        <IconButtonIcon>
          <Heart />
        </IconButtonIcon>
      </IconButton>
      <Collapsible open={collapsed} onChangeOpen={setCollapsed}>
        <CollapsibleTrigger asChild>
          <Button appearance='ghost'>
            <ButtonLabel>I&#39;m collapsible</ButtonLabel>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>Hello, world!</Text>
        </CollapsibleContent>
      </Collapsible>
      <Accordion size='small'>
        <AccordionItem position={1} value='1'>
          <AccordionTrigger>
            <AccordionTriggerLabel>Push me</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent><Text>Hello</Text></AccordionContent>
        </AccordionItem>
        <AccordionItem position={2} value='2'>
          <AccordionTrigger>
            <AccordionTriggerLabel>Push me 2</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent><Text>Hello 2</Text></AccordionContent>
        </AccordionItem>
        <AccordionItem position={3} value='3'>
          <AccordionTrigger>
            <AccordionTriggerLabel>Push me 3</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent><Text>Hello 3</Text></AccordionContent>
        </AccordionItem>
      </Accordion>
      <Alert title='Hello' variant='success' appearance='surface'>
        <AlertBody>Hi!</AlertBody>
      </Alert>
      <Badge size='md' variant='success' appearance='surface'>
        <BadgeLabel>
          Hello!
        </BadgeLabel>
      </Badge>
    </View>
  );
}
