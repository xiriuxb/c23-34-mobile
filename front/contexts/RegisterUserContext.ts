import { createContext } from "react";
import { Control, useForm, UseFormGetValues } from "react-hook-form";

export type RegDataVals = {
  userName: string;
  userLastName: string;
  userDni: string;
  userPassword: string;
  userEmail: string;
  userPasswordConf: string;
};

export const initialRegValues: RegDataVals = {
  userName: "",
  userLastName: "",
  userDni: "",
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
