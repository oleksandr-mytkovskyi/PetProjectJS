import {getResourses} from '../services/services';
function cards() {

    class MenuItem {
        constructor(src, alt, title, description, price, selector, ...classes) {
            this.title = title;
            this.description = description;
            this.price = price;
            this.src = src;
            this.alt = alt;
            this.classes = classes;
            this.parentDiv = document.querySelector(selector);
            this.transfer = 27;
            this.changeToUAN();
        }
    
        render() {
            const div = document.createElement('div');
                 
    
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                div.classList.add(this.classes)
            } else {
                this.classes.forEach(className => div.classList.add(className));
            }
            // let tmp = this.changeToUAN();
            div.innerHTML = ` 
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
               </div>`;
               this.parentDiv.append(div);
        }
        changeToUAN() {
           this.ptrice = this.price * this.transfer;
        }
    }
    
    getResourses('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price})=> {
                new MenuItem(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
    
    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price})=> {
    //             new MenuItem(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });
    
}

export default cards;