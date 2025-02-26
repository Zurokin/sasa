import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load().then(
  (saving) => {
    console.log("Saving loaded:", saving);
  },
  (error) => {
    console.error("Error:", error);
  }
);
