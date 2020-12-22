var elForm = document.querySelector(".js-form");
var elFormInput = document.querySelector(".js-form__input");
var elFormCheckbox = document.querySelector(".js-form__checkbox");
var elFormList = document.querySelector(".js-form__list");

var ToDolist = [];


elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elValue = elFormInput.value;
  var checked = elFormCheckbox.checked;

  if(ToDolist.includes(elValue)){
    alert('Bunaqasi borakan');
    elFormInput.value = '';
    return;
  }
  if (checked) {
    ToDolist.unshift(elValue);
  } else {
    ToDolist.push(elValue);
  }
  elFormList.innerHTML = "";
  elFormInput.value = "";
  for (var item of ToDolist) {

    var Item = document.createElement('li');
    Item.classList.add('form__list-item');
    elFormList.appendChild(Item);

    var ellLabel = document.createElement('label');
    Item.appendChild(ellLabel);
    ellLabel.classList.add('d-flex', 'align-items-center')

    var elInput = document.createElement('input');
    elInput.type = 'checkbox';
    elInput.name = 'checkbox';
    elInput.classList.add('sr-only', 'checkbox-input');
    ellLabel.appendChild(elInput);

    var InputSpan = document.createElement("span");
    InputSpan.classList.add('checkbox-button', 'mr-2');
    ellLabel.appendChild(InputSpan);

    var ResultSpan = document.createElement('span');
    ResultSpan.classList.add('span-result')
    ellLabel.appendChild(ResultSpan);
    ResultSpan.textContent = item;

  }


  elFormCheckbox.checked = false;

  elFormInput.focus();
});