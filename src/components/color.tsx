/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Button } from '@mui/material';

type Props = {
  colors: any;
};

export default function Color({colors}: Props) {
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {colors.map((_: any, index: number) => (
        <Button key={index} sx={{ color: "#111", border: "1px solid #e4e4e4"}}>
          <Icon icon="openmoji:ballet-shoes" width={50} />
        </Button>
      ))}
    </Box>
  );
}