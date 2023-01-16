// Функц зохиох


export default function CreateFunction() {
    function findMax(a, b) {
        return Math.max(a, b)
    }

    console.log(findMax(1, 2));

    function findNumberInArray(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                return i
            }
        }
        return -1;
    }

    const a = [1, 2, 3, 4]
    const b = ['a', 'b', 'c', 'd']

    console.log(findNumberInArray(a, 1));
    console.log(findNumberInArray(b, 'a')); // 0
    console.log(findNumberInArray(b, 'e')); // -1



    function randomNumber(a, b) {
        let max = Math.max(a, b)
        let min = Math.min(a, b)
        const c = Math.floor(Math.random(a, b) * (max - min) + min)
        return c
    }

    console.log('random number', randomNumber(2, 5)); // 3

    function findAvarage(arr) {
        let sum = 0;
        arr.map(n => {

            sum = sum + n;

        })
        return sum / arr.length
    }

    console.log(findAvarage(a)); //3

    function strToLowerCase(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toUpperCase()
        }
        return arr
    }
    console.log(b);
    console.log(strToLowerCase(b)); // ['A','B','C','D']

    function isPrime(num) {
        if(num < 2) {
            return false;
        }
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }

    console.log(isPrime(2));
    console.log(isPrime(10));


}

