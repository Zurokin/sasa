import GameSavingLoader from "./GameSavingLoader";
import * as reader from "./reader";
import * as parser from "./parser";
import GameSaving from "./GameSaving";

jest.mock("./reader");
jest.mock("./parser");

describe("GameSavingLoader", () => {
  it("should load and parse the game saving data correctly", async () => {
    const mockData = '{"gameData": "some data"}';
    const mockParsedData = '{"gameData": "some data"}';

    // Mocking the reader and parser functions
    reader.default.mockResolvedValue(mockData);
    parser.default.mockResolvedValue(mockParsedData);

    const mockGameSaving = new GameSaving({ gameData: "some data" });
    jest.spyOn(GameSaving, "constructor").mockReturnValue(mockGameSaving);

    const result = await GameSavingLoader.load();

    expect(reader.default).toHaveBeenCalled();
    expect(parser.default).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(mockGameSaving);
  });

  it("should throw an error if reading the data fails", async () => {
    reader.default.mockRejectedValue(new Error("Reading error"));

    await expect(GameSavingLoader.load()).rejects.toThrow(
      "Failed to load game saving: Reading error"
    );
  });

  it("should throw an error if parsing the data fails", async () => {
    const mockData = '{"gameData": "some data"}';
    reader.default.mockResolvedValue(mockData);
    parser.default.mockRejectedValue(new Error("Parsing error"));

    await expect(GameSavingLoader.load()).rejects.toThrow(
      "Failed to load game saving: Parsing error"
    );
  });
});
