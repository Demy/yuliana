import BlockContent, { getMdSize } from "../BlockContent";
import Grid from "@mui/material/Grid";
import { Block } from "../../redux/types";

interface Props {
  blocks: Block[],
  blockId?: number,
}

export default function BlockContainer(props: Props) {

  return (
    <Grid container spacing={3}>
      {props.blocks.map((block, index) => (
        <Grid 
          key={`subblock${props.blockId}-${index}`} 
          item 
          xs={12} 
          md={getMdSize(block.size)}
          sx={{ display: { xs: 'block', md: 'flex' } }}
        >
          <BlockContent block={block} blockId={(props.blockId || 1) * 10 + index} />
        </Grid>
      ))}
    </Grid>
  );
}