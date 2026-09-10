function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f1 resolved');
        }, 4000);
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('f2 resolved');
        }, 2000);
    });
}
f1().then(f2)
     .catch((err) => {
        console.log("ERROE",err);
     });
