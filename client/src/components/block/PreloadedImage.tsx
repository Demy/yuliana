import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string,
  alt: string
}

export default function PreloadedImage(props: Props) {

  const ref = useRef(null);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (ref !== null && ref.current !== null) {
      const image: any = ref.current;
      setLoading(true);
      image.onload = () => {
        setLoading(false);
      };
      image.onerror = (e: any) => {
        setLoading(false);
        setError('(Не удалось загрузить изображение)');
      }
      image.src = props.src;
    }
  }, [props.src, ref]);

  return (
    <Container>
      {isLoading || error === '' ? (
        <img 
          ref={ref} 
          alt={props.alt} 
          style={{ 
            display: isLoading ? 'none' : 'block',
            width: '100%' 
          }} 
        />
      ) : (
        <Container>
          <Typography>{props.alt}</Typography>
          <Typography>{error}</Typography>
        </Container>
      )}
    </Container>
  );
}