import { RegDataVals } from "@/api/auth.service";
import { createContext } from "react";
import { Control, UseFormGetValues } from "react-hook-form";

export const initialRegValues: RegDataVals = {
  userName: "",
  userLastName: "",
  userDNI: "",
  userPassword: "",
  userEmail: "",
  userPasswordConf: "",
};

const RegisterUserContext = createContext<{
  data: RegDataVals;
  control?: Control<RegDataVals>;
  getValues?: UseFormGetValues<RegDataVals>
}>({ data: initialRegValues });

export default RegisterUserContext;
