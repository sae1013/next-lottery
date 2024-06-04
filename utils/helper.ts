// 1번 ~ 10 노란색
// 11번 ~ 20번 : 파란색
// 21번 ~ 30 번: 빨깐색
// 31번 ~40번 : 회색
// 41번 ~ 45 번: 초록색
export const getNumberColor = (number: number) => {
  if (1 <= number && number < 11) {
    return "#ffe135";
  } else if (11 <= number && number < 21) {
    return "#0018a8";
  } else if (21 <= number && number < 31) {
    return "#c32148"; // #c04000
  } else if (31 <= number && number < 41) {
    return "#8c92ac";
  } else {
    return "#6e8b3d"; //#228b22
  }
};
