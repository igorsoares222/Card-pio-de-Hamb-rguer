const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function showAll(productsArray) {

    let myLi = ''

    productsArray.forEach((products) => {
        myLi = myLi + 
        `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="item-price">R$ ${products.price}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function MapAllItems(){
    const newPrices = menuOptions.map((product => ({
        name: product.name,
        price: product.price * 0.9, //dar desconto de 10%//
        vegan :product.vegan,
        src: product.src
    })))
    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price,0)

    list.innerHTML =  `
    <li>
        <p>O valor total é de R$ ${totalValue}</p>
    </li>
`

console.log(totalValue)
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', MapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)