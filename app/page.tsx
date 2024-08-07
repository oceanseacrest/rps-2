import GameTypeButton from "@/components/GameTypeButton";
import Title from "@/components/Title";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" flex="1">
      <Title />
      <Box display="flex" flexDirection="column" paddingTop="16rem">
        <Box display="flex" flexDirection="row" gap="3rem">
          <GameTypeButton gameType="player" />
          <GameTypeButton gameType="computer" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
