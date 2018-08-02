var bands=["tobymac", "matthew west", "owl city", "dan bremnes", "newsboys"]
var userBand = prompt("What is you favorite band? (Type in lowercase please)")
if (bands.indexOf(userBand) >= 0) {
    alert("YEAH I LOVE THAT BAND!!!")
}
else {
    document.write("Server Error. Your choice of such horrid musical taste crashed the webpage. Please contact 1-800-SERVER-ERROR for more information. Chances are, you'll get stuck talking to a robot, and heck, you probably won't get a lick of information, and no, we aren't going to fix the page, so your best choice of action would be have better musical taste. (Unless, you know, you like talking to robots and uncooperative customer service hotlines, in which case, do you.)")
}