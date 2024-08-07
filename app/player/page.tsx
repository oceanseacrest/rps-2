"use client";

import Game from "@/components/Game";
import NameInput from "@/components/NameInput";
import NextButton from "@/components/NextButton";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

const Player = () => {
  const [playerOneName, setPlayerOneName] = useState<string>("Player 1");
  const [playerTwoName, setPlayerTwoName] = useState<string>("Player 2");
  const [namesSubmitted, setNamesSubmitted] = useState<boolean>(false);

  const handleNameChange = (name: string, player: number) => {
    if (player === 1) {
      setPlayerOneName(name.trim() === "" ? "Player 1" : name);
    } else if (player === 2) {
      setPlayerTwoName(name.trim() === "" ? "Player 2" : name);
    }
  };

  const handleEnterPressed = () => {
    if (playerOneName.trim() === "" || playerTwoName.trim() === "") {
      return;
    } else {
      setNamesSubmitted(true);
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
      {!namesSubmitted && (
        <>
          <Box
            display="flex"
            flexDirection={["column", "column", "row"]}
            gap="2rem"
          >
            <NameInput
              inputType="Player 1"
              color="green"
              onNameChange={(name) => handleNameChange(name, 1)}
              onEnterPressed={() => handleEnterPressed()}
            />

            <NameInput
              inputType="Player 2"
              color="pink"
              onNameChange={(name) => handleNameChange(name, 2)}
              onEnterPressed={() => handleEnterPressed()}
            />
            <NextButton handleNextClicked={() => setNamesSubmitted(true)} />
          </Box>
        </>
      )}
      {namesSubmitted && (
        <Game playerOneName={playerOneName} playerTwoName={playerTwoName} />
      )}
    </Box>
  );
};

export default Player;
