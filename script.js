//implement use of local storage

const body = document.body;

let tasks = document.querySelector(".task");

function createTask() {
	let e = document.createElement("li");

	let inpField = document.createElement("input");

	inpField.classList.add("taskName");

	e.append(inpField);

	let del = document.createElement("button"),
		edit = document.createElement("button"),
		ok = document.createElement("button"),
		removeTask = document.createElement("button");

	e.append(del, edit, ok, removeTask);
	var buttons = [del, edit, ok, removeTask];
	buttons.forEach((e) => {
		e.classList.add("action");
	});

	// del.classList.add("action");

	// edit.classList.add("action");

	// ok.classList.add("action");

	// removeTask.classList.add("action");

	del.innerText = "Remove";

	edit.innerText = "Edit";

	ok.innerText = "save";

	removeTask.innerText = "Delete Task Field";

	ok.addEventListener("click", () => {
		if (inpField.value == "") {
			console.log("empty");
			inpField.placeholder = "enter something";

			setTimeout(() => {
				inpField.placeholder = "";
			}, 1000);
			return;
		}

		inpField.readOnly = true;
	});

	del.addEventListener("click", () => {
		inpField.placeholder = "enter something";

		setTimeout(() => {
			inpField.placeholder = "";
		}, 2000);
		inpField.value = "";
		inpField.readOnly = false;
	});

	edit.addEventListener("click", () => {
		inpField.readOnly = false;
	});

	removeTask.addEventListener("click", () => {
		e.remove();
	});

	tasks.appendChild(e);
}
