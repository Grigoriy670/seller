import { furnitureCategories } from './product.js';

const createCategoryCard = (category, index) => {
    const categoryItem = document.createElement('div');
    
    // Правильные классы как в оригинале
    const baseClass = `for__item for__item_${index + 1}`;
    const sizeClass = (index < 2) ? 'for__item_big' : ''; // первые два большие
    
    categoryItem.className = `${baseClass} ${sizeClass}`.trim();
    
    // Только текст как в оригинале, без картинки в HTML
    categoryItem.innerHTML = `${category.title}`;
    
    // Добавляем фоновое изображение через CSS
    categoryItem.style.backgroundImage = `url(${category.photo})`;
    categoryItem.style.backgroundSize = 'cover';
    categoryItem.style.backgroundPosition = 'center';
    categoryItem.style.backgroundRepeat = 'no-repeat';
    
    // Сохраняем стили текста
    categoryItem.style.display = 'flex';
    categoryItem.style.alignItems = 'center';
    categoryItem.style.justifyContent = 'center';
    categoryItem.style.color = 'white';
    categoryItem.style.fontSize = '24px';
    categoryItem.style.fontWeight = 'bold';
    categoryItem.style.textAlign = 'center';
    
    categoryItem.addEventListener('click', () => {
        console.log(`Переход в категорию: ${category.title}`);
    });
    
    return categoryItem;
}

const renderCategoryCards = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    
    if (!container) {
        console.error('Category container not found!');
        return;
    }
    
    container.innerHTML = '';
    
    furnitureCategories.forEach((category, index) => {
        const card = createCategoryCard(category, index);
        container.appendChild(card);
    });
}

export { renderCategoryCards };