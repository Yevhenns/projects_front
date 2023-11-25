import { FC } from "react";
// import { Input } from "../../UI/Input/Input";
// import { Button } from "../../UI/Button/Button";
import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Header: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      textAlign="center"
      gap="10px"
      padding="10px"
    >
      <Button colorScheme="teal">Додати</Button>

      <InputGroup maxWidth="300px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Пошук" />
      </InputGroup>

      <Select maxWidth="100px">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    </Box>
  );
};
