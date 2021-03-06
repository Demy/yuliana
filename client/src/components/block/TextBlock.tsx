import Title from "../ui/Title";
import ReactMarkdown from 'react-markdown';
import { Theme, useTheme } from '@mui/material/styles';
import SmallSticker from "../ui/SmallSticker";

interface Props {
  title?: string,
  content: string[],
  sticker?: string
}

export default function TextBlock(props: Props) {

  const theme: Theme = useTheme();  

  const stickerIndex = Math.floor(props.content.length / 2);

  return (
    <div>
      {props.title ? (
        <Title>
          {props.title}
        </Title>
      ) : <></>}
      {props.content.map((text, index) => (
        <div
          key={`text${index}`}
          style={
            props.sticker !== undefined && index === stickerIndex ? 
            { marginRight: '80px', position: 'relative' } : {}
          }
        >
          <ReactMarkdown 
            components={{
              'img': ({node, ...props}) => 
                <img 
                  alt="illustration"
                  style={{ maxWidth: '100%' }} 
                  {...props} 
                />,
              'strong': ({node, ...props}) => 
                <span style={{
                  color: theme.palette.primary.dark, 
                  fontWeight: 'bold'
                }} {...props} />
            }}>
            {text}
          </ReactMarkdown>
          {props.sticker !== undefined && index === stickerIndex ? (
            <SmallSticker content={props.sticker} />
          ) : <></>}
        </div>
      ))}
    </div>
  );
}