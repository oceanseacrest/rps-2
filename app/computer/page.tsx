"use client";

import Game from "@/components/Game";
import NameInput from "@/components/NameInput";
import NextButton from "@/components/NextButton";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Computer = () => {
  const [playerName, setPlayerName] = useState<string>("Player");
  const [nameSubmitted, setNameSubmitted] = useState<boolean>(false);

  const handleNameChange = (name: string) => {
    setPlayerName(name.trim() === "" ? "Player" : name);
  };

  const handleEnterPressed = () => {
    if (playerName.trim() === "") {
      return;
    } else {
      setNameSubmitted(true);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
    >
      {!nameSubmitted && (
        <>
          <Box display="flex" flexDirection="row" gap="2rem">
            <NameInput
              inputType="Player"
              color="green"
              onNameChange={(name) => handleNameChange(name)}
              onEnterPressed={() => handleEnterPressed()}
            />
            <NextButton handleNextClicked={() => setNameSubmitted(true)} />
          </Box>
        </>
      )}
      {nameSubmitted && (
        <Game playerOneName={playerName} playerTwoName="Computer" vsComputer />
      )}
    </Box>
  );
};

export default Computer;
