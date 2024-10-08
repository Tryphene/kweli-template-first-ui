import { Stack } from "@mui/material";
import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Stack gap={0}>
      {/* {infosLoading ? (
        <Loader />
      ) : (
        <>
          <Header></Header>
          {children}
          <Footer></Footer>
        </>
      )} */}
      <Header></Header>
      {children}
      <Footer></Footer>
    </Stack>
  );
}
