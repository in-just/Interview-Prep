let magazine1 = "give me one grand tonight tonight";
let magazine = magazine1.split(' ');
let note1 = "give one grand asdf";
let note = note1.split(' ');

function checkMagazine(magazine, note) {
    let tracker = {};
    for (let i = 0; i < magazine.length; ++i) {
        if(!tracker[magazine[i]]) {
            tracker[magazine[i]] = 0;
        } 
        ++tracker[magazine[i]];
    }
    for (let i = 0; i < note.length; ++i) {
        if(tracker[note[i]]) {
            tracker[note[i]]--;
        } else {
            console.log("No");
            return;
        }
    }
    console.log("yes");
}

checkMagazine(magazine, note);