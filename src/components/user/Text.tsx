// components/user/Text.js
import React from "react";

interface TextProps {
  text: string;
  fontSize: string;
}

export const Text: React.FC<TextProps> = ({text, fontSize}) => {
  return (
      <div>
         <p style={{fontSize}}>{text}</p>
      </div>
  )
}
