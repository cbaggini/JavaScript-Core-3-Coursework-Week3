let hogwarts = [
    { firstName: "Harry", lastName: "Potter", house: "Gryffindor", pet: "Owl", occupation: "Student" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor", pet: "Cat", occupation: "Student" },
    { firstName: "Draco", lastName: "Malfoy", house: "Slytherin", pet: null, occupation: "Student" },
    { firstName: "Cedric", lastName: "Diggory", house: "HufflePuff", pet: null, occupation: "Student" },
    { firstName: "Severus", lastName: "Snape", house: "Slytherin", pet: null, occupation: "Teacher" },
    { firstName: "Filius", lastName: "Flitwick", house: "Ravenclaw", pet: null, occupation: "Teacher" },
    { firstName: "Pomona", lastName: "Sprout", house: "Hufflepuff", pet: null, occupation: "Teacher" },
    { firstName: "Minerva", lastName: "McGonagall", house: "Gryffindor", pet: null, occupation: "Teacher" },
    { firstName: "Albus", lastName: "Dumbledore", house: "Gryffindor", pet: "Phoenix", occupation: "Teacher" }
]

// Task 1

function findGriffindor(arr) {
	for (i of arr) {
		const {firstName, lastName, house } = i;
		if (house === "Gryffindor") {
			console.log(firstName, lastName);
		}
	}
}

findGriffindor(hogwarts);

// Task 2
console.log();

function findPets(arr) {
	for (i of arr) {
		const {firstName, lastName, pet} = i;
		if (pet) {
			console.log(firstName, lastName);
		}
	}
}

findPets(hogwarts);