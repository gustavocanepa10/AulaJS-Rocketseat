// Conhecendo async e await
function asynFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSucess = true;
  
        if (isSucess) {
          resolve("Tudo certo");
        } else {
          reject("Deu errado");
        }
      }, 3000);
    });
  }
  

async function fetch() {
    const response = await asynFunction()
    console.log(response)

}
fetch()
  