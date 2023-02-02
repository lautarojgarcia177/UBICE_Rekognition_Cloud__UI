import { Text, Center, VStack } from "@chakra-ui/react";
const ubiceImg = new URL("../assets/ubice.png", import.meta.url);

export default function Root() {
  return (
    <Center>
      <VStack>
        <Text fontSize="3em">UBICE Rekognition</Text>
        <img src={ubiceImg} />
      </VStack>
    </Center>
  );
}
