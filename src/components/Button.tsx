import { ReactNode } from "react";
import Alert from "./Alert";
type Props = {
  children: ReactNode;
  color: "primary" | "secondary";
  handleClick: () => void;
};

const Button = (props: Props) => {
  const {children, handleClick, color = "primary" } = props;
  return (
    <button type="button" onClick={handleClick} className={` btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
