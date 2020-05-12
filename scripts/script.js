const content = document.querySelector('.content');
const formElement = document.querySelector('.popup');
const closeButton = document.querySelector('.button_close');
const editButton = content.querySelector('.button_edit');
const saveButton = content.querySelector('.button_submit');
const nameInput = document.querySelector('.popup__name-field');
const occupationInput = document.querySelector('.popup__about-field');
const profileName = content.querySelector('.profile__name');
const profileOccupation = content.querySelector('.profile__occupation');
let newName;
let newOccupation;

function popupVisible () {
  formElement.classList.toggle('popup_closed');
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