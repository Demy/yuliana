import { Block } from "@mui/icons-material";
import { Card } from "@mui/material";
import PreloadedImage from "./block/PreloadedImage";
import Stickers from "./block/Stickers";

export interface Block {
  type: string,
  title?: string,
  content?: string | Array<string>,
  alt?: string,
  size?: string,
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
      child = <Stickers title={props.block.title} content={props.block.content} />
      break;
  }

  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
      }}
    >
      {child}
    </Card>
  )
}