const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', addItem);

function addItem() {
  const name = itemInput.value.trim();
  if (!name) return;

  const li = createListItem(name, false);
  itemList.appendChild(li);
  saveList();
  itemInput.value = '';
  itemInput.focus();
}

function createListItem(name, done) {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.textContent = name;
  span.style.cursor = 'pointer';
  if (done) span.classList.add('text-decoration-line-through');
  span.addEventListener('click', function () {
    span.classList.toggle('text-decoration-line-through');
    saveList();
  });

  const button = document.createElement('button');
  button.textContent = '×';
  button.className = 'btn btn-sm btn-outline-danger';
  button.addEventListener('click', function () {
    itemList.removeChild(li);
    saveList();
  });

  li.appendChild(span);
  li.appendChild(button);
  return li;
}

function saveList() {
  const items = [];
  document.querySelectorAll('#itemList li span').forEach(function (span) {
    items.push({
      name: span.textContent,
      done: span.classList.contains('text-decoration-line-through')
    });
  });
  localStorage.setItem('shoppingListItems', JSON.stringify(items));
}

function loadList() {
  const stored = localStorage.getItem('shoppingListItems');
  if (!stored) return;
  const items = JSON.parse(stored);
  items.forEach(function ({ name, done }) {
    const li = createListItem(name, done);
    itemList.appendChild(li);
  });
}

loadList();