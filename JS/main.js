import { renderSpecialOffers, renderCatalog } from "./models/prodectCards.js";
import { renderCategoryCards } from "./models/categoryCards.js";
import { specialOffers, catalog } from './models/product.js';
import { renderFooter } from "./models/footer.js"

window.addEventListener('DOMContentLoaded', () => {
    renderCategoryCards('.for');    

    const specialOffersContainer = document.querySelector('.special-offers .product-content');
    const catalogContainer = document.querySelector('.catalog .product-content');
    
    renderSpecialOffers(specialOffers, specialOffersContainer);
    renderCatalog(catalog, catalogContainer);

    renderFooter('.footer')
});

