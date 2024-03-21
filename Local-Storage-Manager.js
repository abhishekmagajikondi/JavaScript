// 7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.


function saveNoteToLocalStorage() {
    if (localStorage.getItem("note")) {
        let v = localStorage.getItem("note")
        document.write(v)
    } else {
        let note = prompt("Enter you note to store on the local storage of Firefox..")
        localStorage.setItem("note", note)
        document.write(note)
        alert("Your Note have been successfully saved in the local storage of the FireFox")
    }
}

saveNoteToLocalStorage()