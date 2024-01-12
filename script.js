const body = document.body;
let items = document.querySelector(".task");

//console.log(items.firstElementChild);
//const createTask = document.createElement("button");
//createTask.innerText = "click me to add task";
//body.appendChild(createTask);

function createTask() {
	//create a list element
	let e = document.createElement("li");
	//add a input field in it
	e.appendChild(document.createElement("input"));
	//create and append two buttons
	let del = document.createElement("button"),
		edit = document.createElement("button"),
		ok = document.createElement("button");

	e.append(del, edit, ok);

	del.innerText = "Remove";
	edit.innerText = "Edit";
	ok.innerHTML = "&#x2713;";

	ok.addEventListener("click", () => {
		e.querySelector("input").readOnly = true;
	});

	del.addEventListener("click", () => {
		e.querySelector("input").placeholder = "enter something";
		e.querySelector("input").value = "";
		e.querySelector("input").readOnly = false;
	});

	edit.addEventListener("click", () => {
		e.querySelector("input").readOnly = false;
	});

	items.appendChild(e);
}
