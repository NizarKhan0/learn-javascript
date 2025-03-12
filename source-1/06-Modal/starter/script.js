'use strict';

// select modal-btn, modal-overlay, close-btn

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent);
    const btnOpenModal = btnsOpenModal[i];
    console.log(btnOpenModal);
    btnOpenModal.addEventListener('click', function() {
        console.log('Button clicked');
        // modal.style.display = 'block';
        // overlay.style.display = 'block';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    const openModal = function() {
        console.log('Button clicked');
        // modal.style.display = 'block';
        // overlay.style.display = 'block';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const closeModal = function() {
        //utk ddapat tau button close di klik
        console.log('Button close clicked');
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // overlay.addEventListener('click', function() {
    //     //utk ddapat tau overlay di klik
    //     console.log('overlay clicked');
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });
}

// let test = 'test';
// console.log(test);

