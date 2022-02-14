import { ListItemIcon, List, ListItem, ListItemText, Card } from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import NumericIcon from "../ui/NumericIcon";
import Title from "../ui/Title";
import ReactMarkdown from 'react-markdown'

interface Props {
  tasks: Array<string>,
}

export default function TaskList(props: Props) {
  
  const theme: Theme = useTheme(); 

  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
      }}
      style={{
        width: '100%'
      }}
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
                      color: theme.palette.secondary.dark, 
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