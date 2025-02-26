import GameSavingLoader from "./GameSavingLoader";
import read from "../task_2/reader";
import json from "../task_2/parser";
import GameSaving from "./GameSaving";

jest.mock("../task_2/reader");
jest.mock("../task_2/parser");

describe("GameSavingLoader", () => {
  it("should correctly load and parse game saving data", () => {
    const mockData = new ArrayBuffer(10);
    const mockParsedData =
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const expectedGameSaving = new GameSaving(JSON.parse(mockParsedData));

    read.mockResolvedValue(mockData);
    json.mockResolvedValue(mockParsedData);

    return GameSavingLoader.load().then((result) => {
      expect(read).toHaveBeenCalled();
      expect(json).toHaveBeenCalledWith(mockData);
      expect(result).toEqual(expectedGameSaving);
    });
  });

  it("should throw an error if reading data fails", () => {
    read.mockRejectedValue(new Error("Reading error"));

    return expect(GameSavingLoader.load()).rejects.toThrow("Reading error");
  });

  it("should throw an error if parsing data fails", () => {
    const mockData = new ArrayBuffer(10);
    read.mockResolvedValue(mockData);
    json.mockRejectedValue(new Error("Parsing error"));

    return expect(GameSavingLoader.load()).rejects.toThrow("Parsing error");
  });
});
