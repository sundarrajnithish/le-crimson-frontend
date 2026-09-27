import { niceTicks } from "./niceTicks";

describe("niceTicks", () => {
  it("produces clean round steps that cover the max", () => {
    expect(niceTicks(47)).toEqual([0, 20, 40, 60]);
    expect(niceTicks(100)).toEqual([0, 25, 50, 75, 100]);
    expect(niceTicks(0)).toEqual([0]);
  });
});
