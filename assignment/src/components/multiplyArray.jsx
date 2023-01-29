export default function MultiplyArrays() {
    const arr1 = [3, 45, 23, 78, 34];
    const arr2 = [4, 2, 34, 4, 12, 1];
    let result = arr1.map(function (num, num2) {
        return num * arr2[num2];
    });
    console.log(result) //[12, 90, 782, 312, 408, 1]
    return (
        <h1>Multiply to arrays</h1>
    )
}