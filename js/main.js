let searchValue = document.getElementById("searchValue");
let test = document.getElementsByClassName("test");

searchValue.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

function search() {
  let userInput = searchValue.value.replace(/ /g, "").toUpperCase();
  console.log(userInput);

  if (userInput == "") {
    for (let i = 0; i < test.length; i++) {
      test[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < test.length; i++) {
      if (test[i].id.includes(userInput)) {
        test[i].style.display = "block";
      } else {
        test[i].style.display = "none";
      }
    }
  }
}

function randomTest() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  switch (num) {
    case 1:
      window.location.href = "";
      break;
    case 2:
      window.location.href = "superpowers/sp1.html";
      break;
    case 3:
      window.location.href = "iq/iq1.html";
      break;
    case 4:
      window.location.href = "eq/eq1.html";
      break;
    case 5:
      window.location.href = "age/age1.html";
      break;
    case 6:
      window.location.href = "job/job1.html";
      break;
  }
}
