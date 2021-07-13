let boolean = false;
let list = [];
let data;
while (!boolean) {
    let input = prompt("What do u want to do?");
    if (input == "quit") {
        boolean = true;
        console.log("Exited the App");
        break;
    }
    else if (input == "new") {
        data = prompt("what to add?");
        list.push(data);
    }
    else if (input == "list") {
        for (let items of list) {
            console.log(items);
        }
    }
    else if (input == "delete") {
        let itemToDel = parseInt(prompt("index of item u wanna delete"));
        list.splice(itemToDel, 1);
        console.log("The item is deleted");

    }
}
