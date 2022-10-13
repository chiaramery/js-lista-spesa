/*
    Data una lista della spesa, 
    stampare sulla pagina gli elementi della lista individualmente 
    con un ciclo while.
*/

const list = [ "uova", "acqua", "pasta", "mortadella", "guanciale", "broccoletti", "pomodori"];
console.log(list);
const shoppingList = document.querySelector(".list");
console.log(shoppingList);

let i = 0;
while (i < list.length) {
    const element = list[i];
    console.log(element);
    i++;

shoppingList.innerHTML += `<ul>
                                <li> 
                                    <a href=""><a href=""> ${element}</a>
                                </li>
                            </ul>`;
console.log(shoppingList);
}