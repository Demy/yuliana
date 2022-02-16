import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material/styles";
import Title from "../components/ui/Title";
import { Link } from 'react-router-dom';
import NextWeek from '@mui/icons-material/NextWeek';
import { Project } from "../redux/types";

interface Props {
  project: Project
}

export default function ProjectCard(props: Props) {

  const theme: Theme = useTheme();

  return (
    <Card
      variant="elevation"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        sx={{ p: 0, pb: 1 }}
        avatar={
          <NextWeek />
        }
        title={(
          <Link to={`/project/${props.project.id}`}>
            <Title>
              {props.project.title}{props.project.subtitle ? `: ${props.project.subtitle}` : ''}
            </Title>
            {props.project.extra ? (
              <Title color={theme.palette.secondary.dark}>
                {props.project.extra}
              </Title>
            ) : <></>}
          </Link>
        )} 
      />

      <CardContent sx={{ p: 0, pb: 1 }}>
      </CardContent>

      <CardActions style={{ 
        display: 'block', 
        textAlign: 'right',
        margin: 0
      }}>
        <Link to={`/project/${props.project.id}`}>
          <Button 
            size="small"
            variant="outlined"
          >
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}