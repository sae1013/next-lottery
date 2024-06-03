import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
      </div>
      <div
        className={css({
          backgroundColor: "blue",
          width: "8rem",
          height: "2rem",
        })}
      >
        hello
      </div>
    </main>
  );
}
