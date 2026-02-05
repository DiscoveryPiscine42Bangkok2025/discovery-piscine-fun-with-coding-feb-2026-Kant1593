window.onload = function () {
    loadTodos();

    document.getElementById("newBtn").onclick = function () {
        let text = prompt("Enter a new TO DO:");
        if (text && text.trim() !== "") {
            addTodo(text.trim());
            saveTodos();
        }
    };
};


function addTodo(text) {
    const ftList = document.getElementById("ft_list");

    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = function () {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    ftList.prepend(div);
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("todos="));

    if (!cookie) return;

    const todos = JSON.parse(decodeURIComponent(cookie.split("=")[1]));

    todos.forEach(text => addTodo(text));
}