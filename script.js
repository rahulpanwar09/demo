var firstName = "Tony";
var lastName = "Stark";
console.log(firstName + " " + this.lastName);

var marvel = {
    firstName: "Steve ",
    lastName: "Rogers",
    fullName: () => {
        console.log(marvel.firstName + " " + marvel.lastName);
        console.log(this.firstName + " " + this.lastName);

    }

}
marvel.fullName();