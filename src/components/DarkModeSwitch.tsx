import { useColorMode, Button } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        onClick={toggleColorMode}
        position="fixed"
        top="1rem"
        right="1rem"
        width={"4rem"}
        height={"4rem"}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};
