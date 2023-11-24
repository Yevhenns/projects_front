import { FC } from "react";
import { Input } from "../../UI/Input/Input";

export const Header: FC = () => {
  return (
    <header>
      <div>
        <Input placeholder="Пошук" />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </header>
  );
};
