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
        options:[["join", "join the group"], ["Disregard", "Disregard the fools' announcements"], ["stay", "Stick with everyday life"]]
}
