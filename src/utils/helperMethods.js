const createUsers = (usersInfoList) => {
    if (!localStorage.getItem('users')){
        const stringifyList = JSON.stringify(usersInfoList);
        localStorage.setItem("users", stringifyList);
    }
}

const setItem = (key, value) => {
    const stringifyList = JSON.stringify(value);
    localStorage.setItem(key, stringifyList);
}

const getItem = (key) => {
    const res = localStorage.getItem(key);
    const parsedRes = JSON.parse(res);
    return parsedRes;
}

const checkUser = (userName, password) => {
    let users = getItem('users');
    let result = null;
    for(let item of users){
        if (item.userName === userName){
            if (item.password === password){
                result = item;
                break;
            }
        }
    }
    return result; 
}
export {
    createUsers,
    setItem,
    getItem,
    checkUser
};