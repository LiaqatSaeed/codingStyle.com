"use client";
import React from "react";
import { Field, ErrorMessage, FieldConfig } from "formik";
import styles from "./input.module.css";

interface InputFieldProps extends FieldConfig {
  label: string;
}

export const InputField = ({ label, name, ...restProps }: InputFieldProps) => {
  debugger;
  return (
    <div className={styles.form_group}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field className={styles.field} name={name} {...restProps} />
      <span className={styles.error}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};
