import GameSavingLoader from "./GameSavingLoader";

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log("Saving loaded:", saving);
  } catch (error) {
    console.error("Error:", error);
  }
})();
