// declarations
// photo-grid images/cards
const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const content = document.querySelector('.content');
const form = document.querySelector('.popup');
// buttons
const closeButton = document.querySelector('.button_close');
const editButton = document.querySelector('.button_edit');
const saveButton = editButton.querySelector('.button_submit');
// profile edit form
const editForm = document.querySelector('.popup__form');
const nameInput = editForm.querySelector('.popup__name');
const occupationInput = editForm.querySelector('.popup__occupation');
const newName = document.querySelector('.profile__name');
const newOccupation = document.querySelector('.profile__occupation');
//card template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.photo-grid__item');
const listWrapper = document.querySelector('.photo-grid__list');



// toggle for edit form
const popupVisible = () => form.classList.toggle('popup_visible');

editButton.addEventListener('click', popupVisible);
closeButton.addEventListener('click', popupVisible);

editForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    newName.textContent = nameInput.value;
    newOccupation.textContent = occupationInput.value;

    popupVisible();
});

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-grid__pic');
  const deleteButton = cardElement.querySelector('.button_trash');
  const cardTitle = cardElement.querySelector('.photo-grid__title');
  const likeButton = cardElement.querySelector('.button_like');

  cardTitle.textContent = card.name;
  cardImage.style.backgroundImage = `url('${card.link}')`;

  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('button_like_active');
  })

  deleteButton.addEventListener('click', () => {
    const listItem = deleteButton.closest('.photo-grid__item');
    listItem.remove();
  })

  return cardElement;

}

initialCards.forEach((card) => {
  listWrapper.prepend(createCard(card));
})

initialCards.forEach((card) => {
  renderCard(card);
});