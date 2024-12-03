(() => {
  const refs = {
    // Додати атрибут data-modal-opened на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-opened]'),
    // Додати атрибут data-modal-closed на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-closed]'),
    // Додати атрибут data-modalka на бекдроп модалки
    modal: document.querySelector('[data-modalka]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
