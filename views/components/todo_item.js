const createTodoItemTemplate = (item) => {
    return /*html*/`
        <li>
            <div 
                hx-post="/toggle-status"
                hx-include="[name='id']"
                hx-trigger="change"
                hx-target=".todo-list"
                hx-swap="outerHTML"
                value="${item.id}"
            >

                <h3 >${item.title}</h3>
                <p >${item.status}</p>
            </div>
            <button 
                hx-delete="/todos/${item.id}" 
                hx-swap="outerHTML" 
                hx-target="closest li">
                Delete
            </button>
        </li>
    `;
};

export default createTodoItemTemplate;