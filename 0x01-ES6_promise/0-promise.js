function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = 'Response data';
      resolve(response);
    }, 3000);
  });
}

export default getResponseFromAPI;
