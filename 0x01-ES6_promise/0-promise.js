export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    resolve('successful');
    reject(new Error('operation failed'));
  });
  return promise;
}
