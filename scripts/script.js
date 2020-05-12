let content = document.querySelector('.content');
let formElement = document.querySelector('.popup');
let closeButton = document.querySelector('.button_close');
let editButton = content.querySelector('.button_edit');
let saveButton = content.querySelector('.button_submit');
let nameInput = document.querySelector('.popup__name-field');
let occupationInput = document.querySelector('.popup__about-field');
let profileName = content.querySelector('.profile__name');
let profileOccupation = content.querySelector('.profile__occupation');
let newName;
let newOccupation;

function popupVisible () {
  formElement.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    newName = nameInput.value;
    newOccupation = occupationInput.value;

    profileName.textContent = newName;
    profileOccupation.textContent = newOccupation;

    popupVisible();
}

editButton.addEventListener('click', popupVisible);
closeButton.addEventListener('click', popupVisible);
formElement.addEventListener('submit', formSubmitHandler);