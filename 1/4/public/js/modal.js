// Находим кнопки
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');

// Открываем модальное окно
openModalButton.addEventListener('click', () => {
  modal.classList.add('open');
});

// Закрываем модальное окно
closeButton.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Закрываем модальное окно при нажатии вне его
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});
