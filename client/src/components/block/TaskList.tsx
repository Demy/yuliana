import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import { Theme, useTheme } from '@mui/material/styles';
import NumericIcon from "../ui/NumericIcon";
import Title from "../ui/Title";
import ReactMarkdown from 'react-markdown';

interface Props {
  tasks: string[],
}

export default function TaskList(props: Props) {
  
  const theme: Theme = useTheme(); 

  return (
    <Card
      variant="elevation"
      sx={{ p: 3 }}
      style={{ width: '100%' }}
    >
      <Title>Задачи</Title>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.tasks.map((value: string, index: number) => (
          <ListItem
            key={`task${index}`}
            disableGutters
          >
            <ListItemIcon>
              <NumericIcon value={index + 1} />
            </ListItemIcon>
            <ListItemText>
              <ReactMarkdown 
                components={{ 
                  'p': 'span',
                  'strong': ({node, ...props}) => 
                    <span style={{
                      color: theme.palette.primary.dark, 
                      fontWeight: 'bold'
                    }} {...props} />
                }}>
                {value}
              </ReactMarkdown>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}