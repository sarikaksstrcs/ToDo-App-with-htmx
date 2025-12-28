const createHomePageTemplate = () => {
    return(
        `<html lang="en">
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
            <div id="parent-div">
                <button hx-post="/clicked"
                    hx-trigger="click"
                    hx-target="#parent-div"
                    hx-swap="outerHTML">
                    Click Me!
                </button>
            </div>
        </body>
        </html>`
    );
};

export default createHomePageTemplate;
