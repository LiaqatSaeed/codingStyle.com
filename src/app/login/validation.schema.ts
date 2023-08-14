import * as Yup from "yup";
import locale from "@/local/en.json";

export const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(locale.required),
  password: Yup.string()
    .required(locale.required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      locale.password_validation_error
    ),
  email: Yup.string().email(locale.not_valid).required(locale.required),
});
