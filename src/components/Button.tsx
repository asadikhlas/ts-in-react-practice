import React from "react";

type Buttonprops = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: Buttonprops) => {
  const { handleClick } = props;
  return <button onClick={(event) => handleClick(event, 10)}>Button</button>;
};

export default Button;
