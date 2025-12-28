const createTodoItemTemplate = (item) => {
    return /*html*/`
        <li hx-put="/todos/${item.id}" hx-target="closest li" hx-swap="outerHTML">
            <div >
                <h3 ${item.status === 'complete' ? 'style="text-decoration: line-through;"': ''}>${item.title}</h3>
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