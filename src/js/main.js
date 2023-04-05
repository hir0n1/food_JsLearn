'use strict'

const   tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item');

function tab() {
    tabs.forEach((item, index) => {       
        item.addEventListener('click', (e) => {
            for(let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('tabheader__item_active')
            }
            e.target.classList.add('tabheader__item_active')
        })  
    })
}

tab()

