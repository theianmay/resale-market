import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function PickerItem({ label }) {
  return (
    <TouchableOpacity>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
