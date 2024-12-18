type StatusesProps = {
  status: "success" | "loading" | "error";
};

const Statuses = (props: StatusesProps) => {
  let message;
  if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "loading") {
    message = "Data is loading";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }

  return <div>{message}</div>;
};

export default Statuses;
