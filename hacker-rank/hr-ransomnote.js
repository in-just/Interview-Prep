let magazine = "give me one grand today night";
let magazine1 = magazine.split(' ');
let note = "give one grand today";
let note1 = note.split(' ');

function checkMagazine(magazine, note) {
    let tracker = {};
    // this stores the words in magazine, and will add +1 to tracker
    for (let i = 0; i < magazine.length; i++) {
        if(!tracker[magazine[i]]) {
            tracker[magazine[i]] = 0;
        }
        tracker[magazine[i]]++;
    }
    console.log(tracker);

    // looks to see in hashmap tracker if note[i] object is in there, otherwise prints no right away
    for (let i = 0; i < note.length; i++) {
        if(tracker[note[i]]) {
            tracker[note[i]]--;
        } else {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
    console.log(tracker);
}

checkMagazine(magazine1, note1);