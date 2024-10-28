// Часть 2: Практические задания
// Задание 1: Простой промис
// Создай промис, который через 2 секунды завершится со значением "Привет, мир!". Используй setTimeout и resolve.



let myPromise = new Promise (function(resolve,reject) {
    setTimeout(function () {
        resolve ("Привет, мир!")
    },2000)
})

myPromise.then(function (result) {
    console.log(result)
})



let promise = new Promise((resole,reject) => {
    setTimeout(()=> {
        resole("Привет, let promise")
    },2000)

})

promise.then((result)=>{
    console.log(result)

})




var addTwoPromises = async function(promise1, promise2) {
    const result1 = await promise1
    const result2 = await promise2
    return result1 + result2
    
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4


var addTwoPromises2 = async function(promise1, promise2) {
   return Promise.all([promise1,promise2]).then((result)=> result[0] + result[1] )

    
};

addTwoPromises2(Promise.resolve(3), Promise.resolve(3)).then(console.log); // 4