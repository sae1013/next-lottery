"use client";

import { css } from "../../styled-system/css";
import LottoBall from "./components/LottoBall";

export default function Home() {
  const num = 1;
  return (
    <main
      className={css({
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        position: "relative",
      })}
    >
      <section
        className={css({
          paddingTop: "5rem",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            width: "500px",
            height: "500px",
            backgroundColor: "green.400",
            marginBottom: 10,
          })}
        ></div>
        <button
          className={css({
            backgroundColor: "black",
            borderRadius: ".6rem",
            color: "#fff",
            padding: "1rem",
            cursor: "pointer",
            _hover: {
              opacity: 0.7,
            },
          })}
        >
          1등번호 뽑기
        </button>

        <div
          className={css({
            marginTop: "1rem",
            "& span": {
              display: "block",
            },
          })}
        >
          <span>1122 회차 예상 당첨번호</span>
          <span>일련번호: 0323948422</span>
        </div>
        <div
          className={css({
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
          })}
        >
          <LottoBall number={3}>3</LottoBall>
          <LottoBall number={13}>13</LottoBall>
          <LottoBall number={23}>23</LottoBall>
          <LottoBall number={33}>33</LottoBall>
          <LottoBall number={43}>43</LottoBall>
          <LottoBall number={45}>45</LottoBall>
        </div>
      </section>
    </main>
  );
}
