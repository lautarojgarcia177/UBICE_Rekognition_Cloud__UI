import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { Field } from "formik";
  import { Save as Feather_Icon_Save } from "react-feather";

export function ChakraUIFormField({ label, fieldName, validate }) {
    return (
      <Field name={fieldName} validate={validate}>
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors[fieldName] && form.touched[fieldName]}
          >
            <FormLabel>{label}</FormLabel>
            <Input {...field}></Input>
            <FormErrorMessage>{form.errors[fieldName]}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    );
  }