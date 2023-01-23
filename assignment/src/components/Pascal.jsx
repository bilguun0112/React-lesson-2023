export default function Pascal() {
    const n = 5;

    function pascTri(n) {
        let triAngle = [];
        for (let i = 0; i < n; i++) {
            triAngle[i] = new Array(i + 1);
            for (let j = 0; j < i + 1; j++) {
                if (j === 0 || j === i) {
                    triAngle[i][j] = 1;
                } else {
                    triAngle[i][j] = triAngle[i - 1][j - 1] + triAngle[i - 1][j];
                }
            }
        }
        return triAngle;
    }
    const pascals = pascTri(n);

    let htmlElement = " ";
    for (let i = 0; i < pascals.length; i++) {
        for (let j = 0; j < pascals[i].length; j++) {
            htmlElement += pascals[i][j]
        }
        htmlElement += ""
    };


    return (
        <div>
            <h1>Pascal's Triangle</h1>
            <div>{htmlElement}</div>
        </div>
    )
}