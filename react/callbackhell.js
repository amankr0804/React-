function test() {
    setTimeout(() => {
        console.log("test1")
    }, 4000);
}
function test2() {
    setTimeout(() => {
        console.log("test2")
    }, 2000);
}
test();
test2();