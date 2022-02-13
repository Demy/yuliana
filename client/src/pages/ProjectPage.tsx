import { Grid, Paper } from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import Title from "../components/ui/Title";
import { useParams } from "react-router-dom";
import Projects from '../assets/projects.json'
import BlockContent, { Block } from "../components/BlockContent";
import TaskList from "../components/TaskList";

const getMdSize = (size: string | undefined): number => {
  switch (size) {
    case 'small':
      return 4;
    case 'big':
      return 8;
    case 'full':
      return 12;
    default:
      return 12;
  }
};

export default function ProjectPage() {

  const theme: Theme = useTheme();  

  const { id } = useParams();  

  let projectContent: any = {};
  if (id !== undefined) {
    projectContent = (Projects as any)[id] || {};
  }

  let title: string = '';
  if (projectContent['title'] !== undefined) {
    title = projectContent['title'] as string;
  }
  let subtitle: string = '';
  if (projectContent['subtitle'] !== undefined) {
    subtitle = projectContent['subtitle'] as string;
  }

  let tasks: Array<string> = [];
  if (projectContent['tasks'] !== undefined) {
    tasks = projectContent['tasks'] as Array<string>;
  }

  let blocks: Array<Block> = [];
  if (projectContent['blocks'] !== undefined) {
    blocks = projectContent['blocks'] as Array<Block>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {title || subtitle ? (
            <Grid item xs={12}>
              <Paper sx={{ 
                backgroundColor: theme.palette.primary.light, 
                color: theme.palette.primary.contrastText,
                p: 2, 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                {title !== undefined ? (
                  <Title color={theme.palette.primary.contrastText}>
                    {title}
                  </Title>
                ) : <></>}
                {subtitle !== undefined ? (
                  <Title color={theme.palette.primary.contrastText}>
                    {subtitle}
                  </Title>
                ) : <></>}
              </Paper>
            </Grid>
          ) : <></>}
          {blocks.length > 0 ? (
            <Grid item xs={12}>
              <BlockContent block={blocks[0]} />
            </Grid>
          ) : <></>}
        </Grid>
      </Grid>
      {tasks.length > 0 ? (
        <Grid item xs={12} md={4}>
          <TaskList tasks={tasks} />
        </Grid>
      ) : <></>}
      {blocks.slice(1).map((block, index) => (
        <Grid key={`block${index}`} item xs={12} md={getMdSize(block.size)}>
          <BlockContent block={block} />
        </Grid>
      ))}
    </Grid>
  );
}