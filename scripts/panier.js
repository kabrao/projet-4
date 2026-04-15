import {panierItems} from '../data/panier.js'

let panierProduit = '';

export function updatePanier (){
    panierItems.forEach((item)=> {
        let panierForm = `
        <div class="panierItems">
            <span>${item.name}</span>
            <div class="Qte">
                <button class="arrowQLeft" data-produit-id="${item.id}"><</button>
                <span>${item.quantite}</span>
                <button class="arrowQRight" data-produit-id="${item.id}">></button>
            </div>
            
            <span>${((item.price * item.quantite)/100).toFixed(2)}$</span>
            <button class="delete" data-produit-id="${item.id}">[x]</button>
        </div>`
        
        panierProduit += panierForm;
    });
        document.querySelector('.itemPanier').innerHTML = panierProduit; 
        panierProduit = '';
    
    document.querySelectorAll(".delete").forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let id = btn.dataset.produitId ;
            let itemDelete = panierItems.findIndex(p => id == p.id);
            panierItems.splice(itemDelete, 1);
            updatePanier()
        })
    })
    document.querySelectorAll(".arrowQLeft").forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let id = btn.dataset.produitId ;
            let item = panierItems.find(p => id == p.id);
            item.quantite > 1 ? item.quantite = Number(item.quantite) - 1 : '';
            
            updatePanier();
        })
    })
    document.querySelectorAll(".arrowQRight").forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let id = btn.dataset.produitId ;
            let item = panierItems.find(p => id == p.id);
            item.quantite = Number(item.quantite) + 1 ;
            
            updatePanier();
        })
    })
}

