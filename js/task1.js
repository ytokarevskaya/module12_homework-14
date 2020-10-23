const obj1 = {
    name: "igor",
    age: 30
};
const getOunProp = obj => {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`ключ: ${key}, его значение: ${obj[key]}`)
        }
    }
};

getOunProp(obj1);