import { FC, useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { TaskList } from "./components/TaskList/TaskList";
import { ShowDetails } from "./components/ShowDetails/ShowDetails";
import { HideDetails } from "./components/HideDetails/HideDetails";

interface Props {
  data: {
    id: string;
    title: string;
    description: string;
    category: string;
    tasks: {
      id: string;
      task: string;
    }[];
  };
}

export const Project: FC<Props> = ({ data }) => {
  const { title, description, tasks } = data;

  const [isOpen, setIsOpen] = useState(false);

  const openDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box border="1px" borderColor="gray.200" borderRadius="10px" padding="10px">
      <Stack mb="10px">
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Stack>
      <Box borderTop="1px" borderColor="gray.200" paddingTop="10px">
        {!isOpen ? (
          <ShowDetails openDetails={openDetails} />
        ) : (
          <Box>
            <TaskList tasks={tasks} />
            <HideDetails openDetails={openDetails} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
