import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
  Button
} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed.");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello, World!
      </Text>
      <TouchableHighlight onPress={() => console.log("Image pressed.")}>
        <Image
        blurRadius={0}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <Button title="Click Me" onPress={() => console.log("Button pressed.")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
