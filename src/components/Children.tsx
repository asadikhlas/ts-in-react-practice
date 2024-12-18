type ChildrenProps = {
  children: string;
};

const Children = (props: ChildrenProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Children;
