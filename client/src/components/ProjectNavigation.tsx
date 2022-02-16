import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { AllStores, Project } from "../redux/types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  current?: string,
}

export default function ProjectNavigation(props: Props) {
  
  const projects: Project[] = useSelector<AllStores>(state => state.project.projects) as Project[];

  const projectIds: string[] = projects.map(p => p.id);
  let projectIndex: number = projectIds.indexOf(props.current || '');
  let nextName: string = '';
  let prevName: string = '';

  if (projectIndex > 0) {
    prevName = projects[projectIndex - 1].title;
  }
  if (projectIndex >= 0 && projectIndex < projectIds.length - 1) {
    nextName = projects[projectIndex + 1].title;
  }

  return (  
    <Grid container spacing={3} mt={2}>
      <Grid item xs={6}>
        {projectIndex > 0 ? (
          <Link to={`/project/${projectIds[projectIndex - 1]}`}>
            <Button 
              variant="outlined" 
              startIcon={<ArrowLeftIcon />}
            >
              <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
                {prevName}
              </Typography>
            </Button>
          </Link>
        ) : <div></div>}
      </Grid>
      <Grid item xs={6} mt={2} style={{ textAlign: 'right' }}>
        {projectIndex < projectIds.length - 1 ? (
          <Link to={`/project/${projectIds[projectIndex + 1]}`}>
            <Button 
              variant="outlined" 
              style={{ textAlign: 'right' }}
              endIcon={<ArrowRightIcon />}
            >
              <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
                {nextName}
              </Typography>
            </Button>
          </Link>
        ) : <div></div>}
      </Grid>
    </Grid>
  );
}