import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Actions from "./actions";
import Info from "./info";
import NavButton from "./nav-button";
import Search from "./search";
import { useRouter } from "next/router";
import { routes } from "../sidebar";

const Navbar = () => {
  const router = useRouter();

  const getRoute = () => {
    return routes.find(({ href }) => router.pathname === href)?.name;
  };

  return (
    <Flex
      layerStyle="card"
      h="3.5rem"
      roundedBottom={[, , "xl"]}
      alignItems="center"
      p={3}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <Info display={["none", , "flex"]} />
        <NavButton />

        <Spacer display={{ md: "none" }} />
        <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: "none" }}
        >
          {getRoute()}
        </Text>
        <Search display={["none", , "initial"]} />
        <Spacer />
        <Actions />
      </Stack>
    </Flex>
  );
};

export default Navbar;
