/* 

 1 уровень сложности: ЗАДАЧА 1

Уровень 1



Создай функцию calculateSquare(), которая будет принимать значение из поля ввода и выводить квадрат этого числа в
элемент с классом result. Например, если введено число 5, то функция должна вычислить квадрат числа 5 (25) и вывести
результат в элемент с классом result ("Результат: 25").


Создай функцию checkEvenOdd(), которая будет принимать значение из поля ввода и выводить сообщение о том,
является ли число четным или нечетным. Если число четное, то функция должна вывести сообщение "Число <значение> является четным",
а если число нечетное, то сообщение "Число <значение> является нечетным". Например, если введено число 7, то функция должна
вывести сообщение "Число 7 является нечетным".



Уровень 2



Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
последующих кликов уменьшайте размер изображения на 50.:


ЗАДАЧА 2


Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.


После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.


Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.


Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".


2 уровень сложности: 


*/






/* Задача 1 */




/* 
Создай функцию calculateSquare(), которая будет принимать значение из поля ввода и выводить квадрат этого числа в
элемент с классом result. Например, если введено число 5, то функция должна вычислить квадрат числа 5 (25) и вывести
результат в элемент с классом result ("Результат: 25").
*/



let square=prompt("Please Enter your square  number:")

function calculateSquare(num) {
    document.write(`<h3>The square of your  number is: ${num*num} </h3>`)
}
calculateSquare(square)









/* Создай функцию checkEvenOdd(), которая будет принимать значение из поля ввода и выводить сообщение о том,
является ли число четным или нечетным. Если число четное, то функция должна вывести сообщение "Число <значение> является четным",
а если число нечетное, то сообщение "Число <значение> является нечетным". Например, если введено число 7, то функция должна
вывести сообщение "Число 7 является нечетным".
 */

let EvenOddNum=prompt(" Lets check your  number Please Enter your number:")

function checkEvenOdd(num) {

  /*   let evenmessage=document.write(`<h3>The fucking number: ${num} is even</h3>`)
    let oddmessage=document.write(`<h3>The fucking number: ${num} is odd</h3>`) */
   let message= num % 2 ===0 ? `<h3>The fucking number: ${num} is even</h3>` : `<h3>The  number: ${num} is odd</h3>`
    document.write(message)
}


checkEvenOdd(EvenOddNum)


/* Задача 3 */1

/* Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
последующих кликов уменьшайте размер изображения на 50.:
 */




let img=document.querySelector(".bmw")


/* let imgWidth = 500;
let imgHeight = 300;





function zoom() {

if (imgHeight <= "500px" && imgWidth <="700px") {
    img.style.height=(imgHeight+50)+"px"
    img.style.width=(imgWidth+50)+"px"
    imgHeight += 50;
    imgWidth += 50;
}else if (imgHeight >= "500px" && imgWidth >="700px") {
    img.style.height=(imgHeight+50)-"px"
    img.style.width=(imgWidth+50)-"px"
    imgHeight -= 50;
    imgWidth -= 50;
}

} */


let imgWidth;
let imgHeight;
function zoom() {
    imgWidth = parseInt(window.getComputedStyle(img).width);
    imgHeight = parseInt(window.getComputedStyle(img).height);
    if (imgHeight <= 500 && imgWidth <= 700) {
        img.style.height = (imgHeight + 50) + "px";
        img.style.width = (imgWidth + 50) + "px";
    } else if (imgHeight >= 300 && imgWidth >= 500) {
        img.style.height = (imgHeight - 50) + "px";
        img.style.width = (imgWidth - 50) + "px";
    }
}

/* 
function zoom() {
    do {
        imgWidth = parseInt(window.getComputedStyle(img).width);
        imgHeight = parseInt(window.getComputedStyle(img).height);

        if (imgHeight <= 500 && imgWidth <= 700) {
            img.style.height = (imgHeight + 50) + "px";
            img.style.width = (imgWidth + 50) + "px";
        } else if (imgHeight > 300 && imgWidth > 500) {
            img.style.height = (imgHeight - 50) + "px";
            img.style.width = (imgWidth - 50) + "px";
        }
    } while (imgHeight !== 300 && imgWidth !== 500);
} */



/* ЗАДАЧА 4


Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.


После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.


Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.


Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".
 */