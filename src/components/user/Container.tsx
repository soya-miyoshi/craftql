// components/user/Container.js
import React from "react";
import { Paper } from "@mui/material";

interface ContainerProps {
  background: string;
  padding?: number;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({background, padding = 0, children}) => {
  return (
    <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}
