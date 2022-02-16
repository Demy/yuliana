import Card from "@mui/material/Card";
import PreloadedImage from "./block/PreloadedImage";
import Stickers from "./block/Stickers";
import TitleLine from "./block/TitleLine";
import TextBlock from "./block/TextBlock";
import BlockContainer from "./block/BlockContainer";
import ContentList from "./block/ContentList";
import Meter from "./block/Meter";
import { Block } from "../redux/types";

export const getMdSize = (size: string | undefined): number => {
  switch (size) {
    case 'tiny':
      return 3;
    case 'small':
      return 4;
    case 'half':
      return 6;
    case 'big':
      return 8;
    case 'full':
      return 12;
    default:
      return 12;
  }
};

interface Props {
  block: Block,
  blockId?: number
}

export default function BlockContent(props: Props) {
  
  let child = <></>;
  let withoutWrapper = false;
  switch (props.block.type) {
    case 'image':
      child = <PreloadedImage src={props.block.content as string} alt={props.block.alt || '...'} />
      break;
    case 'stickers':
      child = <Stickers title={props.block.title} content={props.block.content as string[]} />
      break;
    case 'title':
      child = <TitleLine content={props.block.content as string} />
      withoutWrapper = true;
      break;
    case 'text':
      child = <TextBlock 
          title={props.block.title} 
          content={props.block.content as string[]} 
          sticker={props.block.sticker} 
        />;
      break;
    case 'container':
      withoutWrapper = true;
      child = <BlockContainer 
          blocks={props.block.content as Block[]} 
          blockId={props.blockId || 1} 
        />;
      break;
    case 'list':
      child = <ContentList 
          content={props.block.content as string[]} 
          listStyle={props.block.style || 'unordered'} 
          divided={props.block.size === 'full'}
        />;
      break;
    case 'meter':
      child = <Meter 
        title={props.block.title}
        percent={props.block.percent || 0} 
        content={props.block.content as string} 
      />;
      break;
  }

  if (withoutWrapper) {
    return child;
  }

  return (
    <Card
      variant="elevation"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        textAlign: { xs: 'left', md: props.block.align || 'left' }
      }}
    >
      {child}
    </Card>
  )
}