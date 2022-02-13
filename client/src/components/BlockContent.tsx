import { Block } from "@mui/icons-material";
import { Card } from "@mui/material";

export interface Block {
  type: string,
  title: string,
  content: string,
  alt?: string,
  size?: string,
}

interface Props {
  block: Block,
}

export default function BlockContent(props: Props) {
  
  let child = <></>;
  switch (props.block.type) {
    case 'image': {
      child = <img src={props.block.content} alt={props.block.alt} />
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right'
      }}
    >
      {child}
    </Card>
  )
}