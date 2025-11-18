// Для специальных предложений (2 цены)
const createSpecialOfferCard = (product) => {
    const article = document.createElement('article');
    article.className = 'product';
    
    article.innerHTML = `
        <img class="product__img" src="${product.photo[0]}" alt="${product.model}">
        <h3 class="product__name">${product.model}</h3>
        <p class="product__text">${product.info}</p>
        <div class="product-box__price">
            <p class="product__price">${product.prices[0]}</p>
            <p class="product__price product__price--sale">${product.prices[1]}</p>
        </div>
    `;
    
    return article;
}

// Для обычного каталога (1 цена)
const createCatalogCard = (product) => {
    const article = document.createElement('article');
    article.className = 'product';
    
    article.innerHTML = `
        <img class="product__img" src="${product.photo[0]}" alt="${product.model}">
        <h3 class="product__name">${product.model}</h3>
        <p class="product__text">${product.info}</p>
        <p class="product__price">${product.prices[0]}</p>
    `;
    
    return article;
}

// Рендерим специальные предложения
const renderSpecialOffers = (specialOffers, container) => {
    container.innerHTML = '';
    specialOffers.forEach((product) => {
        const card = createSpecialOfferCard(product);
        container.appendChild(card);
    });
}

// Рендерим обычный каталог
const renderCatalog = (catalog, container) => {
    container.innerHTML = '';
    catalog.forEach((product) => {
        const card = createCatalogCard(product);
        container.appendChild(card);
    });
}

export { renderSpecialOffers, renderCatalog };