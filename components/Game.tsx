"use client";

import { Choice } from "@/shared/types";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import ChoiceButton from "./ChoiceButton";
import PlayerDetails from "./PlayerDetails";
import { capitalizeFirstLetter } from "@/shared/utils";
import PlayAgainButton from "./PlayAgainButton";

type GameProps = {
  playerOneName: string;
  playerTwoName: string;
  vsComputer?: boolean;
};

const NUMBER_OF_ROUNDS = 3;

const Game = ({ playerOneName, playerTwoName, vsComputer }: GameProps) => {
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [playerOneSelection, setPlayerOneSelection] = useState<
    Choice | undefined
  >(undefined);
  const [playerTwoSelection, setPlayerTwoSelection] = useState<
    Choice | undefined
  >(undefined);
  const [calculatingWinner, setCalculatingWinner] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [winner, setWinner] = useState<string>("");

  const choices: Choice[] = ["rock", "paper", "scissors"];
  const choicesAsEmoji: string[] = ["🪨", "📄", "✂️"];
  const keyMapping: Record<string, Choice> = {
    r: "rock" as Choice,
    p: "paper" as Choice,
    s: "scissors" as Choice,
  };
  const emojiMapping: Record<string, Choice> = {
    "🪨": "rock" as Choice,
    "📄": "paper" as Choice,
    "✂️": "scissors" as Choice,
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const choice = keyMapping[event.key];
      if (choice) {
        handleSelection(choice);
      }
    },
    [currentPlayer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleSelection = (choice: Choice) => {
    if (currentPlayer === 1) {
      setPlayerOneSelection(choice);
      if (vsComputer) {
        const computerChoice = getRandomChoice();
        setPlayerTwoSelection(computerChoice);
      } else {
        setCurrentPlayer(2);
      }
    } else if (currentPlayer === 2) {
      setPlayerTwoSelection(choice);
    }
  };

  const handleSelectPlayAgain = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setRound(1);
    setWinner("");
    setMessage("");
    clearChoices();
  };

  useEffect(() => {
    if (playerTwoSelection) {
      setCalculatingWinner(true);
      setTimeout(() => {
        const roundWinner = determineRoundWinner(
          playerOneSelection,
          playerTwoSelection
        );
        updateScoresAndRound(roundWinner);
        setCalculatingWinner(false);
        clearChoices();
      }, 500);
    }
  }, [playerTwoSelection]);

  const clearChoices = () => {
    setPlayerOneSelection(undefined);
    setPlayerTwoSelection(undefined);
    setCurrentPlayer(1);
  };

  const determineRoundWinner = (
    selectionOne: Choice | undefined,
    selectionTwo: Choice | undefined
  ): number => {
    if (!selectionOne || !selectionTwo) {
      setMessage(
        "Both players need to make a selection. Something went wrong."
      );
      return -1;
    }

    if (selectionOne === selectionTwo) {
      setMessage("Draw!");
      return -1;
    }

    if (
      (selectionOne === "paper" && selectionTwo === "rock") ||
      (selectionOne === "rock" && selectionTwo === "scissors") ||
      (selectionOne === "scissors" && selectionTwo === "paper")
    ) {
      setMessage(
        `${capitalizeFirstLetter(
          selectionOne
        )} beats ${selectionTwo}. ${playerOneName} wins this round!`
      );
      return 1;
    } else {
      setMessage(
        `${capitalizeFirstLetter(
          selectionTwo
        )} beats ${selectionOne}. ${playerTwoName} wins this round!`
      );
      return 2;
    }
  };

  const updateScoresAndRound = (roundWinner: number) => {
    let newPlayerOneScore = playerOneScore;
    let newPlayerTwoScore = playerTwoScore;

    if (roundWinner === 1) {
      newPlayerOneScore += 1;
      setPlayerOneScore((prevScore) => prevScore + 1);
    } else if (roundWinner === 2) {
      newPlayerTwoScore += 1;
      setPlayerTwoScore((prevScore) => prevScore + 1);
    }

    setRound((prevRound) => {
      const newRound = prevRound + 1;

      if (newRound > NUMBER_OF_ROUNDS) {
        determineGameWinner(newPlayerOneScore, newPlayerTwoScore);
      }

      return newRound;
    });
  };

  const determineGameWinner = (
    finalPlayerOneScore: number,
    finalPlayerTwoScore: number
  ) => {
    if (finalPlayerOneScore === finalPlayerTwoScore) {
      setWinner("Neither player");
      setMessage("It's a tie.");
    } else {
      const finalWinner =
        finalPlayerOneScore > finalPlayerTwoScore
          ? playerOneName
          : playerTwoName;
      const finalScore =
        finalPlayerOneScore > finalPlayerTwoScore
          ? finalPlayerOneScore
          : finalPlayerTwoScore;
      setWinner(finalWinner);
      setMessage(
        `${finalWinner} won ${finalScore} out of ${NUMBER_OF_ROUNDS} rounds.`
      );
    }
  };

  const getRandomChoice = (): Choice => {
    const randomIndex =
      Math.floor(Math.random() * new Date().getMilliseconds()) % choices.length;
    return choices[randomIndex];
  };

  const GameInstructions = () => {
    return (
      <Text
        fontWeight="bold"
        fontSize={["md", "lg", "2xl"]}
        textAlign="center"
        color="orange.300"
        maxWidth={["250px", "250px", "500px", "500px"]}
        paddingY="1rem"
      >
        {currentPlayer === 1 ? playerOneName : playerTwoName}, press a button or
        use the keyboard to select your choice (r, p, s):
      </Text>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      paddingY="2rem"
      width="100%"
      flex={1}
    >
      <PlayerDetails
        alignment="start"
        color="green"
        playerName={playerOneName}
        playerScore={playerOneScore}
        isTurn={currentPlayer === 1}
        flex="0 0 33%"
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        flex={1}
      >
        {!winner && (
          <>
            <Text fontSize="4xl" fontWeight="bold">
              Round {round}
            </Text>

            {!calculatingWinner && (
              <>
                <Text display="flex" textAlign="center">
                  {message}
                </Text>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                >
                  <GameInstructions />
                  <Box display="flex" flexDirection="row" gap="1rem">
                    {choicesAsEmoji.map((choiceAsEmoji) => (
                      <ChoiceButton
                        size={["sm", "md", "lg"]}
                        key={emojiMapping[choiceAsEmoji]}
                        choiceAsEmoji={choiceAsEmoji}
                        onSelect={() =>
                          handleSelection(emojiMapping[choiceAsEmoji])
                        }
                      />
                    ))}
                  </Box>
                </Box>
              </>
            )}
            {calculatingWinner && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Spinner size="xl" />
              </Box>
            )}
          </>
        )}

        {winner && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Text fontSize="4xl" fontWeight="bold">
              {winner} wins!
            </Text>

            <Text display="flex" textAlign="center">
              {message}
            </Text>

            <PlayAgainButton onSelect={() => handleSelectPlayAgain()} />
          </Box>
        )}
      </Box>

      <PlayerDetails
        alignment="end"
        color="pink"
        playerName={playerTwoName}
        playerScore={playerTwoScore}
        isTurn={currentPlayer === 2}
        flex="0 0 33%"
      />
    </Box>
  );
};

export default Game;
