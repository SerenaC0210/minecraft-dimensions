var button = document.getElementById("factButton");
var displayFact = document.getElementById("factText");
const facts = [
    "The overworld has the most types of biomes, blocks, and mobs.",
    "Minecraft was almost called the Cave Game.",
    "The noises that Ghasts make were inspired by cats!",
    "The creeper was created by a coding error.",
    "Traveling one block in the nether is equivalent to traveling eight blocks in the overworld!",
    "Attempting to sleep in a bed in the Nether or the End will cause an explosion. Be careful!",
    "Creepers are scared of cats and ocelots, so they will run away if they see one nearby.",
    "You cannot place water in the nether.",
    "Endermen speak English but in reverse!", 
    "A tamed wolf has more health than an untamed wolf.",
    "Bamboo is the fastest growing plant.",
    "Endermen are the only mob that can spawn in all dimensions!", 
    "The pink sheep is a naturally spawning mob!", 
    "Creepers can be forced to detonate if clicked with a flint and steel"
];

function generateFact() {
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    displayFact.innerHTML = randomFact;
}

button.addEventListener("click", generateFact);
