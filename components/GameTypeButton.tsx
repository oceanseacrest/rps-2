"use client";

import { GameType } from "@/shared/types";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type GameTypeButtonProps = {
  gameType: GameType;
} & ButtonProps;

const GameTypeButton = ({ gameType, ...rest }: GameTypeButtonProps) => {
  const router = useRouter();

  return (
    <Button
      size="lg"
      bgColor="blue.400"
      _hover={{
        bgColor: "blue.200",
      }}
      color="white"
      onClick={() => router.push(`/${gameType}`)}
      {...rest}
    >
      vs. {gameType}
    </Button>
  );
};

export default GameTypeButton;
