export default function json(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = new TextDecoder("utf-8").decode(data);
        console.log("Result from json():", result);
        resolve(result);
      } catch (error) {
        reject(new Error(`Failed to decode JSON: ${error.message}`));
      }
    }, 500);
  });
}
