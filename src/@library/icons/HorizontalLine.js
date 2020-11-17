import React from "react";
import { View } from "react-native";

export const HorizontalLine = props => {
  return (
    <View
      style={{
        backgroundColor: "#444444",
        width: props.width,
        height: props.height,
        borderRadius: 5
      }}
    />
  );
};
