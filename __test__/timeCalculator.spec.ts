import { timeCalculator } from "../src/utils/timeCalculator";

describe("Time Calculator", () => {
  it("should return `just now` when time difference < 2 mins", () => {
    const createdAt = "2023-03-02T23:10:00.157Z";
    const timeNow = "2023-03-02T23:11:59.157Z";
    const result = timeCalculator(createdAt, timeNow);
    expect(result).toEqual("Just now");
  });

  it("should return a string with `m` when time difference < 60 mins", () => {
    const createdAt = "2023-03-02T23:00:00.157Z";
    const timeNow = "2023-03-02T23:50:40.157Z";
    const result = timeCalculator(createdAt, timeNow);
    expect(result).toEqual("50m");
  });

  it("should return a string with `h` when time difference < 24 hours", () => {
    const createdAt = "2023-03-02T01:00:00.157Z";
    const timeNow = "2023-03-02T23:00:00.157Z";
    const result = timeCalculator(createdAt, timeNow);
    expect(result).toEqual("22h");
  });

  it("should return a string with `d` when time difference > 1 day", () => {
    const createdAt = "2023-03-01T01:00:00.157Z";
    const timeNow = "2023-03-05T23:00:00.157Z";
    const result = timeCalculator(createdAt, timeNow);
    expect(result).toEqual("4d");
  });

  it("should return a string with `w` when time difference > 7 days", () => {
    const createdAt = "2023-03-01T01:00:00.157Z";
    const timeNow = "2023-03-15T23:00:00.157Z";
    const result = timeCalculator(createdAt, timeNow);
    expect(result).toEqual("2w");
  });
});
