window.onload = function () { //makes sure the javascript load before it is used

}

 //This gives the player to pick important choices on their adventure.


var story = {
    prolog: {
        text: "In a world where steampunk and fantasy exist in one world, SPAF. It was a normal day in a rural village where you are doing your usual business. As you go about your daily routine a group of adventurers arrives at your town. They stated that the Destroyer has returned and has plans to conquer the entire planet with his multi-dimensional army. They need new members to join their group whether they like to or be forced against their will.",
        options: [["join", "join the group"], ["disregard", "Disregard the fools' announcements"], ["stay", "Stick with everyday life"]]
    },
    join: {
        text: "quickly grow to like the group and decide to acompany them on their voyage",
        options: [["train", "train with the group"]]
    },
    disregard: {
        text: "Group shows up later and attacks town but heros are still recruiting so still around and help. see that they intend to help and decide to join them",
        options: [["train", "train with the group"]]
    },
    stay: {
        text: "Group had someone else join them so they left and after hearing what happened show up afterwards to help",
        options: [["train", "train with the group"]]
    },
    train: {
        text: "The group offers to train the hero in a specific skill to prepare them for the fight.",
        options: [["magic", "learn magic"], ["sword", "learn to swordfight"], ["gun", "learn to use a gun"]]
    },
    magic: {
        text: "You always wanted to learn how to use magic. While Prudence is a bit strict, she is the most empathetic and also the youngest of the group. But this learning of magic is very complex and you will have to learn the basics for 8 months. Hope that you are prepared to use it properly.",
        options: [["test", "finish training"]]
    },
    
    sword: {
        text: "Wanting to be the hack and slash person, you asked Sir Vug the boastful expert that you are interested in that type of art. It will take a maximum of 6 months to complete.",
        options: [["test", "finish training"]]
    },
    
    gun: {
        text: "These skills seem too complex so you decided to take the path that is much easier. Plus, Hurman Glohalm the dwarf has a much more fun personality than the other two mentors. Your training under his hands will last for 5 months.",
        options: [["test", "finish training"]]
    },
    
    test: {
        text: "Now that your training has been completed, you and a group of new recruits are now being tested on a monster that happens to be nearby.",
        options: [["guinea_Pig", " Experiment on a friend as a guinea pig."], ["Try_Out", "Use the ability on monster"]]
    },
    
    guinea_Pig: {
        text: "“The frick’s wrong with you?” Jack, a friend you got to know during training, complained. Before you could say anything, the monster spotted you and obliterates everyone into sterner stuff.",
        options: [["prolog", "restart"]]
    },
    
    Try_Out: {
        text: "Using a little trick you learned from training, you distracted the monster when the other recruits finished the monster off. “Now that’s what I’m talking about.” you then see a cave behind it",
        options: [["hoard", "explore the cave"]]
    },
    
    hoard: {
        text: "After defeating the monster you find a hoard in a large cave that they were guarding that is now ripe for the taking.",
        options: [["explore", "explore side"], ["LeaveCave", " don’t explore"]]
    },
    
    explore: {
        text: "Unfortunately you fell down a hole and are now separated from the group. Now you have to find a way out by yourself.",
        options: [["Proceed1", "move forward"]]
    },
    
    Proceed1: {
        text: "Suddenly, you came across armored beings with red lights glowing from within their bodies. You recognize that they were the Destroyer’s elite troopers, the Hellers, thanks to descriptions from the group thanks to their previous. What should you do now?",
        options: [["Attack", "Attack Head-on"], ["Fight1", "use training to fight"], ["Tunnel", "Look for a way around"]]
    },
    
    Attack: {
        text: "Without thinking, you charged head-on into the horde. Only to be terminated by the Hellers easily. Better luck next time.",
        options: [["prolog", "restart"]]
    },
    
    Tunnel: {
        text: "There must be a way to escape. Quickly you spot a tunnel.  Should you go for it?",
        options: [["Fight1", "decide to Fight Instead"], ["Enter", "Take the tunnel"]]
    },
    
    Enter: {
        text: "Well this is better than this.” You started before running into it. The tunnel then closes behind you and now you’re all alone. Next to you you see an old artifact that to be over a million… not much older than that. Should you inspect it?",
        options: [["Artifact", "what to do"]]
    },
    
    Artifact: {
        text: "You come across an artifact that appears to be over a million… not much older than that. Should you inspect it?",
        options: [["Touch", "Touch It"], ["DontTouch", "Probably Not Worth It"]]
    },
    Touch: {
        text:"You touched the artifact to inspect. As soon as you touch it, you feel yourself being teleported into…. Wait, what were you doing again? You look around to find yourself back in the village. Maybe it was all just a crazy daydream",
        options: [["prolog", "Wake up"]]
    },
    DontTouch: {
        text: '“Not worth my time” you said. After you begin walking away you are suddenly teleported into a different area and you end up face to face with the Destroyer themself.',
        options: [["Boss", "approach the Destroyer"]]
    },
    Fight1: {
        text: "Suddenly, you came across armored beings with red lights glowing from within their bodies. You recognize that they were the Destroyer’s elite troopers, the Hellers, thanks to descriptions from the group thanks to their previous. What should you do now?",
        options: [["With_Firearm", "you picked Firearm"], ["With_Sword", "you picked the sword"], ["With_Magic", "You picked magic"]]
    },
    
    With_Firearm: {
        text: "now that you decided to use the gun you have to decide how to use it",
        options: [["Auto", "Auto Fire"], ["special", "shoot precise points with special ammo"]]
    },

    Auto: {
        text: "Fire in the hole as you fire in every direction at the Hellers until you ran out of ammunition. As the smoke comes out of the barrel you realize that none of the Hellers were harmed. Then in a matter of seconds, they unleashed their payload. Try to be less impulsive.",
        options: [["prolog", "you died"]],
    },

    special: {
        text: "You remember some special ammunition that Hurman had given you. You decided to test it out but first you need to find their weak points.",
        options: [["Proceed2", "You defeat them"]],
    },
    
    With_Sword: {
        text: "now that you decided to use the sword you have to decide how to use it",
        options: [["swirl", "run forward and spin"], ["dot", "..."]],
    },
    
    swirl: {
        text: "A swirling attack should do. Or was it? Turns out your sword wasn’t enough to damage the Hellers and they obliterate you into sterner stuff.",
        options: [["prolog", "you died"]]
    },

    dot: {
        text: "You quickly look closely between the Heller’s and your sword. You discover that it’s the same blade. All you have to do is do a spell to enhance it. You test it out on a random Heller and it’s effective. You quickly slash at them before making your escape.",
        options: [["Proceed2", "You defeat them"]]
    },

    With_Magic: {
        text: "now that you decided to use magic you have to decide how to use it",
        options: [["invis", "invisibility"], ["clones", "make clones"]]
    },

    invis: {
        text: "You summon the power of invisibility. This seems like the most logical choice but that doesn’t work much on the Hellers who have heat scanners and terminated you.",
        options: [["prolog", "you died"]]
    },

    clones: {
        text: "Quickly, you summon a spell that not only creates an army of clones of yourself but also time loops that distracts the Hellers. You then slip by them with a couple of your clones as some Hellers target you. Luckily you were able to escape.",
        options:[["Proceed2", "escape deeper into the caves"]],
    },

    Proceed2: {
        text: "You continued on deep into the cave. There’s a light ahead of you. Could this be the exit? ",
        options: [["LeaveCave", "LeaveCave"]]
    },
    
    LeaveCave: {
        text: "After you leave the cave, you and the group continue to transverse the land until you run into a new danger. You see a group of average people being marched off by minions of the Destroyer. You now have a choice either to help them or follow them.",
        options: [["Save", "The groups choses to save them"], ["no_save", "You decided not to save them"]]
    },
    
    Save: {
        text: "You and the group decide that it isn't worth waiting and you guys rush in killing all of the minions. After saving them one of them tells you that they overheard some of the minions saying that they were almost to their lair. You then set a camp for the survivors and then head in the direction they were being marched. A few days later the scout for the group tells us that they found the base.",
        options: [["night", "attack at night"], ["day", "attack at day"]]
    },

    night: {
        text: "Most of the minions are sleeping and so there are minimal casualties to your side. After a brief rest you and the group enter the cave.",
        options: [["lost", "Get lost"]]
    },

    day: {
        text: "A good portion of the enemies are away so while they are more prepared there are minimal casualties to your side. After a good rest you and the group enter the cave.",
        options: [["lost", "Get lost"]]
    },

    lost: {
        text: "As the group enters the caves and everyone separates to explore the inexplicably complex and ever changing corridors. As you explore further the voices of your comrades get quieter until you can’t hear them at all.",
        options: [["Boss", "continue down"]]
    },
    no_save: {
        text: "You and the group decide to wait and follow them to figure out where they are being taken. Eventually you find the base and now must decide when to attack.",
        options: [["night2", "attack at night"], ["day2", "attack at day"]]
    },

    night2: {
        text: "As you and the group begin freeing people, the people who were there the longest begin screaming for the heroes to free them, waking up the complex. A fight between the group and the guards ensues",
        options: [["fight", "how will you handle the fight"]]
    },
    day2: {
        text: "During midday you and the group rush into the complex making a mad dash for the cave. As the guards realize what is happening they gather in preparation for a fight. A fight between the group and the guards ensues.",
        options: [["fight", "how will you handle the fight"]]
    },

    fight: {
        text: "A fully armed general walks to the front of their ranks and leads the fight against you and the group. How do you deal with them?",
        options: [["run", "try and run past them"], ["general", "fight the general"], ["rally", "get the group to fight him"]]
    },

    run: {
        text: "As you attempt to make your way through the fighting the general sees you and makes their way toward you. The second you realize that he is after you it is already too late and you are killed.",
        options: [["prolog", "you died"]]
    },

    general: {
        text: "You decide to take on the general. As you charge towards the general he notices you. As you get close to him he easily bats you away when you get close enough to attack. You succumb to your wounds.",
        options: [["prolog", "you died"]]
    },

    rally: {
        text: "You rally your friends and convince them to take on the general with the plan being that you can get into the cave while he is distracted. The plan is executed flawlessly an you are now in the cave.",
        options: [["Boss", "Go further into the cave"]]
    },
    
    Boss: {
        text: "…The Destroyer being itself. It lets out a defining roar that warns you that it’s better to make good decisions. What to do now?",
        options: [["Run_Away2", "You run away in fear"], ["Charge", "You charged head-on"], ["Ready_Up", "You prepare for the inevitable fight."]]
    },
    
    Run_Away2: {
        text: "Stricken by fear, you yelled out loud, “I SHOULD HAVE STAYED HOME INSTEAD!!!”, before running away in fear. Then you die of shame for your cowardice.",
        options: [["prolog", "you died"]]
    },

    Charge: {
        text: "“I’M NOT SCARED OF YOU.” As you charged head on with all the skills you learned. You unleashed different magic spells, gunfire, and slash and hacking on the dragon but none of it works. In fact the dragon only got angry and obliterate you into sterner stuff. “Better luck next time hero.” the dragon said in a stern voice.",
        options: [["prolog", "you died"]]
    },

    Ready_Up: {
        text: "You prepare to battle the beast with your weapons/magic on the ready. The Destroyer responded unexpectedly with, “Perhaps, I shall tell you something that you don’t want to hear.”",
        options: [["Climax", "..."]]
    },

    Climax: {
        text: '“I can see how much your childhood was. Orphaned. Abandoned. Casted as an underdog……” the Destroyer monologues. “Actually my life was normal. First of all, my parents are alive and I am not an underdog.” you immediately pointed out. “Oh hang on for a minute.” the Destroyer said as it looked at a scroll again 5 minutes later…… "Well it appears that your friend Jack was the one who was supposed to meet me but that was not how it was supposed to go. But I’m not into that chosen one thing. Since you’re in Jack’s place, I have a deal for you instead.”“And what is it?” you asked.“Do you wish for a world where everything is better, like not having to live in poverty while the rich enjoy a good lifestyle or….” Later… “Take my deal, and we will make the world a better place.”',
        options: [["No", "No"], ["Accept", "I accept your deal"]]
    },
    
    Accept: {
        text: '“Excellent.” The Destroyer rejoices in excitement. “Now we can rule the world as one.” You then proceed to lead the Destroyer’s hell troopers to the direction that the heroes are located. Then in a matter of seconds, they are gone. “Why….Why?” your former friend Jack said as he died from a random Heller. Soon the world of SPAF, the entire galaxy, and all of realities will fall to the might of the Destroyer and his multi-dimensional army with you as the second-in-command. The End',
        options: [["prolog", "restart?"]],
    },

    No: {
        text: "With his mysterious power, the Destroyer freezes time just as the group arrived. This leaves only you, Jack and the Destroyer unfroze by its eternal powers. “That’s better.” the Destroyer remarks. It then reveals the entire truth. The group that you had followed were a bunch of cultists who are planning to take over the world once they defeat the Destroyer and take his powers to control reality. Jack is not sure. Surely the Destroyer is bloating.",
        options: [["Believe","Believe"], ["NoBelieve","Don't Believe"]],
    },
    
    Believe: {
        text:'Realizing that the so-called heroes, the group that you followed, were behind everything. The minions that destroyed your town were actually their followers using magic to disguise themselves as the Destroyer’s minions. You then defect to the Destroyer’s side along with your friend Jack before you wage an assault on the cultists.“How did you…” before you killed the leader of the group. The Hellers, Jack, and the Destroyer took care of the rest. Some of the followers realize the truth and follow in your footsteps." You returned back to the world as a guardian of different realities with the Destroyer as your mentor while Jack is now your student. The End',
        options: [["prolog", "restart?"]],
    },
    
    NoBelieve: {
        text: '“You’re lying.” you said as you proceeded to unleash your ultimate abilities to the Destroyer while it was still in the middle of its speech. The Destroyer is no more." "Woah. You actually defeated the Destroyer!” your friend Jack cheered. “The prophecy stated that it should be me but you were the one that actually did it." "The group congratulated you and with your new powers gained, you are now in charge of different realities. You are the Controller" The End',
        options: [["prolog", "restart?"]],
    }
}

 var playerChoices = ["prolog"];

var x = document.getElementById("BeginJourney");
var reload = document.getElementById("reload");
var playData = document.getElementById("playData");
var buttonArea = document.getElementById("buttonArea");
var playArea = document.getElementById("playArea");


function buttonFunctions (buttonText, picked) {
    let buttons = document.createElement("button");
    buttons.innerHTML = buttonText;
    buttonArea.appendChild(buttons);

    buttons.addEventListener("click", function(){
    playerChoices.push(picked);
    createStory();
    window.scrollTo ({ top: 0, behavior: 'smooth' });
    });
}

function addStory(text) {
    playArea.innerHTML = text;
}

function createStory(text) {
let pageNow = playerChoices[playerChoices.length - 1];
playArea.innerHTML = "";
buttonArea.innerHTML = "";
for(let idea of playerChoices){
    addStory(story[idea].text)
}
for (let idea of story[pageNow].options) {
    buttonFunctions(idea[1],idea[0]);
}
}

reload.addEventListener("click", function(){
    window.location.reload();
})

reload.style.display = 'none';

x.addEventListener("click", function(){
    createStory();
    x.style.display = "none"
    reload.style.display = '';
}); 
