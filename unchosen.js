window.onload = function(){ //makes sure the javascript load before it is used
}
let player = {
    name: "Player", //Name of the player will be used in the story.
    playing: 0, //0 means that the game is ongoing an other numbers will bring up different endings.
    options: [] //This gives the player to pick important choices on their adventure.
}

var story = {
    prolog: {
        text:"In a world where steampunk and fantasy exist in one world, SPAF. It was a normal day in a rural village where you are doing your usual business."},
        options:[["join", "join the group"], ["disregard", "Disregard the fools' announcements"], ["stay", "Stick with everyday life"]]
}
    join: {
        text: "quickly grow to like the group and decide to acompany them on their voyage"
        options:[["train", "train with the group"]]
    }
    disregard: {
        text: "group shows up later and attacks town but heros are still recruiting so still around and help. see that they intend to help and decide to join them"
        options: [["train", "train with the group"]]
    }
    stay: {
        text: "Group had someone else join them so they left and after hearing what happened show up afterwards to help"
        options: [["train", "train with the group"]]
    }
    train: {
        text: "The group offers to train the hero in a specific skill to prepare them for the fight."
        options: [["magic", "learn magic"], ["sword", "learn to swordfight"], ["gun", "learn to use a gun"]]
    }