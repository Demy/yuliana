import Block from "@mui/icons-material/Block";
import Card from "@mui/material/Card";
import PreloadedImage from "./block/PreloadedImage";
import Stickers from "./block/Stickers";
import TitleLine from "./block/TitleLine";
import TextBlock from "./block/TextBlock";

export interface Block {
  type: string,
  title?: string,
  content?: string | Array<string>,
  alt?: string,
  size?: string,
  align?: string,
  sticker?: string,
}

interface Props {
  block: Block,
}

export default function BlockContent(props: Props) {
  
  let child = <></>;
  switch (props.block.type) {
    case 'image':
      child = <PreloadedImage src={props.block.content as string} alt={props.block.alt || '...'} />
      break;
    case 'stickers':
      child = <Stickers title={props.block.title} content={props.block.content as Array<string>} />
      break;
    case 'title':
      child = <TitleLine content={props.block.content as string} />
      break;
    case 'text':
      child = (<TextBlock 
          title={props.block.title} 
          content={props.block.content as Array<string>} 
          sticker={props.block.sticker} 
        />);
      break;
  }

  if (props.block.type === 'title') {
    return child;
  }

  return (
    <Card
      variant="elevation"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        textAlign: props.block.align || 'left'
      }}
    >
      {child}
    </Card>
  )
}