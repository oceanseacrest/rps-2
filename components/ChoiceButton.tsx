import { Button, ButtonProps, Text } from "@chakra-ui/react";

type ChoiceButtonProps = {
  choiceAsEmoji: string;
  onSelect: () => void;
} & ButtonProps;

const ChoiceButton = ({
  choiceAsEmoji,
  onSelect,
  ...rest
}: ChoiceButtonProps) => {
  return (
    <Button
      bgColor="blue.400"
      _hover={{
        bgColor: "blue.200",
      }}
      onClick={onSelect}
      {...rest}
    >
      <Text bgColor="white" bgClip="text">
        {choiceAsEmoji}
      </Text>
    </Button>
  );
};

export default ChoiceButton;
