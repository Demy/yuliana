import { Grid, Paper, Container, Button, Typography } from "@mui/material";
import { Theme, useTheme } from '@mui/material/styles';
import Title from "../components/ui/Title";
import { useParams } from "react-router-dom";
import Projects from '../assets/projects.json'
import BlockContent, { Block } from "../components/BlockContent";
import TaskList from "../components/block/TaskList";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

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
  const projectIds: Array<string> = Object.keys(Projects);
  let projectIndex: number = -1;
  let nextName: string = '';
  let prevName: string = '';

  let projectContent: any = {};
  if (id !== undefined) {
    projectIndex = projectIds.indexOf(id);
    if (projectIndex > 0) {
      prevName = (Projects as any)[projectIds[projectIndex - 1]].title;
    }
    if (projectIndex < projectIds.length - 1) {
      nextName = (Projects as any)[projectIds[projectIndex + 1]].title;
    }
    if (projectIndex >= 0) {
      projectContent = (Projects as any)[id];

    }
  }

  let subtitle: string = '';
  if (projectContent['subtitle'] !== undefined) {
    subtitle = projectContent['subtitle'] as string;
  }
  let title: string = '';
  if (projectContent['title'] !== undefined) {
    title = projectContent['title'] as string;
    if (subtitle !== '') {
      title = `${title}: ${subtitle}`;
    }
  }
  let extra: string = '';
  if (projectContent['extra'] !== undefined) {
    extra = projectContent['extra'] as string;
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
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {title || subtitle ? (
              <Grid item xs={12}>
                <Paper sx={{ 
                  backgroundColor: theme.palette.primary.light, 
                  color: theme.palette.primary.contrastText,
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}>
                  {title !== '' ? (
                    <Title color={theme.palette.primary.contrastText}>
                      {title}
                    </Title>
                  ) : <></>}
                  {extra !== '' ? (
                    <Title color={theme.palette.primary.contrastText}>
                      {extra}
                    </Title>
                  ) : <></>}
                </Paper>
              </Grid>
            ) : <></>}
            
            {tasks.length > 0 ? (
              <Grid item xs={12} md={4} sx={{ display: { xs: 'block', md: 'none' } }}>
                <TaskList tasks={tasks} />
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
          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TaskList tasks={tasks} />
          </Grid>
        ) : <></>}

        {blocks.slice(1).map((block, index) => (
          <Grid key={`block${index}`} item xs={12} md={getMdSize(block.size)}>
            <BlockContent block={block} />
          </Grid>
        ))}

        <Grid item xs={6}>
          {projectIndex > 0 ? (
            <Button 
              variant="outlined" 
              href={`/project/${projectIds[projectIndex - 1]}`}
              startIcon={<ArrowLeftIcon />}
            >
              <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
                {prevName}
              </Typography>
            </Button>
          ) : <div></div>}
        </Grid>
        <Grid item xs={6} mt={2} style={{ textAlign: 'right' }}>
          {projectIndex < projectIds.length - 1 ? (
            <Button 
              variant="outlined" 
              href={`/project/${projectIds[projectIndex + 1]}`}
              style={{ textAlign: 'right' }}
              endIcon={<ArrowRightIcon />}
            >
              <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
                {nextName}
              </Typography>
            </Button>
          ) : <div></div>}
        </Grid>
        
      </Grid>
    </Container>
  );
}