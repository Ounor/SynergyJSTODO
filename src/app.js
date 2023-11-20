document.addEventListener("DOMContentLoaded", () => {
  loadNotes();
  console.log(11);
});
console.log(222211);

const addNote = () => {
  const noteInput = document.getElementById("note-input");
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Пожалуйста, введите текст заметки.");
    return;
  }

  const noteContainer = document.getElementById("notes-container");
  const noteElement = document.createElement("div");
  noteElement.className = "note";

  const noteActions = document.createElement("div");
  noteActions.className = "note-actions";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    noteContainer.removeChild(noteElement);
    saveNotes();
  };

  const editButton = document.createElement("button");
  editButton.innerHTML = "Редактировать";
  editButton.className = "edit-button";
  editButton.onclick = function () {
    const updatedText = prompt("Введите новый текст заметки:", noteText);
    if (updatedText !== null) {
      noteTextElement.textContent = updatedText;
      saveNotes();
    }
  };

  const noteTextElement = document.createElement("p");
  noteTextElement.textContent = noteText;

  noteActions.appendChild(deleteButton);
  noteActions.appendChild(editButton);

  noteElement.appendChild(noteTextElement);
  noteElement.appendChild(noteActions);

  noteContainer.appendChild(noteElement);
  noteInput.value = "";

  saveNotes();
};

function saveNotes() {
  const notes = [];
  const noteElements = document.querySelectorAll(".note p");

  noteElements.forEach((element) => {
    notes.push(element.textContent);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const notesContainer = document.getElementById("notes-container");
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  savedNotes.forEach((noteText) => {
    const noteElement = document.createElement("div");
    noteElement.className = "note";

    const noteActions = document.createElement("div");
    noteActions.className = "note-actions";

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Удалить";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
      notesContainer.removeChild(noteElement);
      saveNotes();
    };

    const editButton = document.createElement("button");
    editButton.innerHTML = "Редактировать";
    editButton.className = "edit-button";
    editButton.onclick = function () {
      const updatedText = prompt("Введите новый текст заметки:", noteText);
      if (updatedText !== null) {
        noteTextElement.textContent = updatedText;
        saveNotes();
      }
    };

    const noteTextElement = document.createElement("p");
    noteTextElement.textContent = noteText;

    noteActions.appendChild(deleteButton);
    noteActions.appendChild(editButton);

    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(noteActions);

    notesContainer.appendChild(noteElement);
  });
}
