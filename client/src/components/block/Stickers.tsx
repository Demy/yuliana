import { Card } from "@mui/material";
import Title from "../ui/Title";

interface Props {
  title?: string,
  content?: Array<string>
}

const colors = ['#CEE8FC', '#D1EAD2', '#FFE4BE', '#EDD8F0', '#FAD3D2', '#BEE9FC'];

export default function Stickers(props: Props) {

  return (
    <div>
      {props.title ? <Title>{props.title}</Title> : <></>}
      {props.content ? (props.content as Array<string>).map((sticker: string, index: number) => (
        <Card
          key={`sticker${index}`}
          variant="elevation"
          sx={{ 
            p: 3,
            m: 1,
            width: { 'md': '45%' },
            display: { 'md': 'inline-block' }
          }}
          style={{
            textAlign: 'left',
            verticalAlign: 'middle',
            backgroundColor: colors[index % colors.length]
          }}
        >
          {sticker}
        </Card>
      )) : <></>}
    </div>
  );
}