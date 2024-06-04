import { before } from "node:test";
import { css } from "../../../styled-system/css";
import { getNumberColor } from "../../../utils/helper";
import { styled } from "../../../styled-system/jsx";

const styles = (number: number) =>
  css({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: `radial-gradient(circle at 30% 30%, #ffffff, ${getNumberColor(number)})`,
    boxShadow: `inset -10px -10px 30px rgba(0, 0, 0, 0.2), 
    inset 10px 10px 30px rgba(255, 255, 255, 0.3), 0 0 10px rgba(0, 0, 0, 0.3)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontSize: "2.5rem",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",

    _before: {
      content: "",
      position: "absolute",
      top: "10px",
      left: "10px",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: `radial-gradient(circle at 30% 30%,rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0))`,
    },
  });

interface LottoBallProps {
  children: React.ReactNode;
  number: number;
}
const LottoBall = ({ number, children, ...props }: LottoBallProps) => {
  return (
    <styled.div className={styles(number)} {...props}>
      {children}
    </styled.div>
  );
};

export default LottoBall;
