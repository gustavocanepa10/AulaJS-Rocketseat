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



// Notação correta
async function fetch() {

    try {
        const response = await asynFunction()
        console.log(response)
        
    } catch (error) {
        console.log(error)
        
    } finally {
        console.log("fim da execução")
    }

    
    

  }

  fetch()

/* outra notação seria
const fetch = async () => {
    const response = await async function()
    console.log(response)
    
    
}
  
*/
