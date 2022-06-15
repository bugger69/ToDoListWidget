const input = document.querySelector(".driver .input");

const submit = document.querySelector(".driver .new");

const todolist = document.querySelector(".todolist .todo");

function btnRole(btn) {
    if(btn.classList.contains('del')) {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        })
    } else if (btn.classList.contains('done')) {
        btn.addEventListener('click', () => {
            if(btn.innerText === "Done") {
                btn.parentElement.classList.add('linethr');
                btn.innerText = "Undo";
            } else if (btn.innerText === "Undo"){
                btn.parentElement.classList.remove('linethr');
                btn.innerText = "Done";
            }
        })
    }
}

submit.addEventListener('click', () => {
    const li = document.createElement('li');
    const  del = document.createElement('button');
    del.innerText = "delete";
    del.classList.add('del');
    const done = document.createElement('button');
    done.innerText = "Done";
    done.classList.add('done');
    li.append(input.value);
    li.append(done);
    li.append(del);
    btnRole(del);
    btnRole(done);
    todolist.append(li);
    input.value = "";
})
