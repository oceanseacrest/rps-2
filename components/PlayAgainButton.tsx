import { Button, ButtonProps, Text } from "@chakra-ui/react";

type PlayAgainButtonProps = {
  onSelect: () => void;
} & ButtonProps;

const PlayAgainButton = ({ onSelect, ...rest }: PlayAgainButtonProps) => {
  return (
    <Button
      marginTop="1rem"
      bgColor="purple.400"
      _hover={{
        bgColor: "purple.200",
      }}
      onClick={onSelect}
      {...rest}
    >
      <Text color="white">Play again</Text>
    </Button>
  );
};

export default PlayAgainButton;
