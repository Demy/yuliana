import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode,
  color?: any,
}

export default function Title(props: TitleProps) {
  return (
    <Typography 
      component="h2" 
      variant="h6" 
      color={props.color ?? "primary"} 
      gutterBottom
      mb={0}
    >
      {props.children}
    </Typography>
  );
}