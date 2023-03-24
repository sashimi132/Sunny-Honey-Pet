// Устанавливаем номер активного слайда
let activeIndex = 0;
// Получаем все слайды
const slides = [...document.querySelectorAll('.slide')]
// Получаем кол-во слайдов
let slidesCount = slides.length - 1
// Получаем кнопку следующего слайда
const btnNext = document.querySelector('.slide-next')
// Получаем кнопку предыдущего слайда
const btnPrev = document.querySelector('.slide-prev')

// Функция для показа слайдов
function showSlide(id) {
    // Перебираем все слайды и скрываем их
    slides.map(slide =>{
        slide.style.opacity='0'
        setTimeout(()=>{
          slide.style.display='none'
        }, 500)
    })
    setTimeout(()=>{
      slides[id].style.display='flex'
      slides[id].style.opacity='1'
    }, 500)
    // Показываем активный слайд

}

// Показываем дефолтный слайд
showSlide(activeIndex)

// Добавляем события клика на нашу кнопку вперед
btnNext.addEventListener('click', () => {
    console.log(activeIndex, slidesCount)
    // Проверка на корректное переключение слайдов кнопкой
    if (activeIndex < slidesCount) {
        activeIndex=activeIndex+1
    } else {
        activeIndex = 0
    }
    showSlide(activeIndex)
})

// Добавляем события клика на нашу кнопку назад
btnPrev.addEventListener('click', () => {
    // Проверка на корректное переключение слайдов кнопкой
    if (activeIndex == 0) {
      activeIndex = slidesCount
    } else {
      activeIndex=activeIndex - 1
    }    
    showSlide(activeIndex)
})

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}