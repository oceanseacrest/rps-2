import { Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Text
      as="h1"
      paddingY="3rem"
      fontWeight="semibold"
      bgGradient="linear(to-r, gray.600, gray.900)"
      bgClip="text"
      fontSize="6xl"
      textAlign="center"
    >
      Rock, Paper, Scissors!
    </Text>
  );
};

export default Title;
