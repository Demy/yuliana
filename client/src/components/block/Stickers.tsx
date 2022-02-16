import Container from "@mui/material/Container";
import Title from "../ui/Title";
import { makeStyles } from '@mui/styles';

interface Props {
  title?: string,
  content: string[]
}

const colors = ['#CEE8FC', '#D1EAD2', '#FFE4BE', '#EDD8F0', '#FAD3D2', '#BEE9FC'];

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

export default function Stickers(props: Props) {

  const classes = useStyles(props);

  return (
    <div>
      {props.title ? <Title>{props.title}</Title> : <></>}
      {props.content ? (props.content as string[]).map((sticker: string, index: number) => (
        <Container
          key={`sticker${index}`}
          sx={{ 
            p: 3,
            m: 1,
            mb: 2,
            width: { 'md': '45%' },
            display: { 'md': 'inline-block' },
            '&::before': {
              borderWidth: '8px',
              borderColor: '#fff #fff transparent transparent',
              borderRadius: '0 0 0 5px'
            }
          }}
          style={{
            backgroundColor: colors[index % colors.length]
          }}
          className={classes.sticker}
        >
          {sticker}
        </Container>
      )) : <></>}
    </div>
  );
}