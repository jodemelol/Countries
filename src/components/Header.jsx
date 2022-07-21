import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "elementDark");

  return (
    <Box bg={bg}>
      <Container maxW="container.xl">
        <Stack direction="row" justify="space-between" align="center" py={4}>
          <Text as="h2" fontWeight="bold">
            Where in the world?
          </Text>
          <Button
            leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          >
            Mode {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
