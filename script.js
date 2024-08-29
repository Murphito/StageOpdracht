const openModal = document.getElementById('OpenModal');
const closeModal = document.getElementById('CloseModal');
const modal = document.querySelector('.scratchModal');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})