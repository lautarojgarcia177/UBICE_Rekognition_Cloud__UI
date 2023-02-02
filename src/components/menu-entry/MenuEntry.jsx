import { Flex } from "@chakra-ui/react";
import { Link as Router_Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function MenuEntry({ Feather_Icon, title, linkPath, onClose}) {
  return (
    <Router_Link onClick={onClose} to={linkPath} >
      <Flex>
        {<Feather_Icon style={{ marginRight: "5px" }} />}
        {title}
      </Flex>
    </Router_Link>
  );
}

MenuEntry.PropTypes = {
    Feather_Icon: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    linkPath: PropTypes.string.isRequired,
    onClose: PropTypes.func,
}