import { Button, Flex, useToast, Center, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Send as Feather_Icon_Send } from "react-feather";
import { useEffect } from "react";
import { ChakraUIFormField } from "../components/chakra-ui-form-field/ChakraUIFormField";
import { appRoutes } from "../main";
import { useNavigate } from "react-router-dom";

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

export default function Login() {
  const toast = useToast();
  const navigate = useNavigate();

  function validateRequired(value) {
    let error;
    if (!value) {
      error = "Debe completar este campo";
    }
    return error;
  }

  async function handleSubmit(values) {
    // const res = await awsCognitoService.fakeAuth(values);
    // localStorage.setItem("access_token", res.data.token);
    // localStorage.setItem("expires_in", res.data.expiresIn);
    // localStorage.setItem("login_date", JSON.stringify(new Date()));
    navigate(appRoutes.root);
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
