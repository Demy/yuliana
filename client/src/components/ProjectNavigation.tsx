import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

interface Props {
  id?: string,
  projects: any,
}

export default function ProjectNavigation(props: Props) {

  const projectIds: Array<string> = Object.keys(props.projects);
  let projectIndex: number = -1;
  let nextName: string = '';
  let prevName: string = '';

  if (props.id !== undefined) {
    projectIndex = projectIds.indexOf(props.id);
    if (projectIndex > 0) {
      prevName = props.projects[projectIds[projectIndex - 1]].title;
    }
    if (projectIndex < projectIds.length - 1) {
      nextName = props.projects[projectIds[projectIndex + 1]].title;
    }
  }

  return (  
    <Grid container spacing={3} mt={2}>
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
  );
}