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
  Button,
  Alert,
  Platform,
  Dimensions,
  useWindowDimensions
} from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log(useWindowDimensions());
  
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
      <Button
        color="blue"
        title="Click Me"
        onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress: () => console.log("No")}
        ])} />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: "30%",
      }}
      ></View>
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
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
