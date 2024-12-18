import { PersonProps } from "./Person.type";

const Person = (props: PersonProps) => {
  const { name } = props;
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
