let notes = document.querySelectorAll('.individual-score-div')

// Apply orange backgound to selected note when clicked
notes.forEach(div => div.addEventListener('click', turnItOrange))

function turnItOrange(e){
    //remove any previous selected status
    notes.forEach(div => div.classList.remove('individual-score-div-selected'))

    const div = e.target
    div.classList.toggle('individual-score-div-selected')
}



//Show Thank You message after a Sumbit click
const submitBtn = document.querySelector('.submit-button-div')
submitBtn.addEventListener('click', submitClicked)

function submitClicked(e){
    const selectedNote = Array.from(notes).filter(div => div.classList.contains('individual-score-div-selected'))

    if(selectedNote.length === 0){
        alert("Please select a note!")
        return
    }

    //Grab the selected note
    const selectedNoteVal = selectedNote[0].children[0].innerText

    //Inject the slected note
    const selectedNoteSpan = document.querySelector('.note-selected-span')
    selectedNoteSpan.innerText = selectedNoteVal

    //Switch rating state to thank you state
    document.querySelector('.main-rating-state-start-content-section').classList.toggle('hidden')
    document.querySelector('.thank-you-content-section').classList.toggle('hidden')
}