import createTodoItemTemplate from "./components/todo_item.js";


const createTodoListTemplate = (todoItems) => {
    

    const todoItemsHTML = todoItems.map(item => createTodoItemTemplate(item)).join('');

    return /*html*/`
        <ul class="todo-list">
            ${todoItemsHTML}
        </ul>
    `;
};
export default createTodoListTemplate;