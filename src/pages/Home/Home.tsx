import { FC, useState } from "react";
import { Box } from "@chakra-ui/react";

export const Home: FC = () => {
  const [items] = useState([
    {
      id: "1",
      title: "title1",
      descr: "asd",
      category: "1",
      tasks: ["1.asd", "2.dsa"],
    },
    {
      id: "2",
      title: "title1",
      descr: "asd",
      category: "2",
      tasks: ["1.asd", "2.dsa"],
    },
  ]);

  return (
    <Box marginLeft="auto" marginRight="auto" w={[300, 400, 500]}>
      <Box display="flex" flexDirection="column" gap="20px">
        {items.map((item) => (
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            padding="10px"
            key={item.id}
            cursor="pointer"
          >
            <p>{item.title}</p>
            <p>{item.descr}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
