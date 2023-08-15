'use client'

import { CustomForm, InputField } from "@/components";
import { LoginSchema } from "./validation.schema";
import styles from "./login.module.css";
export default function Page() {
  return (
    <div className={styles.login_form}>
      <h1>Hello, Login Page!</h1>
      <CustomForm
        onSubmit={(values: any) => {
          console.log(values);
        }}
        validationSchema={LoginSchema}
        initialValues={{ name: "", email:"", password:"" }}
      >
        <InputField name="name" label="Name" />
        <InputField name="email" label="Email" />
        <InputField name="password" label="Password" type="password" />
      </CustomForm>
    </div>
  );
}
