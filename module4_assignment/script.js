

//function for saying hello
const helloSpeaker = {
	greetings: 'Hello',	
};
(function () {
	helloSpeaker.speak = function (user) {
		return (helloSpeaker.greetings+ " " + user);
	}
}());

//function for saying goodbye
const byeSpeaker = {
	greetings: 'Goodbye'
};

(function () {
	byeSpeaker.speak = function (user) {
		return (byeSpeaker.greetings + " " + user);
	}
}());

//displays names
(function () {
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
    //loop for calling the names
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
            //this displays the contents on the webpage
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpeaker.speak(name));
            //displays on the webpage
			document.write(helloSpeaker.speak(name + '<br>'));
		}
	}
})();
