(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[mobile-data-modal-open]'),
    // Додати атрибут mobile-data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[mobile-data-modal-close]'),
    // Додати атрибут mobile-data-modal на бекдроп модалки
    modal: document.querySelector('[mobile-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
