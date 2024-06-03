document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // Example API endpoint

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(todos) {
            const todoContainer = document.getElementById('todo-container');
            todos.forEach(function(todo) {
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo-item');
                todoItem.innerHTML = `
                    <h3>${todo.title}</h3>
                    <p>Status: ${todo.completed ? 'Completed' : 'Not Completed'}</p>
                `;
                todoContainer.appendChild(todoItem);
            });
        })
        .catch(function(error) {
            console.error('Error fetching todos:', error);
        });
});
