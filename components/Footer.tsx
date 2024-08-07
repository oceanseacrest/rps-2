import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY="0.5rem"
      bgColor="gray.200"
    >
      <Link href="/" color="gray.700" _focus={{ borderRadius: "sm" }}>
        Home
      </Link>
    </Box>
  );
};

export default Footer;
