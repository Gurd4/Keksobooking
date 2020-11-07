'use strict';

(function () {
  const map = document.querySelector(`.map`);
  const mapPins = document.querySelector(`.map__pins`);
  const mapPinMain = document.querySelector(`.map__pin--main`);
  const adForm = document.querySelector(`.ad-form`);
  const adFormElements = adForm.querySelectorAll(`.ad-form__element, .ad-form-header`);
  const addressForm = adForm.querySelector(`#address`);
  const titleForm = adForm.querySelector(`#title`);
  const typeForm = adForm.querySelector(`#type`);
  const priceForm = adForm.querySelector(`#price`);
  const roomNumberForm = adForm.querySelector(`#room_number`);
  const capacityForm = adForm.querySelector(`#capacity`);
  const timeInForm = adForm.querySelector(`#timein`);
  const timeOutForm = adForm.querySelector(`#timeout`);
  const avatarInputForm = adForm.querySelector(`#avatar`);
  const imagesInputForm = adForm.querySelector(`#images`);
  const mapFilters = document.querySelector(`.map__filters-container`);
  const mapFiltersElements = mapFilters.querySelectorAll(`.map__filter, .map__features`);

  window.elements = {
    map,
    mapPins,
    mapPinMain,
    adForm,
    adFormElements,
    addressForm,
    titleForm,
    typeForm,
    priceForm,
    roomNumberForm,
    capacityForm,
    timeInForm,
    timeOutForm,
    avatarInputForm,
    imagesInputForm,
    mapFilters,
    mapFiltersElements
  };
})();