import {Stack} from "@mui/material";
import React, {useEffect, useState} from "react";

export default function Resume() {

  const [time, setTime] = useState(new Date());

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    clearInterval(timer);
  }, [timer]);

  return (
    <Stack>
      <h5>{time.toLocaleTimeString()}</h5>
      {/*{isEven ? "현재 시간은 짝수" : "현재 시간은 홀수"}*/}

      <h3>자기소개</h3>
      <h4>이름 : 이태민</h4>
      <h4>나이 : 24</h4>

      <h3>학력</h3>
      <ul>
        <li>광양고등학교</li>
        <li>동양미래대학교</li>
      </ul>
      <h3>프로젝트 경험</h3>
      <ol>
        <li>
          이케이투어 버스 대절 웹페이지<br/>
          <a href={"http://ekhanabus.co.kr"}>http://ekhanabus.co.kr</a>
        </li><br/>
        <li>
          에이치엔테크 회사 소개 웹페이지<br/>
          <a href={"http://hntec.co.kr"}>http://hntec.co.kr</a>
        </li><br/>
        <li>
          모두의 일기장 웹 SNS<br/>
          <a href={"https://di4ry.com"}>https://di4ry.com</a>
        </li><br/>
      </ol>
      <h4>
        Github : <a href={"https://github.com/5pponent"}>https://github.com/5pponent</a>
      </h4>
    </Stack>
  );
}