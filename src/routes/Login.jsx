import { Button, Flex, useToast, Center, Spacer } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Send as Feather_Icon_Send } from "react-feather";
import { useEffect } from "react";
import { ChakraUIFormField } from "../components/chakra-ui-form-field/ChakraUIFormField";
import { Heading } from "@chakra-ui/react";
import * as awsCognitoService from "../services/aws.cognito.service";

function FormikWrappeable({ setValues, validateRequired }) {
  useEffect(() => {
    // TODO load credentials
  }, []);
  return (
    <>
      <Center mb="1rem">
        <Heading>Iniciar sesión</Heading>
      </Center>
      <Form>
        <ChakraUIFormField
          label="Nombre de usuario"
          fieldName="username"
          validate={validateRequired}
        ></ChakraUIFormField>
        <ChakraUIFormField
          label="Contraseña"
          fieldName="password"
          validate={validateRequired}
        ></ChakraUIFormField>
        <Flex justifyContent="end">
          <Button marginTop="0.75rem" type="submit">
            <Feather_Icon_Send />
          </Button>
        </Flex>
      </Form>
    </>
  );
}

export default function Login({ handleLogin }) {
  const toast = useToast();

  function validateRequired(value) {
    let error;
    if (!value) {
      error = "Debe completar este campo";
    }
    return error;
  }

  async function handleSubmit(values) {
    console.log('been here');
    handleLogin();
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ setValues }) => (
        <FormikWrappeable
          setValues={setValues}
          validateRequired={validateRequired}
        />
      )}
    </Formik>
  );
}
