import React from "react";
import { Formik, Form, FormikProps } from "formik";
import styles from "./custom-form.module.css";

interface CustomFormProps {
  onSubmit(values: any): void | Promise<any>;
  initialValues: any;
  children: any;
  submitButtonLabel?: string;
  validationSchema: any;
}

export const CustomForm: React.FC<CustomFormProps> = ({
  onSubmit,
  initialValues,
  children,
  submitButtonLabel = "Submit",
  validationSchema,
}: CustomFormProps) => {
  const onCancel = () => [(window.location.href = "/")];

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        {children}
        <div className={styles.button_group}>
          <button className={styles.button} onClick={onCancel}>Cancel</button>
          <button className={styles.button} type="submit">{submitButtonLabel}</button>
        </div>
      </Form>
    </Formik>
  );
};
