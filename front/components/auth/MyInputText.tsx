import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
  useFormState,
} from "react-hook-form";
import { IconSymbol, IconSymbolName } from "../ui/IconSymbol";
import { Colors, ColorsBase } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";

export type MyInputTextProps<T extends FieldValues> = TextInputProps & {
  control: Control<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  name: Path<T>;
  iconName?: IconSymbolName;
  iconAction?: IconSymbolName;
  handleIconAction?: () => void;
  myref?: RefObject<TextInput>;
};

export default function MyInputText<T extends FieldValues>({
  control,
  name,
  iconName = "house.fill" as IconSymbolName,
  iconAction,
  handleIconAction,
  rules,
  myref,
  readOnly,
  ...rest
}: MyInputTextProps<T>) {
  const [ffocus, setFfocus] = useState(false);
  const { field } = useController<T>({
    name,
    control,
    rules: rules,
  });

  const { errors } = useFormState<T>({ control });
  const inputRef = useRef<TextInput | null>(null);

  const focusInput = () => {
    if(readOnly) return;
    setFfocus(true);
    inputRef.current?.focus();
  };
  const blurInput = () => {
    setFfocus(false);
    inputRef.current?.blur();
  };

  useEffect(() => {
    if (myref) {
      inputRef.current = myref.current;
    }
    return () => {
      inputRef.current = null;
    };
  }, [myref]);

  return (
    <View>
      <Pressable
        accessible={false}
        onPress={() => {
          focusInput();
        }}
      >
        <View
          style={[
            styles.container,
            {
              borderColor: errors[name]
                ? Colors.light.error
                : ffocus
                ? ColorsBase.cyan400
                : ColorsBase.neutral400,
              borderWidth: ffocus ? 3 : 1,
            },
          ]}
        >
          <IconSymbol
            name={iconName}
            size={24}
            color={ffocus ? ColorsBase.cyan400 : ColorsBase.cyan200}
          />
          <TextInput
            readOnly={readOnly}
            {...rest}
            onFocus={() => setFfocus(true)}
            onBlur={blurInput}
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            ref={myref ? myref : inputRef}
            maxLength={64}
            placeholderTextColor={ColorsBase.neutral400}
          />
          {iconAction && (
            <TouchableOpacity onPress={handleIconAction}>
              <IconSymbol name={iconAction} size={24} color={"black"} />
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
      {errors[name] && (
        <ThemedText style={[styles.errorMessage, { color: Colors.dark.error }]}>
          {(errors[name] as any).message}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    gap: 5,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  input: {
    height: "90%",
    borderWidth: 0,
    flex: 1,
    outlineColor: "transparent",
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 13,
    position: "absolute",
    bottom: -18,
    left: 5,
  },
});
