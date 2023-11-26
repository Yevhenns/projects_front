import { FC } from "react";
import {
  IconButton,
  Text,
  List,
  ListItem,
  ButtonGroup,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

interface Props {
  tasks: { id: string; task: string }[];
}

export const TaskList: FC<Props> = ({ tasks }) => {
  return (
    <List mb="10px" spacing={3}>
      {tasks.map((item) => (
        <ListItem key={item.id} display="flex" justifyContent="space-between">
          <Text>{item.task}</Text>
          <ButtonGroup>
            <IconButton aria-label="edit" size="xs">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" size="xs">
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </ListItem>
      ))}
    </List>
  );
};
