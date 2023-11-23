import { FC, forwardRef, HTMLProps, PropsWithRef } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <fieldset>
        <label htmlFor={props.htmlFor}>{label}</label>
        <input autoComplete="true" ref={ref} {...props} />
        {error && <span>{error}</span>}
      </fieldset>
    );
  }
);
