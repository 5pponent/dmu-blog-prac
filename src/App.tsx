import React, { useEffect, useState } from "react";
import { Paper, Stack } from "@mui/material";

function App() {
  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  // let isEven;
  // if (time.getTime() % 2 === 0) {
  //   isEven = true;
  // } else isEven = false;

  return (
    <Stack sx={{ width: 400 }} m={"0 auto"}>
      <Paper sx={{ p: 3 }} elevation={5}>
        <h5>{time.toLocaleTimeString()}</h5>
        {/*{isEven ? "현재 시간은 짝수" : "현재 시간은 홀수"}*/}

        <h3>자기소개</h3>
        <h4>이름 : 이태민</h4>

        <h3>학력</h3>
        <ul>
          <li>광양고등학교</li>
          <li>동양미래대학교</li>
        </ul>
        <h3>프로젝트 경험</h3>
        <ol>
          <li>
            이케이투어 버스 대절 웹페이지{" "}
            <a href={"http://ekhanabus.co.kr"}>http://ekhanabus.co.kr</a>
          </li>
          <li>
            에이치엔테크 회사 소개 웹페이지{" "}
            <a href={"http://hntec.co.kr"}>http://hntec.co.kr</a>
          </li>
          <li>
            모두의 일기장 웹 SNS 서비스{" "}
            <a href={"https://di4ry.com"}>https://di4ry.com</a>
          </li>
        </ol>
        <h4>
          Github : <a href={"https://github.com/5pponent"}>링크</a>
        </h4>
      </Paper>
    </Stack>
  );
}

export default App;
