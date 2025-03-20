import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { memo, RefObject, useCallback, useMemo, useRef, useState } from "react";
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
import React from "react";

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

function MyInputTextNoMemo<T extends FieldValues>({
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
  const inputRef = useRef<TextInput>(null);

  const focusInput = useCallback(() => {
    if (!readOnly) {
      setFfocus(true);
      inputRef.current?.focus();
    }
  }, []);

  const blurInput = useCallback(() => {
    setFfocus(false);
    inputRef.current?.blur();
  }, []);

  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        borderColor: errors[name]
          ? Colors.light.error
          : ffocus
          ? ColorsBase.cyan400
          : ColorsBase.neutral400,
        borderWidth: ffocus ? 3 : 1,
      },
    ],
    [errors[name], ffocus]
  );

  return (
    <View>
      <Pressable
        accessible={false}
        onPress={() => {
          focusInput();
        }}
      >
        <View style={[containerStyle]}>
          <IconSymbol
            name={iconName}
            size={24}
            color={ffocus ? ColorsBase.cyan400 : ColorsBase.cyan200}
          />
          <TextInput
            readOnly={readOnly}
            {...rest}
            onFocus={focusInput}
            onBlur={blurInput}
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            ref={myref ? myref : inputRef}
            maxLength={64}
            placeholderTextColor={ColorsBase.neutral400}
          />
          {iconAction && (
            <IconActionButton
              iconAction={iconAction}
              onIconPress={handleIconAction}
            />
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

const MyInputText = memo(MyInputTextNoMemo, (prevProps, nextProps) => {
  return (
    prevProps.iconAction === nextProps.iconAction &&
    prevProps.handleIconAction === nextProps.handleIconAction
  );
}) as typeof MyInputTextNoMemo;

export default MyInputText;


const IconActionButton = memo(
  function ({
    iconAction,
    onIconPress,
  }: {
    iconAction: IconSymbolName;
    onIconPress?: () => void;
  }) {
    const onIconPressAction = useCallback((e: GestureResponderEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (onIconPress) {
        onIconPress();
      }
    }, []);
    return (
      <TouchableOpacity onPress={onIconPressAction}>
        <IconSymbol name={iconAction} size={24} color={"black"} />
      </TouchableOpacity>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.iconAction === nextProps.iconAction;
  }
);

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
