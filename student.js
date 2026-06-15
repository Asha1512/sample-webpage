function addStudent() {

    let studentId =
        document.getElementById("studentId").value;

    let name =
        document.getElementById("name").value;

    let age =
        document.getElementById("age").value;

    let course =
        document.getElementById("course").value;

    if (studentId === "" ||
        name === "" ||
        age === "" ||
        course === "") {

        alert("Please fill all fields");
        return;
    }

    let card =
        document.createElement("div");

    card.classList.add("student-card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>ID: ${studentId}</p>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
        <button class="delete-btn">
            Delete
        </button>
    `;

    let deleteBtn =
        card.querySelector(".delete-btn");

    deleteBtn.onclick = function () {

        card.remove();

        document.getElementById("count").innerText =
            document.getElementById("studentList").children.length;
    };

    document
        .getElementById("studentList")
        .appendChild(card);

    document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;

    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}