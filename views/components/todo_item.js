const createTodoItemTemplate = (item) => {
    return `
        <div class="todo-item">
            <input 
                type="checkbox" 
                class="todo-checkbox" ${item.status === 'complete' ? 'checked' : ''} 
                hx-post="/toggle-status"
                hx-include="[name='id']"
                hx-trigger="change"
                hx-target=".todo-list"
                hx-swap="outerHTML"
            />
            <input type="hidden" name="id" value="${item.id}"
                />
            <span class="todo-title">${item.title}</span>
            <sopan class="todo-status">[${item.status}]</span>
        </div>
    `;
};

export default createTodoItemTemplate;