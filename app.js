const input = document.querySelector(".driver .input");

const submit = document.querySelector(".driver .new");

const todolist = document.querySelector(".todolist .todo");

const remdone = document.querySelector(".remdone");

function btnRole(btn) {
    if(btn.classList.contains('del')) {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        })
    } else if (btn.classList.contains('done')) {
        btn.addEventListener('click', () => {
            if(btn.innerText === "Done") {
                btn.parentElement.classList.add("finished");
                let task = btn.parentElement.querySelector('.task');
                task.classList.add('linethr');
                btn.innerText = "Undo";
            } else if (btn.innerText === "Undo"){
                btn.parentElement.classList.remove("finished");
                let task = btn.parentElement.querySelector('.task');
                task.classList.remove('linethr');
                btn.innerText = "Done";
            }
        })
    }
}

submit.addEventListener('click', () => {
    if(input.value !== "") {
        const li = document.createElement('li');
        const  del = document.createElement('button');
        const span = document.createElement('span');
        span.innerText = input.value;
        span.classList.add('task');
        del.innerText = "delete";
        del.classList.add('del');
        const done = document.createElement('button');
        done.innerText = "Done";
        done.classList.add('done');
        li.append(span);
        li.append(done);
        li.append(del);
        li.classList.add('cont');
        btnRole(del);
        btnRole(done);
        todolist.append(li);
        input.value = "";
    }
})

remdone.addEventListener('click', () => {
    const lis = document.querySelectorAll("li");
    for(let li of lis) {
        if(li.classList.contains('finished')) {
            console.log(li.classList);
            li.remove();
        }
    }
})
