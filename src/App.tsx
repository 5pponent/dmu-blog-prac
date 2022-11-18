import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import GuestBook from "./components/GuestBook";

function App() {

  return (
    <BrowserRouter>

      <Header/>

      <Box width={"100%"} height={"100vh"} bgcolor={"#dddddd"}>
        <Box p={5} pt={13}>
          <Card variant="outlined">

            <Box height={"70vh"} overflow={"auto"} p={3}>
            <Routes>
              <Route path={"/resume"} element={
                <Resume/>
              }></Route>

              <Route path={"/portfolio"} element={
                <Portfolio/>
              }></Route>

              <Route path={"/guestbook"} element={
                <GuestBook/>
              }></Route>

              <Route path={"/"} element={
                <Home/>
              }></Route>

              <Route path={"*"} element={
                <ErrorPage/>
              }></Route>
            </Routes>
            </Box>

          </Card>
        </Box>
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
