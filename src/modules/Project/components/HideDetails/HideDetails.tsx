import { FC } from "react";
import { IconButton, Center, ButtonGroup } from "@chakra-ui/react";
import { ArrowUpIcon, AddIcon } from "@chakra-ui/icons";

interface Props {
  openDetails: () => void;
}

export const HideDetails: FC<Props> = ({ openDetails }) => {
  return (
    <Center>
      <ButtonGroup spacing={3}>
        <IconButton
          colorScheme="teal"
          size="xs"
          isRound={true}
          aria-label="add"
        >
          <AddIcon w="20px" h="20px" />
        </IconButton>
        <IconButton
          onClick={openDetails}
          colorScheme="teal"
          size="xs"
          isRound={true}
          aria-label="Hide details"
        >
          <ArrowUpIcon w="20px" h="20px" />
        </IconButton>
      </ButtonGroup>
    </Center>
  );
};
