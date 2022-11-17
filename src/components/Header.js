import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {AppBar, ButtonBase, styled, Toolbar} from "@mui/material";

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

  return (
    <AppBar style={{backgroundColor: "#282828"}}>
      <Toolbar style={{
        display: "flex", alignItems: "center",
      }}>
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
      </Toolbar>
    </AppBar>
  );
}