//interface
interface User{
    firstName:string,
    lastName: string,
    age: number
}

//passing interface as type
function isLegal(user: User) {
    if(user.age>18){
        return true;
    }
    return false;
}

isLegal({
    firstName:"Sri",
    lastName:"D",
    age:33
})