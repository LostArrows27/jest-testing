import { evaluateAdmission } from "..";

// NOTE: white box testing with C2 Coverage
describe("Admission Check", () => {
  // NOTE: Kiểm thử biên mạnh với 1 số test case
  test("Case 1: (-1, 12) -> đầu vào không hợp lệ", () => {
    expect(evaluateAdmission(-1, 12)).toBe("đầu vào không hợp lệ");
  });

  test("Case 2: (9, 9) -> đỗ", () => {
    expect(evaluateAdmission(9, 9)).toBe("đỗ");
  });

  test("Case 5: (10, 7) -> không đỗ", () => {
    expect(evaluateAdmission(10, 7)).toBe("không đỗ");
  });
});
