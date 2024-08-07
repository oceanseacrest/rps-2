import { Button, ButtonProps } from "@chakra-ui/react";

type NextButtonProps = {
  handleNextClicked: () => void;
} & ButtonProps;

const NextButton = ({ handleNextClicked, ...rest }: NextButtonProps) => {
  return (
    <Button
      size="lg"
      bgColor="orange.300"
      _hover={{
        bgColor: "orange.100",
      }}
      color="white"
      onClick={() => handleNextClicked()}
      {...rest}
    >
      next
    </Button>
  );
};

export default NextButton;
