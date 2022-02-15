import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Theme, useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

interface Props {
  content: Array<string>,
  listStyle: string,
  divided: boolean,
}

export default function ContentList(props: Props) {
  
  const theme: Theme = useTheme(); 

  const buildList = (list: Array<string>, number: number) => {
    return (
      <List dense={false}>
        {list.map((text, index) => (
          <ListItem key={`list${number}-${index}`}>
            <ListItemIcon 
              sx={{ 
                fontSize: 20, 
                minWidth: '1.5rem', 
                color: theme.palette.primary.main 
              }}
            >
              {props.listStyle === 'ordered' ? `${index + 1}.` : '•'}
            </ListItemIcon>
            <ReactMarkdown 
              components={{
                'p': 'span',
                'strong': ({node, ...props}) => 
                  <span style={{
                    color: theme.palette.primary.dark, 
                    fontWeight: 'bold'
                  }} {...props} />
              }}>
              {text}
            </ReactMarkdown>
          </ListItem>
        ))}
      </List>
    );
  };

  if (props.divided) {
    const height = Math.ceil(props.content.length / 2);
    return (
      <Container
        style={{ padding: 0 }} 
      >

        <Container 
          style={{ padding: 0 }} 
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {buildList(props.content, 0)}
        </Container>

        <Grid 
          container 
          spacing={2} 
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Grid item xs={6}>
            {buildList(props.content.slice(0, height), 1)}
          </Grid>
          <Grid item xs={6}>
            {buildList(props.content.slice(height), 2)}
          </Grid>
        </Grid>
        
      </Container>
    );
  }
  
  return buildList(props.content, 0);
}