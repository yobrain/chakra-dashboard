import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
} from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { border } from "@chakra-ui/react";
import React from "react";

import { FiSearch } from "react-icons/fi";

const Search = (props: InputGroupProps) => {
  return (
    <Flex {...props}>
      <InputGroup display="flex" alignItems="center">
        <InputLeftElement
          h="full"
          pointerEvents="none"
          children={<Icon as={FiSearch} color="blue.600" fontSize="lg" />}
        />
        <Input
        variant='flushed'
          type="text"
          placeholder="Search By ..."
          fontSize="sm"
          _placeholder={{
            textStyle: "light",
          }}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
