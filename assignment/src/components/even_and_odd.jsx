
export default function EvenAndOdd() {
    const arr = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63]
    function findEven(arr) {
        return arr.filter(a => a % 2 === 0);
    }
    function findOdd(arr) {
        return arr.filter(a => a % 2 !== 0);
    }
    const evenNumbers = findEven(arr)
    const oddNumbers = findOdd(arr)
    return (
        <div>
            <h1>Find even odd from given array</h1>
            <h3>Even Numbers </h3>
            {
                evenNumbers && evenNumbers.map((n, idx) => {
                    return (
                        <div key={idx}>
                            <p> {n}</p>
                        </div>
                    )
                })
            }
            <h3>Odd Numbers </h3>
            {
                oddNumbers && oddNumbers.map((n, idx) => {
                    return (
                        <div key={idx}>
                            <p> {n}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}