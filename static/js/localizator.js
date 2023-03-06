// Получаем элементы кнопок и дивов с текстом
var englishButton = document.getElementById("en-lang");
var russianButton = document.getElementById("ru-lang");
var englishText = document.getElementById("main-en");
var russianText = document.getElementById("main-ru");

// Назначаем обработчики событий для кнопок
englishButton.addEventListener("click", function() {
  // Показываем английский текст, скрываем русский
  englishText.style.display = "block";
  russianText.style.display = "none";

  englishButton.classList.add("active");
  russianButton.classList.remove("active");
});

russianButton.addEventListener("click", function() {
  // Показываем русский текст, скрываем английский
  englishText.style.display = "none";
  russianText.style.display = "block";

  russianButton.classList.add("active");
  englishButton.classList.remove("active");
});
