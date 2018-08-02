var myArmory = ["katana", "tabar", "haladi", "gladiator's scissors", "kitchen knife"]

function firstLetter(str) {
    alert(str + " starts with " + str.charAt(0) + "!")
}
for (i = 0; i<myArmory.length; i++) {
    console.log(myArmory[i])
    firstLetter(myArmory[i])
}