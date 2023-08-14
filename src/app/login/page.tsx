'use client'

import { CustomForm, InputField } from "@/components";
import { LoginSchema } from "./validation.schema";

export default function Page() {
  return (
    <div className="login-form">
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
