import createTodoItemTemplate from "./components/todo_item.js";


const createTodoListTemplate = (todoItems) => {
    

    const todoItemsHTML = todoItems.map(item => createTodoItemTemplate(item)).join('');

    return `
        <li class="todo-list">
            ${todoItemsHTML}
        </li>
    `;
};
export default createTodoListTemplate;