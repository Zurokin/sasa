import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);

      console.log("Parsed JSON Data:", parsedData);

      return new GameSaving(JSON.parse(parsedData));
    } catch (error) {
      throw new Error(`Failed to load game saving: ${error.message}`);
    }
  }
}
