import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import {Box} from "@mui/material";

function App() {

  return (
    <BrowserRouter>

      <Header/>

      <Box mt={10} width={500} mx={"auto"}>
        <Routes>
          <Route path={"/resume"} element={
            <Resume/>
          }></Route>

          <Route path={"/portfolio"} element={
            <Portfolio/>
          }></Route>

          <Route path={"/"} element={
            <Home/>
          }></Route>

          <Route path={"*"} element={
            <ErrorPage/>
          }></Route>
        </Routes>
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
