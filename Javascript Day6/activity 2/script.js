function register(target) {
  let form = {
    // take the value form the input in html file and create object for that
    name: target.elements["name"].value,
    age: getAge(target.elements["DOB"].value),
    gender: target.elements["gender"].value
  };
  document.getElementById("result").innerHTML = validate(form);
  //to not subimt the form subimt if we want to subimt change the false to ture
  return false;
}

function getAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  return age;
}

function validate(form) {
  // take the name form the input in html
  if (form.name.length > 15) {
    return "Name should be less than 15 characters";
  }

  if (form.gender === "male" && form.age < 21) {
    return "Min age of male is 21";
  }
  if (form.gender === "female" && form.age < 18) {
    return "Min age of female is 18";
  }
  return "Registered Successfully";
}
