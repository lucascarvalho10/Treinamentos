import React from "react";

type TextProps = {
  text: string;
};

export const Tweet: React.FC<TextProps> = ({ text }) => {
  return <div>{text}</div>;
};
