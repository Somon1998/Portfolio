// Открытие и закрытие меню по клику на бургер
const menu = document.querySelector(".navbar");
const menuBtn = document.getElementById("menu-btn");

// Клик по бургеру — открывает/закрывает меню
menuBtn.onclick = () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
};

// Когда пользователь кликает по пункту меню — меню закрывается
document.querySelectorAll(".navbar a").forEach((link) => {
  link.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("fa-times");
  };
});

//  <!-- тема светло темный -->
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-theme");

  // Меняем иконку
  const icon = toggleBtn.querySelector("i");
  if (document.body.classList.contains("light-theme")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
};

// portfolio script
$(".button").click(function () {
  let filter = $(this).attr("data-filter");

  if (filter == "all") {
    $(".gallery-container .img").show(400);
  } else {
    $(".gallery-container .img")
      .not("." + filter)
      .hide(200);
    $(".gallery-container .img")
      .filter("." + filter)
      .show(400);
  }
});

// magnific popup script

$(".gallery-container").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

// review slider script
let swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// смена языки
function changeLanguage(lang) {
  // Сохраняем выбор языка
  localStorage.setItem("selectedLanguage", lang);

  fetch(`${lang}.json`, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (!data[key]) return;

        if ("placeholder" in el) {
          el.placeholder = data[key]; // input/текстареа
        } else {
          el.textContent = data[key]; // обычный текст
        }
      });
    })
    .catch(console.error);
}

// Сохраняем языка
function loadSavedLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";

  changeLanguage(savedLang);
}

loadSavedLanguage();

// Фиксируем шапку при скролле (только один раз добавляем обработчик!)
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
