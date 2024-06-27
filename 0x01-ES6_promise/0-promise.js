function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('API call successful!');
      } else {
        reject(new Error('API call failed'));
      }
    }, 2000);
  });
}

export default getResponseFromAPI;
