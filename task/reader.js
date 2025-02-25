export default function read() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data =
        '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

      const buffer = new TextEncoder().encode(data).buffer; // Преобразование в ArrayBuffer
      resolve(buffer);
    }, 1000);
  });
}
