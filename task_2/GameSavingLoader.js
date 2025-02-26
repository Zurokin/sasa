import read from "../task_2/reader";
import json from "../task_2/parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((parsedData) => new GameSaving(JSON.parse(parsedData)));
  }
}
