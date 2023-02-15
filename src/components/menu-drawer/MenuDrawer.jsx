import { Menu as Feather_Menu_Icon } from "react-feather";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link as Router_Link } from "react-router-dom";
import { appRoutes } from "../../main";

export default function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="settings"
        icon={<Feather_Menu_Icon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex direction="column" alignItems="start">
              <Router_Link to={appRoutes.uploadPhotos} onClick={onClose}>
                Subir fotos
              </Router_Link>
              <a target="_blank" href="https://s3.console.aws.amazon.com/s3/buckets/ubicetest?region=sa-east-1&tab=objects#">Ver fotos subidas</a>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
