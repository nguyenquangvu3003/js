// cach dung vong lap
function sumarray(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers [i]
    }
    return sum
}
// dung reduce nang cao
//reduce ( accumulator (giá trị tích lũy qua từng vòng lặp), currentValue (phần tử hiện tại của mảng))
function sumarrayreduce(numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}
//test thu
const arr = [5, 10, 15, 20]
console.log('sum:', sumarray(arr));
console.log('sum(reduce):', sumarrayreduce(arr));


