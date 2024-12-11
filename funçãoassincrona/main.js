function asyncFunction() {
    return new Promise((resolve,reject) => {

        setTimeout(()=> {

            const isSucess = true


            if(isSucess) {
                resolve("Foi um sucesso")
            
            
            } else {
                reject("Foi um fracasso")
            
            
            }

        
        
        
        },2000)






    })
}


asyncFunction().then((response) => {
    console.log(response)


}).catch((error) => {
    console.log(error)


}).finally(() => {
    console.log("FIM DA EXECUÇÃO!!!")

}) 
    


