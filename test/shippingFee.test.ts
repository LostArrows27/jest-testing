import { evaluateAdmission } from "..";

describe("Admission Check", () => {
  // NOTE: Kiểm thử biên mạnh với 1 số test case
  test("Case 1: (8.5, 9) -> đỗ", () => {
    expect(evaluateAdmission(8.5, 9)).toBe("đỗ");
  });

  test("Case 2: (8.5, 9.1) -> đỗ", () => {
    expect(evaluateAdmission(8.5, 9.1)).toBe("đỗ");
  });

  test("Case 5: (8.5, 10.1) -> đầu vào không hợp lệ", () => {
    expect(evaluateAdmission(8.5, 10.1)).toBe("đầu vào không hợp lệ");
  });

  test("Case 6: (8.5, 8.9) -> không đỗ", () => {
    expect(evaluateAdmission(8.5, 8.9)).toBe("không đỗ");
  });

  test("Case 7: (8, 9.5) -> đỗ", () => {
    expect(evaluateAdmission(8, 9.5)).toBe("đỗ");
  });

  test("Case 13: (8.5, 9.5) -> đỗ", () => {
    expect(evaluateAdmission(8.5, 9.5)).toBe("đỗ");
  });

  // NOTE: Kiểm thử với bảng quyết định cùng với 1 số test case
  test("Case 6: (7.5, 10) -> không đỗ", () => {
    expect(evaluateAdmission(7.5, 10)).toBe("không đỗ");
  });

  test("Case 11: (8.3, 9.3) -> đỗ", () => {
    expect(evaluateAdmission(8.3, 9.3)).toBe("đỗ");
  });

  test("Case 16: (11, 11) -> đầu vào không hợp lệ", () => {
    expect(evaluateAdmission(11, 11)).toBe("đầu vào không hợp lệ");
  });
});
