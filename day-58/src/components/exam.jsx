export default function Exam() {

    let a = [2, 3, 4];
    let b = [2, 2, 2];
    let c = [];
    let d = []
    function multiplyArr(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            c[i] = arr1[i] * arr2[i];
        }
        return console.log(c)
    }
    multiplyArr(a, b)
    function multiplyArr(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            d.push(arr1[i] * arr2[i])
        }
        return console.log(d)
    }
    multiplyArr(a, b)

    return (
        <h1>Hello</h1>
    )
}