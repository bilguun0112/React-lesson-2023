
export default function UpdateArrays() {
    let a = [1, 2, 3, 4, 5];
    console.log(a);
    a.push(6)
    console.log(a);
    a.unshift(0)
    console.log(a);
    a.pop()
    console.log(a);
    a.shift()
    console.log(a);
    a.splice(1, 1)
    console.log(a);
    const slice = a.slice(1, 2)
    console.log(slice);
    console.log(a.reverse());
    let c = [1, 2, 3, 11, 12, 23, 100]
    console.log(c);
    console.log(c.sort())
    console.log(c.sort((a, b) => a - b));

    let d = [1, 2]
    let e = [4, 5]
    const f = d.concat(e)
    console.log(f);
    d = [...e]
    console.log(e);

    console.log(c.filter(el => el > 5));

    return (
        <>
            <p>
                Arrays
            </p>



        </>
    )
}