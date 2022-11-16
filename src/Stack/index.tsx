import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: ReactNode;
  borderRadius?: number;
  padding?: number;
};

export const Stack: React.FC<Props> = ({
  children,
  borderRadius,
  padding = 8,
}) => {
  return (
    <View style={{ ...styles.container, borderRadius, padding }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
