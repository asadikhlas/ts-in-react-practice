type ListProps<T> = {
  items: T[];
  onClick: (item: T) => void;
};

const List = <T extends { id: number; first?: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List items below</h2>
      {items.map((item, index) => (
        <div onClick={() => onClick(item)} key={index}>
          {item.first} {item.last}
        </div>
      ))}
    </div>
  );
};

export default List;
