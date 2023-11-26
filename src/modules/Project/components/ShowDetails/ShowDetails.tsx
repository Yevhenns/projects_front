import { FC } from "react";
import { IconButton, Center } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface Props {
  openDetails: () => void;
}

export const ShowDetails: FC<Props> = ({ openDetails }) => {
  return (
    <Center>
      <IconButton
        onClick={openDetails}
        colorScheme="teal"
        size="xs"
        isRound={true}
        aria-label="Show details"
      >
        <ArrowDownIcon w="20px" h="20px" />
      </IconButton>
    </Center>
  );
};
