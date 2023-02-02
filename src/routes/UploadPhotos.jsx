import {
  Button,
  Container,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import DropFileInput from "../components/drop-file-input/DropFileInput";
import { Image } from "react-feather";
import { useEffect, useState } from "react";

export default function UploadPhotos() {
  const [stateFiles, setStateFiles] = useState([]);

  function onFileInputChange(event) {
    const { files } = event.target;
    prepareFiles(files);
  }

  function onDrop(files, event) {
    prepareFiles(files);
  }

  function prepareFiles(files) {
    // Convert object to array
    const filesArray = Object.keys(files).map(function (key) {
      return files[key];
    });
    const _files = [];
    // Extract some props from files to make it serializable for storing in state
    // Filter by supported file type
    files = filesArray.filter(
      (file) => file.type === "image/jpeg" || file.type === "image/png"
    );
    for (let i = 0; i < files.length; i++) {
      _files.push({
        id: i,
        name: files[i].name,
        path: files[i].path,
        numbers: [],
      });
    }
    setStateFiles(_files);
  }

  const listFiles = stateFiles.map((file) => (
    <ListItem key={file.id} className="li__file-name">
      <ListIcon as={Image} />
      <span>{file.name}</span>
    </ListItem>
  ));

  function onUpload() {
    console.log('been here');
  }

  return (
    <VStack>
      <Container centerContent m={5} w="80%">
        <h2 style={{ fontSize: "20px", marginBottom: "1rem" }}>
          Subir fotos
        </h2>
        <DropFileInput onFileInputChange={onFileInputChange} onDrop={onDrop} />
        <small style={{ marginTop: "0.5rem" }}>
          Haga click en la caja o arrastre las fotos al centro de la misma.
        </small>
      </Container>
      {stateFiles.length && (
        <>
          <Container maxHeight="600px" overflow="auto">
            <List>{listFiles}</List>
          </Container>
          <Button colorScheme="blue" onClick={onUpload}>
            Upload
          </Button>
        </>
      )}
    </VStack>
  );
}
