import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {AppBar, Button, ButtonBase, Stack, styled, Toolbar} from "@mui/material";
import {GoogleLogin, useGoogleLogin} from "@react-oauth/google";
import axios from "axios";

const StyledButton = styled(ButtonBase)`
  font-size: 16px;
  font-weight: bold;
  color: aliceblue;
  height: 70px;
  width: 100px;
`

export default function Header() {

  const navigate = useNavigate();
  const [nav, setNav] = useState("HOME");

  const login = useGoogleLogin({
    onSuccess: async ({code}) => {
      await axios.post(`http://localhost:5000/auth/google`, {code})
    },
    flow: "auth-code"
  })

  return (
    <AppBar style={{backgroundColor: "#282828"}}>
      <Toolbar style={{
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Stack direction={"row"}>
          <StyledButton
            style={{backgroundColor: nav === "HOME" ? "dodgerblue" : ""}}
            onClick={() => {
              setNav("HOME");
              navigate(`/`);
            }}>HOME</StyledButton>
          <StyledButton
            style={{backgroundColor: nav === "RESUME" ? "dodgerblue" : ""}}
            onClick={() => {
              setNav("RESUME");
              navigate(`/resume`);
            }}>이력서</StyledButton>
          <StyledButton
            style={{backgroundColor: nav === "PORTFOLIO" ? "dodgerblue" : ""}}
            onClick={() => {
              setNav("PORTFOLIO");
              navigate(`/portfolio`);
            }}>포트폴리오</StyledButton>
          <StyledButton
            style={{backgroundColor: nav === "GUESTBOOK" ? "dodgerblue" : ""}}
            onClick={() => {
              setNav("GUESTBOOK");
              navigate(`/guestbook`);
            }}>방명록</StyledButton>
        </Stack>

        <Stack direction={"row"} spacing={1}>
          <Button onClick={() => {login()}} variant={"outlined"}>
            로그인
          </Button>

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("login failed");
            }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}