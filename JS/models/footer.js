import { footerData } from './product.js';

const createFooter = () => {
    return `
        <a class="footer__img" href="index.html"> 
            <img src="images/Logof.svg" alt="Логотип">
        </a>
        
        <div class="footer__item">
            <h4 class="footer__item-menu">Меню</h4>
            <nav class="footer-menu">
                <a class="footer-menu__link" href="index.html">Главная</a>
                <a class="footer-menu__link" href="catalog.html">Каталог</a>
                <a class="footer-menu__link" href="cart.html">Корзина</a>
            </nav>
        </div>
        
        <div class="footer__item">
            <h4 class="footer__item-title">Контакты</h4>
            <div class="footer-contact">
                <a class="footer-contact__link" href="tel:+79088008080">+7 908 800 80 80</a>
                <a class="footer-contact__link" href="mailto:help@interier.com">help@interier.com</a>
            </div>
            <div class="icons">
                <a target="_blank" href="https://m.vk.com/">
                    <svg class="icon-hover" width="24" height="14" viewBox="0 0 24 14" fill="#888888">
                        <path d="M23.45 0.94C23.61 0.4 23.45 0 22.65 0L20.02 0C19.36 0 19.05 0.34 18.88 0.72C18.88 0.72 17.55 3.92 15.66 6C15.04 6.6 14.77 6.79 14.43 6.79C14.27 6.79 14.01 6.6 14.01 6.05L14.01 0.94C14.01 0.29 13.83 0 13.27 0L9.15 0C8.73 0 8.48 0.3 8.48 0.59C8.48 1.21 9.42 1.35 9.52 3.1L9.52 6.9C9.52 7.73 9.37 7.88 9.03 7.88C8.14 7.88 5.98 4.67 4.69 1C4.45 0.28 4.19 0 3.52 0L0.89 0C0.14 0 0 0.34 0 0.72C0 1.41 0.89 4.8 4.14 9.28C6.31 12.34 9.37 14 12.15 14C13.82 14 14.02 13.63 14.02 12.99L14.02 10.68C14.02 9.94 14.18 9.8 14.71 9.8C15.1 9.8 15.77 9.99 17.33 11.46C19.1 13.21 19.4 14 20.4 14L23.02 14C23.77 14 24.15 13.63 23.93 12.9C23.7 12.18 22.85 11.12 21.72 9.88C21.11 9.17 20.19 8.4 19.91 8.02C19.52 7.53 19.63 7.31 19.91 6.87C19.91 6.87 23.11 2.45 23.44 0.94Z"/>
                    </svg>
                </a>
                <a target="_blank" href="https://web.telegram.org/">
                    <svg class="icon-hover" width="21" height="18" viewBox="0 0 21 18" fill="#888888">
                        <path d="M19.29 0.2L0.68 7.41C-0.06 7.74 -0.32 8.42 0.5 8.78L5.28 10.31L16.82 3.14C17.45 2.69 18.09 2.81 17.54 3.3L7.63 12.32L7.31 16.14C7.6 16.73 8.13 16.73 8.47 16.44L11.21 13.83L15.91 17.37C17 18.02 17.59 17.6 17.83 16.41L20.91 1.74C21.23 0.28 20.68 -0.37 19.29 0.2Z"/>
                    </svg>
                </a>
                <a target="_blank" href="https://dzen.ru/">
                    <svg class="icon-hover" width="19" height="18" viewBox="0 0 19 18" fill="#888888">
                        <path d="M11.33 10.73C9.83 12.19 9.73 14.01 9.6 18C13.52 18 16.23 17.98 17.62 16.7C18.98 15.37 19 12.68 19 9.09C14.79 9.22 12.87 9.32 11.33 10.73ZM0 9.09C0 12.68 0.01 15.37 1.37 16.7C2.76 17.98 5.47 18 9.39 18C9.26 14.01 9.16 12.19 7.66 10.73C6.12 9.32 4.2 9.21 0 9.09ZM9.39 0C5.48 0 2.76 0.01 1.37 1.29C0.01 2.62 0 5.31 0 8.9C4.2 8.77 6.12 8.67 7.66 7.26C9.16 5.8 9.26 3.98 9.39 0ZM11.33 7.26C9.83 5.8 9.73 3.98 9.6 0C13.52 0 16.23 0.01 17.62 1.29C18.98 2.62 19 5.31 19 8.9C14.79 8.77 12.87 8.67 11.33 7.26Z"/>
                    </svg>
                </a>
            </div>
        </div>
        
        <div class="footer__form">
            <form class="footer__form-form">
                <p class="footer__form-pnew">Получайте наши новости и обновления</p>
                <input type="email" placeholder="Ваш email" class="footer__form-input">
                <button class="btn" type="submit">Подписаться</button>
            </form>
        </div>
    `;
}

const renderFooter = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    
    if (!container) {
        console.error('Footer container not found!');
        return;
    }
    
    container.innerHTML = createFooter();
}

export { renderFooter };