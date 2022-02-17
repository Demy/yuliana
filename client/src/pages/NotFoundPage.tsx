import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Title from "../components/ui/Title";
import { Link } from "react-router-dom";
import { Theme, useTheme } from '@mui/material/styles';

export default function NotFoundPage() {
  
  const theme: Theme = useTheme(); 

  return (
    <Container style={{ textAlign: 'center' }}>
      <Card 
        sx={{ p: 3 }} 
        style={{ 
          maxWidth: '400px', 
          margin: '100px auto'
        }}
      >
        <CardHeader
          sx={{ p: 0, pb: 3 }}
          title={(
            <div>
              <Title variant="h2" color={theme.palette.secondary.main}>
                404
              </Title>
              <Title variant="h5">
                Страница не найдена
              </Title>
            </div>
          )} 
        />

        <CardContent sx={{ p: 0, pb: 3 }}>
          <Typography>Что-то пошло не так, и вы попали на несуществующую страницу.</Typography>
          <Typography>
            Предлагаю вам вернуться назад и начать поиски заново, либо зайти на главную страницу сайта.
          </Typography>
        </CardContent>

        <CardActions style={{ 
          display: 'block', 
          margin: 0
        }}>
          <Link to='/'>
            <Button 
              size="small"
              variant="outlined"
            >
              На главную
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}