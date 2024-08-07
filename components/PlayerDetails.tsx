import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Text } from "@chakra-ui/react";

type PlayerDetailsProps = {
  playerName: string;
  playerScore: number;
  color: string;
  isTurn: boolean;
  alignment: "start" | "end";
} & BoxProps;

const PlayerDetails = ({
  playerName,
  playerScore,
  color,
  isTurn,
  alignment,
  ...rest
}: PlayerDetailsProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingX="1rem"
      alignItems={`flex-${alignment}`}
      {...rest}
    >
      {isTurn ? (
        <ArrowDownIcon w={12} h={12} color={`${color}.300`} />
      ) : (
        <Box w={12} h={12} />
      )}
      <Text
        textAlign={alignment}
        fontSize={["lg", "lg", "xl", "3xl"]}
        fontWeight="bold"
        color={`${color}.300`}
        maxWidth={["100px", "100px", "100px", "200px"]}
      >
        {playerName}
      </Text>
      <Text fontSize="lg">Score: {playerScore}</Text>
    </Box>
  );
};

export default PlayerDetails;
