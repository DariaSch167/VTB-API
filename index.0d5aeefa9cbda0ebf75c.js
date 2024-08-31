/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 726:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/menu_middle2.7914be65eaa8995093d2.svg";

/***/ }),

/***/ 667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/menu_middle2_active.4cdb2ba84e8d0c9558e3.svg";

/***/ }),

/***/ 889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/menu_top1.3b17e5abc518002a5964.svg";

/***/ }),

/***/ 914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/menu_top1_active.3dcf2eb9d58c7dce53c9.svg";

/***/ }),

/***/ 835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/target_add_savings_close.b160b4b3b75792984120.svg";

/***/ }),

/***/ 986:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/target_add_savings_save.35ff8e4d3836c9b07974.svg";

/***/ }),

/***/ 277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icons/target_victory.88f15d87e401074476f8.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/menu.js
// Кнопки бокового меню и их контейнеры
var targetPageWrapper = document.querySelector(".target_page_wrapper");
var targetPage = document.getElementById("target_page"); // Кнопка "Список целей - страница"
var formPageWrapper = document.querySelector(".bodyForm_wrapper");
var targetAddButton = document.getElementById("target_add_button"); // Кнопка "Форма - страница"

var targetPageImgA = __webpack_require__(667);
var targetAddImg = __webpack_require__(889);
var targetPageImg = __webpack_require__(726);
var targetAddImgA = __webpack_require__(914);

// Обработка нажатия кнопки "Список целей - страница"
targetPage.addEventListener("click", changeFormToTarget);
function changeFormToTarget() {
  targetPage.classList.add("active_menu_button");
  targetPage.style.backgroundImage = "url(".concat(targetPageImgA, ")");
  targetAddButton.style.backgroundImage = "url(".concat(targetAddImg, ")");
  targetAddButton.classList.remove("active_menu_button");
  formPageWrapper.classList.add("hidden");
  targetPageWrapper.classList.remove("hidden");
}

// Обработка нажатия кнопки "Форма"
targetAddButton.addEventListener("click", changeTargetToForm);
function changeTargetToForm() {
  targetPage.classList.remove("active_menu_button");
  targetPage.style.backgroundImage = "url(".concat(targetPageImg, ")");
  targetAddButton.classList.add("active_menu_button");
  targetAddButton.style.backgroundImage = "url(".concat(targetAddImgA, ")");
  targetPageWrapper.classList.add("hidden");
  formPageWrapper.classList.remove("hidden");
}

;// CONCATENATED MODULE: ./src/modal.js
function ModalWindow(target, targetCard, targetInfo, targetInfoVictory, createProgressBar, targetsList, targetVictory) {
  // Контейнер модального окна
  var generalWrapper = document.querySelector(".general_wrapper");
  var modalBackGround = document.createElement("div");
  generalWrapper.append(modalBackGround);

  // Элементы для обновления инфо внутри модального окна
  var differenceSumText = targetCard.querySelector(".target_card_diff");
  var savedSumText = targetCard.querySelector(".target_card_saved");

  // Создание подсказки для кнопки-стрелки "Пополнить счёт"
  var buttonTargetAddSavings = targetCard.querySelector(".target_add_savings");
  buttonTargetAddSavings.title = "Нажмите для пополнения или снятия";

  // Вызов модального окна
  buttonTargetAddSavings.onclick = function () {
    modalBackGround.classList.add("modal-background");
    modalBackGround.innerHTML = " <div class=\"modal-window\">\n      <div class=\"target_title\">\n      <h2 class=\"target_name\">".concat(target.getName(), "</h2>\n      <button class=\"modal-close\"></button>\n      </div>\n      <div class=\"modal-info\">\n      <div class=\"modal_totalsum_info\">\n      <p class=\"info-title\">\u0421\u0443\u043C\u043C\u0430 \u0434\u043B\u044F \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u044F:</p>\n      <p class=\"info-value\">").concat(target.getTotalSum().toLocaleString("ru-RU"), " \u20BD</p>\n      </div>\n      <div class=\"modal_duedate_info\">\n      <p class=\"info-title\">\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u044F:</p>\n      <p class=\"info-value\">").concat(target.getDueDate(), "</p>\n      </div>\n      </div>\n      <div class=\"target_progress\">\n      <p>\u041D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043E: <span class=\"saved-sum\">").concat(target.getSavedSum().toLocaleString("ru-RU"), " \u20BD</span></p>\n      <p>\u0414\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u0438: <span class=\"difference-sum\">").concat(target.getDifferenceSum().toLocaleString("ru-RU"), " \u20BD</span></p>\n      </div>\n      <div class=\"modal-button-wrapper\">\n      <div class=\"modal-buttons\">\n      <input type=\"number\" class=\"input-sum\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443, \u0440\u0443\u0431\">\n      <button class=\"modal-add-saving\">\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C</button>\n      <button class=\"modal-withdraw-savings\">\u0421\u043D\u044F\u0442\u044C</button>\n      </div>\n      <p class=\"error-display\"></p>\n      </div>\n      </div>\n    </div>");

    // Элементы для обновления элементов в модальном и на главной
    var errorDisplay = modalBackGround.querySelector(".error-display");
    var inputSum = modalBackGround.querySelector(".input-sum");
    var savedSumElement = modalBackGround.querySelector(".saved-sum");
    var diffSumElement = modalBackGround.querySelector(".difference-sum");

    // Объект для вывода из функции на главную
    var savedSumModal = [target.getSavedSum(), target.getDifferenceSum(), target.getTotalSum(), target.getProgressNum(), target.getName()];

    // Кнопки пополнить - снять - закрыть окно
    var buttonAddSavings = modalBackGround.querySelector(".modal-add-saving"); // Кнопка "Пополнить"
    var buttonWDSavings = modalBackGround.querySelector(
    // Кнопка "Снять"
    ".modal-withdraw-savings");
    var buttonCloseModal = modalBackGround.querySelector(".modal-close"); // Кнопка "Закрыть модальное окно"
    buttonCloseModal.style.backgroundImage = "url(".concat(__webpack_require__(835), ")");

    // Состояние кнопок пополнить-снять при открытии модального окна
    function modalButtonCheck() {
      if (target.getTotalSum() === target.getSavedSum()) {
        buttonAddSavings.disabled = true;
        buttonWDSavings.disabled = false;
      } else {
        if (target.getSavedSum() === 0) {
          buttonWDSavings.disabled = true;
          buttonAddSavings.disabled = false;
        } else {
          buttonAddSavings.disabled = false;
          buttonWDSavings.disabled = false;
        }
      }
    }
    modalButtonCheck();

    // Обновление информации в модальном окне
    function updateTargetInfo(target) {
      inputSum.value = ""; // Обнуление инпута
      savedSumElement.textContent = target.getSavedSum().toLocaleString("ru-RU") + " ₽";
      diffSumElement.textContent = target.getDifferenceSum().toLocaleString("ru-RU") + " ₽";

      // Изменение стиля кнопки закрытия, если нажимались пополнить-снять
      buttonCloseModal.style.backgroundImage = "url(".concat(__webpack_require__(986), ")");

      // Состояние кнопок пополнить-снять при работе в модальном окне
      modalButtonCheck();

      // Обновление блоков, если до этого было 100%
      targetInfo.classList.remove("hidden");
      targetInfoVictory.innerHTML = "";

      // На выходе из функции обновленные значения сумм цели
      return savedSumModal = [target.getSavedSum(), target.getDifferenceSum(), target.getTotalSum(), target.getProgressNum(), target.getName()];
    }

    //Пополнение средств
    buttonAddSavings.onclick = function () {
      errorDisplay.textContent = "";
      var savingAmount = Number(inputSum.value);
      if (savingAmount < 0) {
        errorDisplay.textContent = "Сумма операции не может быть отрицательной";
      } else {
        if (target.additionalSavings(savingAmount)) {
          updateTargetInfo(target);
          return savedSumModal;
        } else {
          errorDisplay.textContent = "Превышение итоговой суммы цели";
        }
      }
    };

    //Снятие средств
    buttonWDSavings.onclick = function () {
      errorDisplay.textContent = "";
      var withdrawalAmount = Number(inputSum.value);
      if (withdrawalAmount < 0) {
        errorDisplay.textContent = "Сумма операции не может быть отрицательной";
      } else {
        if (target.withdrawSavings(withdrawalAmount)) {
          updateTargetInfo(target);
          return savedSumModal;
        } else {
          errorDisplay.textContent = "Недостаточно средств для снятия";
        }
      }
    };

    // Кнопка закрытия модального окна
    buttonCloseModal.onclick = function (target) {
      modalBackGround.classList.remove("modal-background");
      modalBackGround.innerHTML = "";
      savedSumText.textContent = "".concat(savedSumModal[0].toLocaleString("ru-RU"), " \u20BD \u0438\u0437 ").concat(savedSumModal[2].toLocaleString("ru-RU"), " \u20BD");
      differenceSumText.textContent = savedSumModal[1].toLocaleString("ru-RU") + " ₽";

      // Перезапись прогресс-бара после модального окна
      createProgressBar(savedSumModal[3]);

      // Отрабока 100% выполнения цели
      targetVictory(savedSumModal[3]);

      // Обновление данных в LocalStorage
      var listElement = targetsList.find(function (el) {
        return el.goal === savedSumModal[4];
      });
      listElement.currentAmount = savedSumModal[0];
      console.log(listElement.savedSum);
      localStorage.setItem("goals", JSON.stringify(targetsList));
    };
  };
}
;// CONCATENATED MODULE: ./src/target.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// Конструктор класса с методами для обработки входного массива
var Target = /*#__PURE__*/function () {
  function Target(name, category, totalSum, priority, startDate, dueDate, savedSum) {
    _classCallCheck(this, Target);
    this.name = name;
    this.category = category;
    this.totalSum = totalSum;
    this.priority = priority;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.savedSum = savedSum;
  }
  return _createClass(Target, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getImg",
    value: function getImg() {
      var categoryImg = this.category === "house" ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "car" ? "https://images.pexels.com/photos/18262220/pexels-photo-18262220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "equipment" ? "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "kids" ? "https://images.pexels.com/photos/8208262/pexels-photo-8208262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "education" ? "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "travel" ? "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : this.category === "shopping" ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : "https://images.pexels.com/photos/3393477/pexels-photo-3393477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      return categoryImg;
    }
  }, {
    key: "getCategory",
    value: function getCategory() {
      return this.category;
    }
  }, {
    key: "getTotalSum",
    value: function getTotalSum() {
      return this.totalSum;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.priority;
    }
  }, {
    key: "getDueDate",
    value: function getDueDate() {
      return new Date(this.dueDate).toLocaleDateString();
    }
  }, {
    key: "getStartDate",
    value: function getStartDate() {
      return new Date(this.dueDate).toLocaleDateString();
    }
  }, {
    key: "getDaysTillTargetEnd",
    value: function getDaysTillTargetEnd() {
      var currentDate = Date.now();
      var difference = Math.floor((Date.parse(this.dueDate) - currentDate) / 1000 / 3600 / 24) + 1;
      var ending = difference > 10 & difference < 20 ? " дней" : difference % 100 / 10 == 1 ? " дней" : difference % 10 == 1 ? " день" : difference % 10 == 2 ? " дня" : difference % 10 == 3 ? " дня" : difference % 10 == 4 ? " дня" : " дней";
      return difference + " " + ending;
    }
  }, {
    key: "getSavedSum",
    value: function getSavedSum() {
      return this.savedSum;
    }
  }, {
    key: "addSavings",
    value: function addSavings(addSumm) {
      return this.savedSum = this.savedSum + addSumm;
    }
  }, {
    key: "getDifferenceSum",
    value: function getDifferenceSum() {
      return this.totalSum - this.savedSum;
    }
  }, {
    key: "getProgressNum",
    value: function getProgressNum() {
      var percent = this.savedSum * 100 / this.totalSum;
      if (percent <= 99) {
        percent = Math.ceil(percent);
      } else {
        percent = Math.floor(percent);
      }
      return percent;
    }
  }, {
    key: "additionalSavings",
    value: function additionalSavings(amount) {
      if (amount <= this.totalSum - this.savedSum) {
        this.savedSum += amount;
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "withdrawSavings",
    value: function withdrawSavings(amount) {
      if (this.savedSum >= amount) {
        this.savedSum -= amount;
        return true;
      } else {
        return false;
      }
    }
  }]);
}(); // Отображение целей из Local storage при загрузке страницы
document.addEventListener("DOMContentLoaded", targetBtnUpd);
var targetsList = [];
function targetBtnUpd() {
  changeFormToTarget(); // "Список целей - страница" главная
  // JSON массив из Local storage -> массив для скрипта
  var targetsListJson = localStorage.getItem("goals");
  targetsList = targetsListJson ? JSON.parse(targetsListJson) : [];
  targetWrapper.innerHTML = "";
  emptyError.textContent = ""; // Ошибка-уведомление: пустой массив целей
  if (targetsList.length === 0) {
    emptyError.textContent = "Добавьте первую цель";
  } else {
    sortTargetList(); // Сортировка массива: по приоритету и дате окончания
    targetsList.forEach(function (target // Массив объектов -> массив классов
    ) {
      var targetElement = new Target(target.goal, target.category, Number(target.amount), Number(target.priority), target.creationDate, target.endDate, Number(target.currentAmount));
      createTargetCard(targetElement); // Создание HTML-карточек целей
    });
  }
}
// Сортировка массива для карточек - по приоритету, по дате окончания
function sortTargetList() {
  targetsList.sort(function (target1, target2) {
    return target1["dueDate"] < target2["dueDate"] ? 1 : -1;
  });
  targetsList.sort(function (target1, target2) {
    return target1["priority"] > target2["priority"] ? 1 : -1;
  });
}
// Контейнер под карточки целей и ошибка пустого массива
var targetWrapper = document.querySelector(".target_wrapper");
var emptyError = document.querySelector(".target_empty-error");
// Контейнер Прогресс-бар
var targetProgress = document.querySelector(".target_progress");

// Создание HTML-карточек
function createTargetCard(target) {
  var targetCard = document.createElement("div"); // Контейнер под карточку
  targetCard.classList.add("target_card");
  targetWrapper.append(targetCard);
  targetCard.innerHTML = "\n    <div class=\"target_title\">\n    <h2 class=\"target_name\">".concat(target.getName(), "</h2>\n    <button class=\"target_add_savings\"></button>\n    </div>\n    <div class=\"target_description\">\n    <img class=\"target_img\" src=\"").concat(target.getImg(), "\" alt=\"").concat(target.getCategory(), "\">\n    <div class=\"target_info\">\n    <div class=\"target_due-date\">\n    <p class=\"info-title\">\u041A\u043E\u043D\u0435\u0446 \u0441\u0431\u043E\u0440\u0430 \u0447\u0435\u0440\u0435\u0437:</p>\n    <p class=\"info-value\">").concat(target.getDaysTillTargetEnd(), "</p>\n    </div>\n    <div class=\"target_sum-rest\">\n    <p class=\"info-title\">\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0431\u0440\u0430\u0442\u044C:</p>\n    <p class=\"info-value target_card_diff\">").concat(target.getDifferenceSum().toLocaleString("ru-RU"), " \u20BD</p>\n    </div>\n    </div>\n    </div>\n    <div class=\"target_progress\">\n    <p>\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0446\u0435\u043B\u0438: <span class=\"target_card_saved\">").concat(target.getSavedSum().toLocaleString("ru-RU"), " \u20BD \u0438\u0437 ").concat(target.getTotalSum().toLocaleString("ru-RU"), " \u20BD</span></p>\n    <div class=\"progress-bar\">\n    <div class=\"progress-bar-inner\"></div>\n    </div>\n    </div>");

  // Создание прогресс-бара: внешний div, внутренний div, текстовый блок
  var progressBar = targetCard.querySelector(".progress-bar");
  var progressBarInner = targetCard.querySelector(".progress-bar-inner");
  var progressBarText = document.createElement("div");
  function createProgressBar(percent) {
    // Определение цвета прогресс-бара
    var progressColor = percent < 19 ? "#df2216" : percent >= 20 && percent < 79 ? "#b6cc2d" : percent >= 80 && percent < 100 ? "#50db3a" : "#009fdf";
    progressBarInner.style.background = progressColor;

    // Решение стилизации маленького значения процента
    if (percent > 5 || percent === 0) {
      progressBarInner.style.width = percent + "%";
      progressBarInner.style.borderRadius = "0.625rem";
    } else {
      progressBarInner.style.width = "4%";
      progressBarInner.style.borderRadius = "0.625rem 0 0 0.625rem";
    }

    // Определение местоположения значения процента
    progressBarText.textContent = percent + "%";
    progressBarText.classList.add("progress_bar_text");
    if (percent >= 20) {
      progressBarInner.append(progressBarText);
    } else {
      progressBar.append(progressBarText);
    }
  }
  createProgressBar(target.getProgressNum());

  // Стилизация 100%
  var targetInfo = targetCard.querySelector(".target_info");
  var target_description = targetCard.querySelector(".target_description");
  var targetInfoVictory = document.createElement("div");
  target_description.append(targetInfoVictory);
  function targetVictory(percent) {
    if (percent === 100) {
      targetInfo.classList.add("hidden");
      targetInfoVictory.innerHTML = "\n        <img class=\"target_victory\" src=\"".concat(__webpack_require__(277), "\" alt=\"\u0426\u0435\u043B\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430\">\n        <p class=\"info-value\">\u0426\u0435\u043B\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430</p>\n        ");
    }
  }
  targetVictory(target.getProgressNum());
  ModalWindow(target, targetCard, targetInfo, targetInfoVictory, createProgressBar, targetsList, targetVictory);
}

;// CONCATENATED MODULE: ./src/form.js

// Получаем форму
var form_form = document.getElementById("goalForm");

// Добавляем обработчик события 'submit' на форму
form_form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Получаем текущую дату и время
  var currentDate = new Date();
  // Получаем значение даты из формы
  var endDate = new Date(document.getElementById("endDate").value);
  var today = new Date(); // Получаем текущую дату

  // Проверяем, если выбранная дата меньше текущей, выводим сообщение об ошибке и не сохраняем данные
  if (endDate < today) {
    window.alert("Пожалуйста, выберите дату не ранее сегодняшнего дня.");
    return; // Прекращаем выполнение функции
  }

  // Получаем значения из остальных полей формы
  var goal = document.getElementById("goal").value;
  var category = document.getElementById("category").value;
  var amount = document.getElementById("amount").value;
  var priority = document.getElementById("priority").value;
  var currentAmount = document.getElementById("currentAmount").value;

  // Создаем объект для хранения данных текущей цели
  var goalData = {
    goal: goal,
    category: category,
    amount: amount,
    priority: priority,
    endDate: endDate,
    // Преобразуем дату в строку для сохранения
    currentAmount: currentAmount,
    creationDate: currentDate // Добавляем текущую дату и время создания цели
  };

  //проверяем пустой ли инпут `currentAmount`
  if (currentAmount === "") {
    //устанавливаем для объекта goalData его свойства currentAmount значение 0
    goalData.currentAmount = "0";
  }

  // Получаем сохраненные ранее цели из локального хранилища
  var savedGoals = JSON.parse(localStorage.getItem("goals")) || [];

  // Добавляем текущую цель к сохраненным целям
  savedGoals.push(goalData);

  // Сохраняем обновленный массив целей в локальное хранилище
  localStorage.setItem("goals", JSON.stringify(savedGoals));

  // Очищаем поля формы
  form_form.reset();
  targetBtnUpd();
});
var category_input = document.getElementById("category");
var amount_input = document.getElementById("amount");
var current_Amount = document.getElementById("currentAmount");
var p_amount = document.createElement("p");
var p_current = document.createElement("p");
var btn_save = document.getElementById("btn_save");
//проверка,чтобы отрицательного числа не было для суммы накопления
amount_input.addEventListener("change", function () {
  var amountValue = parseFloat(amount_input.value);
  if (amountValue < 0) {
    amount_input.after(p_amount); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить
    p_amount.classList.add("error");
    p_amount.textContent = "Введено отрицательное число, исправьте на положительное число";
    btn_save.disabled = true;
    document.getElementById("add").disabled = true;
  } else {
    //если введено полож-ое число, очищаем поле для ошибок и разблокируем кнопку
    p_amount.textContent = "";
    btn_save.disabled = false;
  }
});
//проверка,чтобы отрицательного числа не было для суммы пополнения
current_Amount.addEventListener("change", function () {
  var currentAmountValue = parseFloat(current_Amount.value);
  if (currentAmountValue < 0) {
    current_Amount.after(p_current); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить
    p_current.classList.add("error");
    p_current.textContent = "Введено отрицательное число, исправьте на положительное число";
    btn_save.disabled = true;
  } else if (currentAmountValue === "") {
    btn_save.disabled = false;
  } else {
    //если введено полож-ое число,очищаем поле для ошибок и разблокируем кнопку
    p_current.textContent = "";
    btn_save.disabled = false;
  }
});

//Получаем блок
var choosePicture = document.querySelector(".chooseWrapper");
//Добавляем обработчик событий кнопке с выбором картинки
category_input.addEventListener("change", function () {
  var category = document.getElementById("category").value;
  var selectedPicture = category === "house" ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "car" ? "https://images.pexels.com/photos/18262220/pexels-photo-18262220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "equipment" ? "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "kids" ? "https://images.pexels.com/photos/8208262/pexels-photo-8208262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "education" ? "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "travel" ? "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : category === "shopping" ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" //новая ссылка
  : "https://images.pexels.com/photos/3393477/pexels-photo-3393477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  choosePicture.style.backgroundImage = "url(\"".concat(selectedPicture, "\")");
  choosePicture.style.border = "none";
});
function formBtnUpd() {
  var btn_cancel = document.getElementById("btn_cancel");
  btn_cancel.addEventListener("click", function (evt) {
    evt.preventDefault();
    form_form.reset();
    targetBtnUpd();
  });
}
formBtnUpd();
;// CONCATENATED MODULE: ./src/index.js




})();

/******/ })()
;