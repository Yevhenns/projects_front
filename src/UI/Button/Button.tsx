import { FC, HTMLProps, PropsWithChildren } from "react";

interface Props extends HTMLProps<PropsWithChildren<HTMLButtonElement>> {}

export const Button: FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};
