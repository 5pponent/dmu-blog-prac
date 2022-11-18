import React from "react";
import {Avatar, Divider, Stack, Typography} from "@mui/material";

export default function GuestBook() {

  const data = [
    {
      id: 1,
      name: "유저1",
      text: "텍스트1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
    },
    {
      id: 2,
      name: "유저2",
      text: "텍스트2"
    },
    {
      id: 3,
      name: "유저3",
      text: "텍스트3"
    },
    {
      id: 4,
      name: "유저4",
      text: "텍스트4"
    },
    {
      id: 5,
      name: "유저5",
      text: "텍스트5"
    },
    {
      id: 6,
      name: "유저6",
      text: "텍스트6"
    },
    {
      id: 7,
      name: "유저7",
      text: "텍스트7"
    },
    {
      id: 8,
      name: "유저8",
      text: "텍스트8",
    },{
      id: 9,
      name: "유저9",
      text: "텍스트9"
    },{
      id: 10,
      name: "유저10",
      text: "텍스트10"
    },
  ];
  
  return(
    <>
      <Stack spacing={3}>
        {
          data.length > 0 ? data.map((it) => {
            return (
              <>
                <Stack direction={"row"} key={it.id} spacing={3}>
                  <Stack alignItems={"center"} width={"10%"}>
                    <Avatar/>
                    <Typography
                      sx={{fontWeight: "bold"}}
                      variant="subtitle1"
                    >{it.name}</Typography>
                  </Stack>
                  <Stack width={"90%"}>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      sx={{wordBreak: "break-all", fontWeight: "bold"}}
                    >{it.name}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.primary"
                      sx={{wordBreak: "break-all"}}
                    >{it.text}</Typography>
                  </Stack>
                </Stack>
                <Divider/>
              </>
            );
          }) : <Typography variant={"subtitle1"} color={"gray"}>방명록이 없습니다.</Typography>
        }
      </Stack>
    </>
  );
}