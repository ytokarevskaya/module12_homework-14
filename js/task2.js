const isHasPropety = (str, obj) => {
    return str in obj;
}

const obj1 = {
    name: 'Igor',
    height: 180,
    age: 30
};

isHasPropety('height', obj1); //true

// Задание выполнено верно, но код функции можно упростить, выше показала как