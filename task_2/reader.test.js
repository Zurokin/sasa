import read from "./reader";

describe("read function", () => {
  it("should return an ArrayBuffer containing the correct data", async () => {
    const expectedData =
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    const buffer = await read();

    // Декодируем ArrayBuffer обратно в строку
    const decodedData = new TextDecoder().decode(buffer);

    expect(decodedData).toBe(expectedData);
  });
});
