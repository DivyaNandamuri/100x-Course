"use strict";
function isLegal(user) {
    if (user.age > 21) {
        return true;
    }
    return false;
}
isLegal({
    firstName: "Sri",
    lastName: "D",
    age: 33
});
