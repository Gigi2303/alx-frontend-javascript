function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 2000);
  })
    .catch(error => {
      console.error('Error in getFullResponseFromAPI:', error.message);
      throw error;
    });
  }

export default getFullResponseFromAPI;
