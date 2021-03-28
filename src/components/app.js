import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos();

// Search todos
document.querySelector('#search-todo-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderTodos();
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = e.target.elements.toDo.value.trim();

    if (text.length > 0) {
        createTodo(text)
        renderTodos();
        e.target.elements.toDo.value = '';
    }
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    console.log('hide')
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos();
});

window.addEventListener('storage', e => {
    if (e.key === 'todos') {
        loadTodos();
        renderTodos();
    }
})
