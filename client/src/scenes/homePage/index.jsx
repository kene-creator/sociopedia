import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./../navbar/index";
import { useSelector } from "react-redux";
import UserWidgets from "../widgets/UserWidgets";

export default function HomePage() {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  console.log(picturePath);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexbasis={isNonMobile ? "26%" : undefined}>
          <UserWidgets userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexbasis={isNonMobile ? "42%" : undefined}
          mt={isNonMobile ? undefined : "2rem"}
        ></Box>
        {isNonMobile && <Box flexbasis="26%"></Box>}
      </Box>
    </Box>
  );
}
