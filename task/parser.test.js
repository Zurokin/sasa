import json from "./parser";

describe("json function", () => {
  it("should decode the data correctly", async () => {
    const mockData = new TextEncoder().encode('{"gameData": "some data"}');
    const expectedResult = '{"gameData": "some data"}';

    const result = await json(mockData);

    expect(result).toBe(expectedResult);
  });

  it("should throw an error if the data cannot be decoded", async () => {
    const invalidData = "invalid data"; // невалидный формат для TextDecoder

    await expect(json(invalidData)).rejects.toThrow(
      'Failed to decode JSON: The "list" argument must be an instance of SharedArrayBuffer, ArrayBuffer or ArrayBufferView.'
    );
  });
});
