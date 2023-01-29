export default function DoubleLoop() {
    // loop 1 
    let n = 5;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(" - " + row);
    }
    // loop 2 
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = n; j > i; j--) {
            row += j + " ";
        }
        console.log(" - " + row);
    }
}