import React from "react";
import { Formik, Form, FormikProps } from "formik";

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
  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {children}
        <button type="submit">{submitButtonLabel}</button>
      </Form>
    </Formik>
  );
};
