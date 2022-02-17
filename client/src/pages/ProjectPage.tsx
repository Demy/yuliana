import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from '@mui/material/styles';
import Title from "../components/ui/Title";
import { Navigate, useParams } from "react-router-dom";
import BlockContent, { getMdSize } from "../components/BlockContent";
import TaskList from "../components/block/TaskList";
import ProjectNavigation from "../components/ProjectNavigation";
import { AllStores, Block, Project } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/project/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export default function ProjectPage() {
  
  const { id } = useParams();  

  const theme: Theme = useTheme();

  const projects: Project[] = useSelector<AllStores>(state => state.project.projects) as Project[];

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(actions.fetchProjects());
      console.log('load')
    }
  }, [dispatch, projects.length]);

  if (projects.length === 0) {
    return (
      <Container style={{ textAlign: 'center' }}>
        <Typography>Загрузка...</Typography>
      </Container>
    );
  }

  const projectIds: string[] = projects.map(p => p.id);
  let projectIndex: number = -1;

  let title: string = '';
  let subtitle: string = '';
  let extra: string = '';
  let tasks: string[] = [];
  let blocks: Block[] = [];
  let firstBlock: Block | null = null;

  let contentFound = false;

  if (id !== undefined) {
    projectIndex = projectIds.indexOf(id);
    if (projectIndex >= 0) {
      const projectContent: Project | undefined = projects.find(p => p.id === id);
      if (projectContent !== undefined) {
        contentFound = true;
        if (projectContent.subtitle !== undefined) {
          subtitle = projectContent.subtitle;
        }
        if (projectContent.title !== undefined) {
          title = projectContent.title;
          if (subtitle !== '') {
            title = `${title}: ${subtitle}`;
          }
        }
        if (projectContent.extra !== undefined) {
          extra = projectContent.extra;
        }
      
        if (projectContent.tasks !== undefined) {
          tasks = projectContent.tasks;
        }
      
        if (projectContent.blocks !== undefined) {
          const allBlocks = projectContent.blocks;
          if (allBlocks.length > 0) {
            firstBlock = allBlocks[0];
          }
          blocks = allBlocks.slice(1);
        }
      }
    }
  } 

  if (!contentFound) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
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

            {firstBlock !== null ? (
              <Grid item xs={12}>
                <BlockContent block={firstBlock} />
              </Grid>
            ) : <></>}
          </Grid>
        </Grid>

        {tasks.length > 0 ? (
          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TaskList tasks={tasks} />
          </Grid>
        ) : <></>}
        
        {blocks.map((block, index) => (
          <Grid 
            key={`block${index}`} 
            item 
            xs={12} 
            md={getMdSize(block.size)}
            sx={{ display: { xs: 'block', md: block.size === 'full' ? 'block' : 'flex' } }}
          >
            <BlockContent block={block} blockId={index} />
          </Grid>
        ))}

      </Grid>

      <ProjectNavigation current={id} />
    </Container>
  );
}