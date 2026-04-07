import {listMenu} from '../data/menuList.js'

let menuProduit = '';

listMenu.forEach((produit) => {
    let itemForm = `
    <div class="card">
        <img src="${produit.image}" >caffeMug
        <p class="cardName">${produit.name}</p>
        <div class="cardBottom">
            <p class="cardPrice">$${(produit.price) / 100}</p>
            <button class="cardBtn">🛒</button>
        </div>
    </div>`;

    menuProduit += itemForm;
    
    document.querySelector('.menuHolder').innerHTML = menuProduit; 

})
console.log()
