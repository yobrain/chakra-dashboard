import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Profile = () => {
  return (
    <HStack alignItems="center">
      <Avatar
        name="tal7aouy"
        src="https://avatars.githubusercontent.com/u/79597452?s=400&u=2498da9938b74155e713637b99394a84b54748be&v=4"
        size="sm"
      >
        <AvatarBadge boxSize="1.25em" bg="green.600" />
      </Avatar>
      <Icon as={IoIosArrowDown} />
    </HStack>
  );
};

export default Profile;
