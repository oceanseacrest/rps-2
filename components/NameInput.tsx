import { Input, InputProps } from "@chakra-ui/react";

type NameInputProps = {
  inputType: string;
  color: string;
  onNameChange: (name: string) => void;
  onEnterPressed: () => void;
} & InputProps;

const NameInput = ({
  inputType,
  color,
  onNameChange,
  onEnterPressed,
  ...rest
}: NameInputProps) => {
  return (
    <Input
      size="lg"
      placeholder={`${inputType}’s name`}
      _placeholder={{ opacity: 1, color: `${color}.200` }}
      focusBorderColor={`${color}.300`}
      borderColor={`${color}.200`}
      maxLength={20}
      onChange={(e) => onNameChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnterPressed();
        }
      }}
      {...rest}
    />
  );
};

export default NameInput;
