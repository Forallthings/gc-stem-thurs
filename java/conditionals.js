var steak = confirm("Do you like steak?")
var age = confirm("Is your birthyear between 1998 and present?")
if (age) {
    if (steak == false) {
        var tofu = confirm("Do you like tofu?")
}
}
if (age === false) {
    document.write("You aren't old enough yet. Come back when you are 21!")
}
else if (steak) {
    document.write("Here is a steak sandwich!")
}
else if (tofu) {
    document.write("Here is a tofu stir-fry!")
}
else {
    document.write("Sorry, we don't have any more options!")
    console.log("I can't believe this durn picky eater!")
}