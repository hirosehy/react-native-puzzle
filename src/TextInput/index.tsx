import React from "react";
import { StyleSheet, Text, TextInput as TextInputElement } from "react-native";

const LABEL_COLOR = "#6c757d";

type Props = {
  value: string;
  variant?: "basic" | "outlined" | "filled";
  label?: string;
  labelColor?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  onChangeText: (value: string) => void;
};

export const TextInput: React.FC<Props> = ({ variant = "basic", ...props }) => {
  switch (variant) {
    case "basic":
      return <BasicTextInput {...props} />;
    case "outlined":
      return <OutlinedTextInput {...props} />;
    case "filled":
      return <FilledTextInput {...props} />;
    default:
      return <BasicTextInput {...props} />;
  }
};

const BasicTextInput: React.FC<Omit<Props, "variant">> = ({
  paddingHorizontal,
  paddingVertical = 8,
  padding,
  label,
  labelColor = LABEL_COLOR,
  ...props
}) => {
  return (
    <>
      {label && <Text style={{ color: labelColor }}>{label}</Text>}
      <TextInputElement
        {...props}
        style={{
          ...basicStyles.container,
          padding,
          paddingHorizontal,
          paddingVertical,
        }}
      />
    </>
  );
};

const basicStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
});

const OutlinedTextInput: React.FC<Omit<Props, "variant">> = ({
  padding = 8,
  paddingHorizontal,
  paddingVertical,
  label,
  labelColor = LABEL_COLOR,
  ...props
}) => {
  return (
    <>
      {label && (
        <Text style={{ color: labelColor, marginBottom: 4 }}>{label}</Text>
      )}
      <TextInputElement
        {...props}
        style={{
          ...outlinedStyles.container,
          padding,
          paddingHorizontal,
          paddingVertical,
        }}
      />
    </>
  );
};

const outlinedStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
  },
});

const FilledTextInput: React.FC<Omit<Props, "variant">> = ({
  padding = 8,
  paddingHorizontal,
  paddingVertical,
  label,
  labelColor = LABEL_COLOR,
  ...props
}) => {
  return (
    <>
      {label && (
        <Text style={{ color: labelColor, marginBottom: 4 }}>{label}</Text>
      )}
      <TextInputElement
        {...props}
        style={{
          ...filledStyles.container,
          padding,
          paddingHorizontal,
          paddingVertical,
        }}
      />
    </>
  );
};

const filledStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
