import React from "react";

type CssTestProps = {
  styles: React.CSSProperties;
};

const CssTest = (props: CssTestProps) => {
  const { styles } = props;
  return <div style={styles}>CssTest</div>;
};

export default CssTest;
