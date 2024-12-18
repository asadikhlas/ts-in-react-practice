import { Name } from "./Person.type";

type PersonListProps = {
  list: Name[];
};

const PersonList = (props: PersonListProps) => {
  const { list } = props;
  return (
    <div>
      {list.map((person) => (
        <div>
          {person.first} {person.last}
        </div>
      ))}
    </div>
  );
};

export default PersonList;
