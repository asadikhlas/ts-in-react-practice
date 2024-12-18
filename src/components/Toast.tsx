type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "Center" | "right";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>This is the toas position {position}</div>;
};

export default Toast;
