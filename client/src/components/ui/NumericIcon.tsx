import * as React from 'react';
import { Icon, Typography } from '@mui/material';

interface NumericIconProps {
  value: Number;
}

export default function NumericIcon(props: NumericIconProps) {
  return (
    <Icon  
      sx={{
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden'
      }}
    >
      <Typography 
        component="h4" 
        variant="h5" 
        color="primary"
        sx={{ margin: '4px 0', fontWeight: 500 }}
      >
        {props.value}
      </Typography>
    </Icon>
  );
}