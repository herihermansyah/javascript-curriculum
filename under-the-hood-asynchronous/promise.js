{
  const downloadFile = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve(`success`);
      } else {
        reject("failed");
      }
    }, 2000);
  });

  downloadFile
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => {
      console.log("success complete");
    });
}

{
  function getData() {
    fetch("https://dummyjson.com/procts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`http error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data.products))
      .catch((error) => console.log(`error : ${error.message}`));
  }
  getData();
}
