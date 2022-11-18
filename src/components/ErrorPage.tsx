import {Alert, AlertTitle, Stack, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  
  return (
    <Stack width={500} mx={"auto"}>
      <Alert severity={"error"}>
        <AlertTitle sx={{fontWeight: "bold"}}>404 Not Found</AlertTitle>
        <Typography variant={"subtitle2"} mb={2}>
          존재하지 않는 페이지입니다.
        </Typography>
        <Link to={"/"}>메인 페이지로</Link>
      </Alert>
    </Stack>
  );
}