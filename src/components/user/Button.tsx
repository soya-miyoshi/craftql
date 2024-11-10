// components/user/Button.js
import {Button as MaterialButton} from "@mui/material";

import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary';
}

export const Button: React.FC<CustomButtonProps> = ({size, variant, color, children}) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  )
}
