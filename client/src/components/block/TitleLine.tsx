import Paper from "@mui/material/Paper";
import Title from "../ui/Title";
import { Theme, useTheme } from '@mui/material/styles';

interface Props {
  content: string
}

export default function TitleLine(props: Props) {

  const theme: Theme = useTheme();  

  return (
    <Paper sx={{ 
      backgroundColor: theme.palette.secondary.light, 
      color: theme.palette.secondary.contrastText,
      p: 2, 
      display: 'flex'
    }}>
      <Title color={theme.palette.secondary.contrastText}>
        {props.content}
      </Title>
    </Paper>
  );
}