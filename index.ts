export function evaluateAdmission(x: number, y: number): string {
  if (x < 0 || y < 0 || x > 10 || y > 10) {
    return "đầu vào không hợp lệ";
  }

  const totalScore = x + y;
  if (totalScore >= 17 && x >= 8 && y >= 9) {
    return "đỗ";
  }

  return "không đỗ";
}
