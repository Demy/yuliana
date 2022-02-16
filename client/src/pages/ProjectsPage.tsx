import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllStores, Project } from "../redux/types";
import * as actions from "../redux/project/actions";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Theme, useTheme } from "@mui/material/styles";
import Title from "../components/ui/Title";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {

  const projects: Project[] = useSelector<AllStores>(state => state.project.projects) as Project[];

  const theme: Theme = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(actions.fetchProjects());
    }
  });

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ 
            backgroundColor: theme.palette.primary.light, 
            color: theme.palette.primary.contrastText,
            p: 3, 
            display: 'flex', 
            flexDirection: 'column' 
          }}>
            <Title color={theme.palette.primary.contrastText}>
              Мои проекты
            </Title>
          </Paper>
        </Grid>
        
        {projects.map((project: Project, index: number) => (
          <Grid item xs={12} md={6} key={`project${index}`}>
            <ProjectCard project={project} />
          </Grid>
        ))}

        {projects.length === 0 ? (
          <Container style={{ textAlign: 'center', marginTop: 200 }}>
            <Typography>Загрузка...</Typography>
          </Container>
        ) : <></>}

      </Grid>
    </Container>
  );
}