let addBtn = document.getElementById("add");
let append = document.getElementById("tBody");
let name1 = document.getElementById("inputEmail3");
let author = document.getElementById("author");
let inputs = document.querySelectorAll(".form-check-input");
let form = document.getElementById("form");
let alert = document.getElementById("alert");
function addBook() {
	inputs.forEach((input) => {
		if (input.checked) {
			type = input.nextElementSibling.innerHTML.trim();
		}
	});
	append.innerHTML += `
	<tr>
		<td>${name1.value}</td>
		<td>${author.value}</td>
		<td>${type}</td>

	</tr>`;
	alert.innerHTML = `	<div class="alert alert-success alert-dismissible fade show" role="alert">
		<strong>Success!</strong>
		You Added A Book.
		<button
			type="button"
			class="btn-close"
			data-bs-dismiss="alert"
			aria-label="Close"
		></button>
	</div>`;
	if (name1.value == "" || author.value == "") {
		alert.innerHTML = `	<div class="alert alert-danger alert-dismissible fade show" role="alert">
			<strong>Error!</strong>
			Please Enter Name And Author Correctly.
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>`;

		append.innerHTML = "";
	}
	form.reset();
}

addBtn.addEventListener("click", addBook);
