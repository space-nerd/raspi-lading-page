import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const Hero = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => (
  <Grid
    templateColumns="repeat(1, 1fr)"
    gap={6}
    bgGradient="linear(to-l, #9900FF, #FF0099)"
    justifyContent="center"
    alignItems="center"
    bgClip="text"
    position={"fixed"}
    top="8rem"
  >
    <GridItem w="100%">
      <Heading fontSize={["4xl", "6vw"]}>{title}</Heading>
    </GridItem>
    <GridItem w="100%" justifyContent={"center"} alignItems={"center"}>
      <Text fontSize={["2xl", "4vw"]}>{subTitle}</Text>
    </GridItem>
  </Grid>
);

Hero.defaultProps = {
  title: "Welcome to my website!",
  subTitle: "Hosted on a Raspberry Pi 4b",
};
