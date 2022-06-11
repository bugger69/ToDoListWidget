const input = document.querySelector(".driver .input");

const submit = document.querySelector(".driver .new");

const todolist = document.querySelector(".todolist .todo");

submit.addEventListener('click', () => {
    const li = document.createElement('li');
    const  del = document.createElement('button');
    del.innerText = "delete";
    li.append(input.value);
    li.append(del);
    todolist.append(li);
})
