import React from "react";

type greetProps = {
  name: string;
  age?: number;
};

const Greet = (props: greetProps) => {
  const { name, age } = props;
  return (
    <div>
      {name} {age}{" "}
    </div>
  );
};

export default Greet;
