import React from "react";
import Greet from "../Greet";

export const CustomProps = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.age}</div>;
};
