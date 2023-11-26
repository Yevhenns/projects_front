import { FC, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Project } from "../../modules/Project/Project";

export const Home: FC = () => {
  const [items] = useState([
    {
      id: "1",
      title: "title1",
      description: "asd",
      category: "1",
      tasks: [
        { id: "1", task: "to do 1" },
        { id: "2", task: "to do 2" },
      ],
    },
    {
      id: "2",
      title: "title2",
      description: "asd",
      category: "2",
      tasks: [
        { id: "1", task: "to do 1" },
        { id: "2", task: "to do 2" },
      ],
    },
  ]);

  return (
    <Box marginLeft="auto" marginRight="auto" w={[300, 400, 500]}>
      <Box display="flex" flexDirection="column" gap="20px">
        {items.map((item) => (
          <Project key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  );
};
