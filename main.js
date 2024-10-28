const form = document.getElementById('form-agenda');
const nameInput = document.getElementById('nome-contato');
const numberInput = document.getElementById('numero-contato');
const favoriteCheckbox = document.getElementById('favorite-contact');
const contactTable = document.getElementById('contact-table').querySelector('tbody');
const totalContactSpan = document.querySelector('.numero-de-contatos');

let contactCount = 0;

form.addEventListener('submit', event => {
    event.preventDefault();

    addContactToTable(nameInput.value, numberInput.value, favoriteCheckbox.checked);

    form.reset();
});

function addContactToTable(name, number, isFavorite) {
    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td>${name}</td> <td>${number}</td> <td>${isFavorite ? `<img src="./imagens/favorito.png" alt="Favorito" class="favorite-icon">` : ''}</td>`;

    contactTable.appendChild(newRow);
    totalContactSpan.textContent = ++contactCount;
}