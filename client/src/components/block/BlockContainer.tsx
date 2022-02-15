import BlockContent, { Block, getMdSize } from "../BlockContent";
import Grid from "@mui/material/Grid";

interface Props {
  blocks: Array<Block>,
  blockId?: number,
}

export default function BlockContainer(props: Props) {

  return (
    <Grid container spacing={3}>
      {props.blocks.map((block, index) => (
        <Grid key={`subblock${props.blockId}-${index}`} item xs={12} md={getMdSize(block.size)}>
          <BlockContent block={block} blockId={(props.blockId || 1) * 10 + index} />
        </Grid>
      ))}
    </Grid>
  );
}