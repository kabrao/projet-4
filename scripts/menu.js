import {listMenu} from '../data/menuList.js'
import {panier} from '../data/cart.js'

let menuProduit = '';

listMenu.forEach((produit) => {
    let itemForm = `
    <div class="card">
        <img src="${produit.image}" >caffeMug
        <p class="cardName">${produit.name}</p>
        <div class="cardBottom">
            <p class="cardPrice">$${((produit.price) / 100).toFixed(2)}</p>
            <button class="cardBtn" data-produit-nom= "${produit.name}">🛒</button>
        </div>
    </div>`;

    menuProduit += itemForm;
    
    document.querySelector('.menuHolder').innerHTML = menuProduit; 

})
document.querySelectorAll('.cardBtn')
    .forEach((btn) =>{
        btn.addEventListener('click', () => {
            panier.push({ name : `${btn.dataset.produitNom}` });
        });
    })

