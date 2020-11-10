'use strict';

(function () {
  const ENTER_KEY = window.consts.ENTER_KEY;

  const map = window.elements.map;
  const mapPinMain = window.elements.mapPinMain;
  const adForm = window.elements.adForm;
  const adFormElements = window.elements.adFormElements;
  const mapFiltersElements = window.elements.mapFiltersElements;
  const setAddress = window.form.setAddress;
  const addAttribute = window.utils.addAttribute;
  const removeAttribute = window.utils.removeAttribute;
  const mainPinMove = window.map.mainPinMove;
  const load = window.load.load;
  const appendPins = window.map.appendPins;
  const removePins = window.map.removePins;

  function disablePage() {
    map.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);
    addAttribute(adFormElements, `disabled`);
    addAttribute(mapFiltersElements, `disabled`);
    removePins();

    const card = document.querySelector(`.map__card`);
    if (card) {
      card.remove();
    }

    setAddress(false);

    mapPinMain.addEventListener(`mousedown`, clickStartPage);
    mapPinMain.addEventListener(`keydown`, clickStartPage);
  }

  function activatePage() {
    load(appendPins, errorHandler);

    map.classList.remove(`map--faded`);
    adForm.classList.remove(`ad-form--disabled`);
    removeAttribute(adFormElements, `disabled`);
    removeAttribute(mapFiltersElements, `disabled`);

    mapPinMain.removeEventListener(`mousedown`, clickStartPage);
    mapPinMain.removeEventListener(`keydown`, clickStartPage);

    setAddress(true);

    mapPinMain.addEventListener(`mousedown`, mainPinMove);
  }

  function clickStartPage(evt) {
    if (evt.button === 0 || evt.key === ENTER_KEY) {
      evt.preventDefault();
      activatePage();
    }
  }

  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: #f0f0ea; vertical-align: middle`;
    node.style.position = `absolute`;
    node.style.width = `80%`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.top = `30px`;
    node.style.fontSize = `30px`;

    node.textContent = `${errorMessage}.
    Укажите местоположение вашего объявления без соседних`;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.activatePage = {
    disablePage
  };
})();
