const name = prompt("Please enter your name: ");
alert("Hello," + name + "!");
let gender = prompt("Please enter your gender [male / female]:");

if (gender.toLowerCase() === "male") {
  alert(" Your gender is male");
} else if (gender.toLowerCase() === "female") {
  alert(" women.");
} else {
  alert("Invalid  input. Please enter either 'male' / 'female' #THERE ARE JUST TWO GENDER.#");
}

let age = prompt("Please enter your age: ");

if (age <= 0) {
  alert("Invalid  input. Age cannot be less than or equal to zero.");
} else {
  alert(`You entered ${age} as your age.`);
}

let skip = confirm("Do you want to skip the welcoming message?");

if (!skip) {
  let title = "";
  if (gender.toLowerCase() === "male") {
    title = "Mr";
  } else if (gender.toLowerCase() === "female") {
    title = "Ms";
  }

  const welcomeMessage = `Welcome ${title}. ${name}! your age is ${age} and your gender is ${gender}.`;
  
  alert(welcomeMessage);
} else {
  alert("Ok, welcome!");
}
