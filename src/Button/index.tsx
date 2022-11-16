import React, { useContext, useMemo } from "react";
import {
  Button as ButtonElement,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ThemeContext } from "../Provider";

type Props = {
  title: string;
  variant?: "contained" | "text";
  color?: string;
  onPress: () => void;
};

export const Button: React.FC<Props> = ({
  title,
  variant = "contained",
  color = "primary",
  onPress,
}) => {
  const colors = useContext(ThemeContext);

  const buttonColor = useMemo(() => {
    return colors[color] || color;
  }, [color]);

  return (
    <>
      {variant === "contained" ? (
        <ContainedButton title={title} onPress={onPress} color={buttonColor} />
      ) : (
        <TextButton title={title} onPress={onPress} color={buttonColor} />
      )}
    </>
  );
};

const ContainedButton: React.FC<
  Omit<Props, "variant" | "color"> & { color: string }
> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...containedButtonStyles.container, backgroundColor: color }}
    >
      <Text style={containedButtonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const containedButtonStyles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

const TextButton: React.FC<
  Omit<Props, "variant" | "color"> & { color: string }
> = ({ title, color, onPress }) => {
  return <ButtonElement title={title} color={color} onPress={onPress} />;
};
