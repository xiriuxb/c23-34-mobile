import { useForm } from "react-hook-form";
import RegisterUserContext, {
  initialRegValues,
  RegDataVals,
} from "./RegisterUserContext";

export default function RegisterUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { control,getValues } = useForm<RegDataVals>({
    defaultValues: initialRegValues,
  });
  return (
    <RegisterUserContext.Provider
      value={{ control: control, data: initialRegValues, getValues:getValues }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
}
