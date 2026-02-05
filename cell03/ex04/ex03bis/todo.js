$(document).ready(function () {

    loadTodos();

    $("#newBtn").on("click", function () {
        let text = prompt("Enter a new TO DO:");
        if (text && text.trim() !== "") {
            addTodo(text.trim());
            saveTodos();
        }
    });

});

function addTodo(text) {
    const $div = $("<div>")
        .addClass("todo")
        .text(text)
        .on("click", function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

    $("#ft_list").prepend($div);
}

function saveTodos() {
    const todos = [];

    $(".todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find(row => row.startsWith("todos="));

    if (!cookie) return;

    const todos = JSON.parse(
        decodeURIComponent(cookie.split("=")[1])
    );

    todos.forEach(text => addTodo(text));
}