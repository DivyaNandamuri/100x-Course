//GENERIC TYPE
function firstElement<T>(numbers: T[]) {
    return numbers[0];
}

console.log(firstElement<string>(["h","f"]))
// console.log(firstElement<number>([1,2])) 
export default firstElement