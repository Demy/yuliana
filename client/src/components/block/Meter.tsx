import Typography from '@mui/material/Typography';
import { getArcParams } from '../../helpers/svgArc';
import Title from '../ui/Title';

interface Props {
  title?: string,
  percent: number,
  content?: string,
}

const PI = Math.PI;
const CENTER = 113;
const RADIUS = 90;
const ROTATION = PI;

export default function Meter(props: Props) {

  const angle = PI * (props.percent / 100);
  const bgArcParams = getArcParams([CENTER, CENTER], [RADIUS, RADIUS], [0, PI], ROTATION);
  const fillArcParams = getArcParams([CENTER, CENTER], [RADIUS, RADIUS], [0, angle], ROTATION);

  return (
    <div>
      {props.title ? (
        <Title>
          {props.title}
        </Title>
      ) : <></>}
      <div style={{ textAlign: 'center' }}>
        <svg 
          style={{ width: '230px', maxWidth: '100%' }} 
          viewBox="0 0 230 130"
        >
          <path 
            d={bgArcParams}
            strokeWidth={23} 
            strokeLinecap="round" 
            fill="transparent" 
            stroke="#282864"
          />
          <path 
            d={fillArcParams}
            strokeWidth={24} 
            strokeLinecap="round" 
            fill="transparent" 
            stroke="#6BE5E8"
          />
        </svg>
        <Typography 
          variant="h4"
          style={{ marginTop: '-50px' }}
        >
          {props.percent}%
        </Typography>
        <Typography
          style={{ width: '100%', margin: '7px auto' }}
        >
          {props.content}
        </Typography>
      </div>
    </div>
  );
}