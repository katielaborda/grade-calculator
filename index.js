function getLetterGrade() {
  let numberGrade = document.getElementById("number").value;
  let reportCard = document.getElementById("letterSpan");
  let letterGrade;
  if (numberGrade >= 90) {
    letterGrade = "A";
  } else if (numberGrade >= 80) {
    letterGrade = "B";
  } else if (numberGrade >= 70) {
    letterGrade = "C";
  } else if (numberGrade >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  reportCard.innerHTML = letterGrade;
}

function getLetterGrade2() {
  let numberGrade1 = document.getElementById("number1").value;
  let reportCard1 = document.getElementById("letterSpan1");
  let numberGrade2 = document.getElementById("number2").value;
  let reportCard2 = document.getElementById("letterSpan2");
  let numberGrade3 = document.getElementById("number3").value;
  let reportCard3 = document.getElementById("letterSpan3");
  let reportCard4 = document.getElementById("letterSpan4");
  let letterGrade1;
  let letterGrade2;
  let letterGrade3;
  let letterGrade4;

  if (numberGrade1 >= 90) {
    letterGrade1 = "A";
  } else if (numberGrade1 >= 80) {
    letterGrade1 = "B";
  } else if (numberGrade1 >= 70) {
    letterGrade1 = "C";
  } else if (numberGrade1 >= 60) {
    letterGrade1 = "D";
  } else {
    letterGrade1 = "F";
  }
  reportCard1.innerHTML = letterGrade1;

  if (numberGrade2 >= 90) {
    letterGrade2 = "A";
  } else if (numberGrade2 >= 80) {
    letterGrade2 = "B";
  } else if (numberGrade2 >= 70) {
    letterGrade2 = "C";
  } else if (numberGrade2 >= 60) {
    letterGrade2 = "D";
  } else {
    letterGrade2 = "F";
  }
  reportCard2.innerHTML = letterGrade2;

  if (numberGrade3 >= 90) {
    letterGrade3 = "A";
  } else if (numberGrade3 >= 80) {
    letterGrade3 = "B";
  } else if (numberGrade3 >= 70) {
    letterGrade3 = "C";
  } else if (numberGrade3 >= 60) {
    letterGrade3 = "D";
  } else {
    letterGrade3 = "F";
  }
  reportCard3.innerHTML = letterGrade3;

  let numberGrade4 =
    (parseInt(numberGrade1) + parseInt(numberGrade2) + parseInt(numberGrade3)) /
    3;
  console.log(numberGrade4);

  if (numberGrade4 >= 90) {
    letterGrade4 = "A";
  } else if (numberGrade4 >= 80) {
    letterGrade4 = "B";
  } else if (numberGrade4 >= 70) {
    letterGrade4 = "C";
  } else if (numberGrade4 >= 60) {
    letterGrade4 = "D";
  } else {
    letterGrade4 = "F";
  }
  reportCard4.innerHTML = letterGrade4;
}
