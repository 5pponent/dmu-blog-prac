import React, {useEffect, useState} from "react";
import {Avatar, Backdrop, Button, Dialog, DialogTitle, Divider, Stack, TextField, Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

type GuestBookItem = {
  id: number,
  name: string,
  title: string,
  content: string
};

export default function GuestBook() {

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<GuestBookItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const fetchGuestBooks = () => {
    setLoading(true);
    axios.get(`https://blog-backend-uq11.onrender.com/guestbook`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => {setLoading(false)});
  }

  const postGuestBook = () => {
    setLoading(true);
    axios.post(`https://blog-backend-uq11.onrender.com/guestbook`, {
      name: name,
      title: title,
      content: content
    })
      .then(res => {
        setOpen(false);
        fetchGuestBooks();
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {setLoading(false)});
  }

  useEffect(() => {
    fetchGuestBooks();
  }, []);
  
  return(
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Stack spacing={3}>
        <Stack direction={"row"} spacing={1}>
          <Button variant={"contained"} onClick={() => {fetchGuestBooks()}}>새로고침</Button>
          <Button variant={"outlined"} onClick={() => {setOpen(true)}}>방명록 작성하기</Button>
        </Stack>
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
                    >{it.title}</Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.primary"
                      sx={{wordBreak: "break-all", whiteSpace: "pre-wrap"}}
                    >{it.content}</Typography>
                  </Stack>
                </Stack>
                <Divider/>
                <Dialog open={open} onClose={() => {setOpen(false)}}>
                  <DialogTitle>방명록 작성</DialogTitle>
                  <Stack padding={3} spacing={1}>
                    이름<TextField value={name} onChange={(e) => {setName(e.target.value)}}/>
                    제목<TextField value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    내용<TextField value={content} onChange={(e) => {setContent(e.target.value)}}/>
                    <Button onClick={() => {postGuestBook()}}>작성하기</Button>
                  </Stack>
                </Dialog>
              </>
            );
          }) : <Typography variant={"subtitle1"} color={"gray"}>방명록이 없습니다.</Typography>
        }
      </Stack>
    </>
  );
}