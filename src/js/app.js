
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';
flsFunctions.isWebp();

const swiper = new Swiper();

// =================  Автозаполнение поля ввода с фильтрацией =================

const jobs = [
  "Работник склада",
  "Грузчик",
  "Сварщик",
  "Опалубщик",
  "Горничная",
  "Разделочник мяса",
  "Лифтер",
  "Прокладчики наружных коммуникаций"
];
const input = document.getElementById("jobsInput");
  const list = document.getElementById("jobsList");

  // показать все варианты
  function showAllOptions() {
    list.innerHTML = "";
    jobs.forEach(city => {
      const li = document.createElement("li");
      li.textContent = city;
      li.onclick = () => {
        input.value = city;
        list.style.display = "none";
      };
      list.appendChild(li);
    });
    list.style.display = "block";
  }

  // фильтрация по вводу
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    list.innerHTML = "";
    const filtered = jobs.filter(city =>
      city.toLowerCase().includes(value)
    );

    if (filtered.length) {
      filtered.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;
        li.onclick = () => {
          input.value = city;
          list.style.display = "none";
        };
        list.appendChild(li);
      });
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });

  // показать список при фокусе
  input.addEventListener("focus", showAllOptions);

  // скрыть список при клике вне
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".hero__search")) {
      list.style.display = "none";
    }
  });