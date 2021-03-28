import '../styles/styles.css';
import icon from '../assets/img/favicon.png';

const element = (type, className = null, tag = null,) => {
    const el = document.createElement(type);
    el.classList.add(className);
    el.innerHTML = tag;
    if (className === null) {
        el.removeAttribute('class');
    }

    return el;
}

const linkComponent = () => {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = icon;

    return newLink;
}

const headerComponent = () => {
    const header = element('header', 'header');
    
    const container = element('div', 'container');
    header.appendChild(container);

    const h1 = element('h1', 'header__title', 'To-do App');
    container.appendChild(h1);

    const h2 = element('h2', 'header__subtitle', 'What do you need to do?');
    container.appendChild(h2);

    return header;
}

const actionsComponent = () => {

    const actions = element('div', 'actions');

    const actions_container = element('div', 'actions__container');
    actions.appendChild(actions_container);

    // Input 
    const input = element('input', 'input');
    input.id = 'search-todo-text';
    input.placeholder = 'Search todos..';
    input.type = 'text';
    actions_container.appendChild(input);

    // Label
    const label = element('label', 'checkbox');
    actions_container.appendChild(label);

    // Checkbox
    const checkbox = element('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'hide-completed';
    label.appendChild(checkbox);
    
    const checkboxTag = document.createElement('span');
    checkboxTag.innerHTML = 'Hide Completed';
    label.appendChild(checkboxTag);

    return actions;
}

const containerComponent = () => {
    const container = element('div', 'container')

    const todos = element('div');
    todos.id = 'todos';
    container.appendChild(todos);

    // Form
    const form = element('form');
    form.id = 'new-todo';
    container.appendChild(form);

    // Input
    const input = element('input', 'input');
    input.id = 'todo-input';
    input.name = 'toDo';
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = 'Enter todo...';
    form.appendChild(input);

    // Button
    const btn = element('button', 'button', 'Add todo');
    btn.id = 'todos-btn';
    form.appendChild(btn);
    
    return container;
}

const renderPage = () => {
    document.head.appendChild(linkComponent());
    document.body.appendChild(headerComponent());
    document.body.appendChild(actionsComponent());
    document.body.appendChild(containerComponent());
}

// Render main page on load
window.addEventListener('load', renderPage());








