'use client'
import React from "react";
import { Field, ErrorMessage, FieldConfig } from "formik";

interface InputFieldProps extends FieldConfig {
    label: string
}

export const InputField = ({label, name, ...restProps}: InputFieldProps) => {
    debugger;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...restProps} />
      <ErrorMessage name={name} />
    </div>
  );
};
