/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Card from "../../components/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "../../components/image/image";
import Scrollbar from "../../components/scrollbar";
import useTable from "../../components/table/use-table";

type Props = {
  order: any;
};

export default function OrderItems({ order }: Props) {
  const table = useTable();

  return (
    <Card p={3} height={600}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon icon="gravity-ui:box" color="#396143" width={30} />
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            Résumé de l'article
          </Typography>
        </Stack>

        <Scrollbar>
          <Table size={table.dense ? "small" : "medium"} sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ fontFamily: "Poppins" }}>
                <TableCell
                  sx={{ fontFamily: "Poppins" }}
                  align="left"
                  width={430}
                />
                <TableCell align="left" width={30}>
                  <Typography fontFamily="Poppins">Qte</Typography>
                </TableCell>
                <TableCell align="left" width={90}>
                  <Typography fontFamily="Poppins">Prix</Typography>
                </TableCell>
                <TableCell align="left" width={100}>
                  <Typography fontFamily="Poppins">Prix Total</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <>
                {order?.data?.sale_items.map((row: any, index: number) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={index}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell align="left">
                        <Box
                          columnGap={2}
                          rowGap={3}
                          display="grid"
                          gridTemplateColumns={{
                            xs: "repeat(4, 1fr)",
                            md: "repeat(4, 1fr)",
                          }}
                        >
                          <Image
                            sx={{
                              width: 100,
                              height: 100,
                              borderRadius: "10px",
                              gridColumn: { xs: "span 1", md: "span 1" },
                            }}
                            src="https://img.freepik.com/photos-gratuite/table-angle-eleve-pleine-arrangement-nourriture-delicieuse_23-2149141347.jpg?size=626&ext=jpg&uid=R91459189&ga=GA1.2.1859331002.1720646969&semt=ais_hybrid"
                          />
                          <Stack
                            spacing={2}
                            sx={{
                              gridColumn: { xs: "span 3", md: "span 3" },
                            }}
                          >
                            <Typography
                              fontFamily="Poppins"
                              variant="body2"
                              color="grey"
                            >
                              {row?.product_id}
                            </Typography>
                            <Typography
                              fontFamily="Poppins"
                              variant="subtitle2"
                              color="grey"
                            >
                              Couleur: Bleu
                            </Typography>
                            <Typography
                              fontFamily="Poppins"
                              variant="subtitle2"
                              color="grey"
                            >
                              Taille: Xl
                            </Typography>
                          </Stack>
                        </Box>
                      </TableCell>
                      <TableCell align="left">
                        <Typography fontFamily="Poppins" variant="subtitle2">
                          {row?.quantity}x
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography fontFamily="Poppins" variant="subtitle2">
                          {/* {fCurrency(row?.price)} Fcfa */}
                          {row?.price} Fcfa
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography fontFamily="Poppins" variant="subtitle2">
                          {/* {fCurrency(row?.final_price) || 0} Fcfa */}
                          {row?.final_price || 0} Fcfa
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>

              {/* <TableNoData notFound={notFound && !isLoading} /> */}
            </TableBody>
          </Table>
        </Scrollbar>
      </Stack>
    </Card>
  );
}
