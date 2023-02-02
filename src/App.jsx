import { useToast, Flex, Spacer, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MenuDrawer from "./components/menu-drawer/MenuDrawer";
import UserDrawer from "./components/user-drawer/UserDrawer";

function startUp() {
  // TODO Verificar que esten las credenciales cargadas
}

export default function App() {
  const toast = useToast();
  useEffect(() => startUp(), []);
  return (
    <>
      <Flex>
        <MenuDrawer />
        <Spacer />
        <UserDrawer />
      </Flex>
      <Container marginTop="15px">
        <Outlet />
      </Container>
    </>
  );
}
