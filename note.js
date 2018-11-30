const fs = require('fs');
const NOTES_FILE = 'data.json';

    // display all the notes in json file
    const listnotes = () => {
        
        let notes = [];
        notesString = fs.readFileSync(NOTES_FILE);
        notes = JSON.parse(notesString);
        notes.forEach(note => {
            console.log(`Title: ${note.title} | Body: ${note.body}`);
            console.log('---------------------------');
        })
    }
        // Add a note to a json file
 const addnote = (title, body) => {
    if(!title||!body)
    { console.log('enter a title and body') }
    else{
    let notes = [];
    notesString = fs.readFileSync(NOTES_FILE);
    notes = JSON.parse(notesString);
    
    let already =  notes.filter(note => note.title === title);
    if (already.length === 0) {
        notes.push({
            title,
            body
        });
        let notesString = JSON.stringify(notes);
       fs.writeFileSync(NOTES_FILE, notesString);
    } else {
        console.log(`The note ${title} is duplicated`);
   }
    console.log('Title : ' + title)
    console.log('Body : ' + body)}
}
// Read a specific note
const readsepnote = (title) => {
    if(!title)
    { console.log('enter a title') }
    else{
    let notes = [];
    notesString = fs.readFileSync(NOTES_FILE);
    notes = JSON.parse(notesString);
    let exist =  notes.filter(note => note.title === title);
    if (exist.length === 0) {
        console.log('Note not founded')
    } else {
        exist.forEach(note => {
            console.log('Note found')
            console.log('-----')
            console.log(`Title: ${note.title} | Body: ${note.body}`);
            console.log('---------------------------');
        })
       
       
   }}
}
//Remove a specific note
const removenote = (title) => {
    if(!title)
    { console.log('enter a title') }
    else{
        notes = fs.readFileSync(NOTES_FILE);
         allnotes = JSON.parse(notes)
        let clearedNotes = allnotes.filter(note => note.title !== title);
        let notesString = JSON.stringify(clearedNotes);
        fs.writeFileSync(NOTES_FILE, notesString);
        console.log(`Note ${title} was removed ...`);
        console.log('Title : ' + title)
    } 
   }
//export methods
    module.exports = {
        
        listnotes,
        addnote,
        readsepnote,
        removenote
    }