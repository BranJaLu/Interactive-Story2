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
    Magic: { // need options text
        text: "You always wanted to learn how to use magic. While a bit strict, she is the most empathetic and also the youngest of the group. But this learning of magic is very complex and you will have to learn the basics for 8 months. Hope that you are prepared to use it properly."
    }

    Firearm: {
         text: "Wanting to be the hack and slash person, you asked the boastful expert that you are interested in that type of art. It will take a maximum of 6 months to complete."
    }

    Sword: {
        text: "These skills seem too complex so you decided to take the path that is much easier. Plus, the dwarf has a much more fun personality than the other two mentors. Your training under his hands will last for 5 months."
    }

   Test: {
       text: "Now that your training has been completed, you and a group of new recruits are now being tested on a monster that happens to be nearby."
     options: [["Guinea_Pig"," Experiment on a friend as a guinea pig."],["Try_Out","Use the ability on monster"]]
   } 

Guinea_Pig: {
    text: "“The frick’s wrong with you?” Jack, a friend you got to know during training, complained. Before you could say anything, the monster spotted you and obilatered everyone into sterner stuff."
    options: [["prolog", "restart"]]
}

Try_Out: {
    text: "Using a little trick you learned from training, you distracted the monster when the other recruits finished the monster off. “Now that’s what I’m talking about.” you then see a cave behind it"
    options: [["Hoard", "explore the cave"]]
}

   Hoard: {
       text: "After defeating the monster you find a hoard in a large cave that they were guarding that is now ripe for the taking."
       options: [["explore","explore side"]["LeaveCave"," don’t explore"]]
   }

   explore: {
       text: "Unfortunately you fell down a hole and are now separated from the group. Now you have to find a way out by yourself."
       options: [["Proceed1", "move forward"]]
   }

    Proceed1: {
       text: "Suddenly, you came across armored beings with red lights glowing from within their bodies. You recognize that they were the Destroyer’s elite troopers, the Hellers, thanks to descriptions from the group thanks to their previous. What should you do now?"
       options: [["Attack","Attack Head-on"],["Flee","Flee"],["Tunnel","Look for a way around"]]
   }

    Attack: {
        text: "Without thinking, you charged head-on into the horde. Only to be terminated by the Hellers easily. Better luck next time."
        options: [["prolog","restart"]]
    }

    Tunnel: {
       text: "There must be a way to escape. Quickly you spot a tunnel.  Should you go for it?"
       options: [["Fight","Decide to Fight Instead"],["Enter","Take the tunnel"]] 
   }

   Enter: {
       text: "Well this is better than this.” You started before running into it. The tunnel then closes behind you and now you’re all alone."
   }

   Artifict: {
       text: "You come across an artifact that appears to be over a million… not much older than that. Should you inspect it?"
       options: [["Touch","Touch It (end)"],["Don't Touch","Probably Not Worth It"]]
   }

   //need artifact effects

   Hellers: {
       text:"Suddenly, you came across armored beings with red lights glowing from within their bodies. You recognize that they were the Destroyer’s elite troopers, the Hellers, thanks to descriptions from the group thanks to their previous. What should you do now?"
       options: [["With Firearm","You picked Firearm"],["With Sword","You picked the sword"],["With Magic","You picked magic"]]
   }

   //need fight info

Proceed2: {
    text: "  You continued on deep into the cave. There’s a light ahead of you. Could this be the exit? "
    options: [["Investigate"]]
}

LeaveCave: {
    text: "After you leave the cave, you and the group continue to transverse the land until you run into a new danger. You see a group of average people being marched off by minions of the Destroyer. You now have a choice either to help them or follow them."
    options: [["Save Them","The groups choses to save them"],["Don't Save Them","You decided not to save them"]]
}

// continue here

Boss: {
    text: "…The Destroyer being itself. It lets out a defining roar that warns you that it’s better to make good decisions. What to do now?"
    options: [["Run Away","You run away in fear"],["Charge Head-On", "You charged head-on"],["Ready Up","You prepare for the inevitable fight."]]
}

Cilmax: {
    text: "……I can see how much your childhood was. Orphaned. Abandoned. Casted as an underdog……” the Destroyer monologues. “Actually my life was normal. First of all, my parents are alive and I am not an underdog.” you immetateildy pointed out. “Oh hang on for a minute.” the Destroyer said as it looked at a scroll again."
    
    '5 minutes later……'  
    
    "Well it appears that your friend Jack was the one who was supposed to meet me but that wasn't how it was supposed to go. But I’m not into that chosen one thing. Since you’re in Jack’s place, I have a deal for you instead."
    
    "And what is it?” you asked."
    
    "Do you wish for a world where everything is better, like not having to live in poverty while the rich enjoy a good lifestyle or…."
    
    'Later….'

    "Take my deal, and we will make the world a better place."
    options: [["Frick No"],["Accept"]]
}

Frick: {
text: "With his mysterious power, the Destroyer freezes time just as the group arrived. This leaves only you, Jack and the Destroyer unfroze by its eternal powers. “That’s better.” the Destroyer remarks. It then reveals the entire truth. The group that you had followed were a bunch of cultists who are planning to take over the world once they defeat the Destroyer and take his powers to control reality. Jack is not sure. Surely the Destroyer is bloating."
options: [["Believe"],["Don't Believe"]]
}

Believe: {
    ""
}

DisBelieve: {
text: "“You’re lying.” you said as you proceeded to unleash your ultimate abilities to the Destroyer while it was still in the middle of its speech. The Destroyer is no more."

"Woah. You actually defeated the Destroyer!” your friend Jack cheered. “The prochory stated that it should be me but you were the one that actually did it."

"The group congratulated you and with your new powers gained, you are now in charge of different realities. You are the…"
}

function updateStats() {
    statArea = getElementById("stats");
    statArea.innerHTML = gameData;
}

function gameOutput(event) {

    if (nameGate == false) {
        let textName = gameData['nameInput'].value;
        let output = document.GetElementById('output');
        player.name = textName;
        nameGate = true;
    }

    console.log();
    for (i=0; i < nextRoom.modifiers.length; i++) {

    }

    console.log(player);
}

gamePage.addEventListener('submit', gameOutput)


