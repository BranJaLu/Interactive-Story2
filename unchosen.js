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
    Magic: {
        text: "You always wanted to learn how to use magic. While a bit strict, she is the most empathetic and also the youngest of the group. But this learning of magic is very complex and you will have to learn the basics for 8 months. Hope that you are prepared to use it properly."
    }

    Firearm: {
         text: "Wanting to be the hack and slash person, you asked the boastful expert that you are interested in that type of art. It’ll take a maximum of 6 months to complete."
    }

    Sword: {
        text: "These skills seem too complex so you decided to take the path that is much easier. Plus, the dwarf has a much more fun personality than the other two mentors. Your training under his hands will last for 5 months."
    }

   Test: {
       text: ""
       options: [[""],[""],[""]]
   } 

   Hoard: {
       text: ""
       options: [[""],[""],[""]]
   }

   Hole: {
       text: ""
   }

   Proceed1: {
       text: ""
       options: [[""],[""],[""]]
   }

   Tunnel: {
       text: ""
       options: [[""],[""],[""]] 
   }

   Enter: {
       text: "Well this is better than this.” You started before running into it. The tunnel then closes behind you and now you’re all alone."
   }

   Artifict: {
       text: ""
       options: [[""],[""],[""]]
   }

   Hellers: {
       text:""
       options: [[""],[""],[""]]
   }

Proceed2: {
    text: ""
    options: [["Investigate"]]
}

LeaveCave: {
    text: ""
    options: [[""],[""],[""]]
}

Boss: {
    text: ""
    options: [[""],[""],[""],[""]]
}

Ending: {
    text: ""
    options: [[""],[""],[""]]
}





