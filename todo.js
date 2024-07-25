document.addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let ul = document.getElementById('ul');

    // Add new item to the list
    btn.addEventListener('click', () => {
        let inputValue = text.value.trim();

        if (inputValue === '') {
            alert('Enter your text');
        } else {
            let li = document.createElement('li');
            li.textContent = inputValue + ' ';

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit';
            editButton.addEventListener('click', () => edit(li));

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => del(li));

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            ul.appendChild(li);

            text.value = '';
        }
    });

    // Remove list item
    function del(li) {
        li.remove();
    }

    // Edit list item
    function edit(li) {
        let inputValue = prompt("Edit your text:", li.firstChild.nodeValue.trim());
        if (inputValue !== null && inputValue.trim() !== '') {
            li.firstChild.nodeValue = inputValue.trim() + ' ';
        }
    }
});
