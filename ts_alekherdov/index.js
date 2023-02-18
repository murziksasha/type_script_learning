function createAnimation(id, animName, timingFunc, //при создании анимации передается только один из этих вариантов, если аргумент пропустим
//то подставится аргумент по умолчанию
duration, iterRepeat //или количество раз или бесконечно
) {
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    var elem = document.querySelector("#".concat(id)); //означает что это действительно элемент который получен из ДОМ структуры
    if (elem) { //проверка а действительно ли найден элемент на странице
        console.log("".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterRepeat));
        elem.style.animation = "".concat(animName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterRepeat); //елем. бывают и без стилей поэтому as HTMLElement дописываем.
    }
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
