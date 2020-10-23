const isHasPropety = (str, obj) => {
    for (let key in obj) {
        if (key === str) return true;
    }
    return false;
}

const obj1 = {
    name: 'Igor',
    height: 180,
    age: 30
};

isHasPropety('height', obj1); //true