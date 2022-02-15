import Container from "@mui/material/Container";
import { Theme, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

interface Props {
  content: string,
}

const useStyles = makeStyles({
  sticker: {
    textAlign: 'left',
    verticalAlign: 'middle',
    position: 'relative',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      borderStyle: 'solid',
      background: 'rgba(186, 104, 200, 0.2)',
      display: 'block',
      width: 0,
      borderWidth: '8px',
      borderColor: '#fff #fff transparent transparent',
      borderRadius: '0 0 0 5px',
    },
  },
});

export default function SmallSticker(props: Props) {

  const theme: Theme = useTheme();  
  const classes = useStyles(props);

  return (
    <Container
      sx={{
        display: { 'md': 'inline-block' },
        '&::before': {
          borderWidth: '8px',
          borderColor: '#fff #fff transparent transparent',
          borderRadius: '0 0 0 5px'
        }
      }}
      style={{
        width: '80px',
        textAlign: 'center',
        lineHeight: 1.2,
        padding: theme.spacing(1),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        fontSize: '0.7rem',
        backgroundColor: alpha(theme.palette.primary.light, 0.3),
        position: 'absolute',
        right: `-90px`,
        top: 'calc(50% - 40px)',
        transform: `rotate(${Math.round(Math.random() * 20) - 10}deg)`,
      }}
      className={classes.sticker}
    >
      {props.content}
    </Container>
  );
}