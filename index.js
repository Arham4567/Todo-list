import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let options = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Enter your  todo option",
            choices: ["Add", "Remove", "Update", "View", "Exit"],
        },
    ]);
    //ADD
    if (options.select === "Add") {
        let toAdd = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "Add Your todo",
                validate: function (input) {
                    if (input.trim().length === 0) {
                        return "please enter a todo";
                    }
                    return true;
                },
            },
        ]);
        todo.push(toAdd.addTodo);
        console.log(todo);
    }
    //REMOVE
    if (options.select === "Remove") {
        let deleteTodo = await inquirer.prompt({
            name: "delete",
            type: "list",
            message: "Delete items in your todo list",
            choices: todo.map((item) => item),
        });
        let newTodos = todo.filter((item) => item !== deleteTodo.delete);
        todo = [...newTodos];
        console.log(todo);
    }
    //UPDATE
    if (options.select === "Update") {
        let updateTodo = await inquirer.prompt({
            name: "updateTodo",
            type: "list",
            message: "Update items in your todo list",
            choices: todo.map((item) => item),
        });
        let toAdd = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "Add Your todo",
            },
        ]);
        let newTodo = todo.filter((item) => item !== updateTodo.updateTodo);
        todo = [...newTodo, toAdd.addTodo];
        console.log(todo);
    }
    //VIEW
    if (options.select === "View") {
        console.log("******TODO LIST******");
        console.log(todo);
    }
    if (options.select === "Exit") {
        condition = false;
        console.log("Thank you for using our todo app");
    }
}
console.log(todo);
