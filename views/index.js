const createHomePageTemplate = () => {
    return(/*html*/`
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.js"></script>
                <title>Home Page</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple home page template.</p>
                <div class="todo-list">
                    <button hx-post="/clicked"
                        hx-trigger="click"
                        hx-swap="outerHTML">
                        Click Me!
                    </button>
                </div>
                <div class="add-todo-form">
                    <form>
                        <input type="text" name="title" placeholder="Add Chore" />
                        <button type="submit" hx-post="/todos" hx-target=".todo-list ul" hx-swap="beforeend">Add</button>
                    </form>
                </div>
            </body>
        </html>`
    );
};

export default createHomePageTemplate;
