import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

interface TitleProps {
  children?: React.ReactNode,
  color?: any,
  variant?: Variant,
}

export default function Title(props: TitleProps) {
  return (
    <Typography 
      component="h2" 
      variant={props.variant || 'h6'} 
      color={props.color ?? "primary"} 
      gutterBottom
      mb={0}
    >
      {props.children}
    </Typography>
  );
}