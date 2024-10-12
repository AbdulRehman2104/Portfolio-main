const form = document.getElementById("marksForm")
let dataArray = []
let totalmarks
let percentage
let grade
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const englishMarks = parseInt(document.getElementById("englishmarks").value);
  const urduMarks = parseInt(document.getElementById("urdumarks").value);
  const mathMarks = parseInt(document.getElementById("mathmarks").value);
  const scienceMarks = parseInt(document.getElementById("sciencemarks").value);
  const pstMarks = parseInt(document.getElementById("pstmarks").value);
  dataArray = [
    {
      name: "english",
      totalmarks: 100,
      obtainmark: englishMarks,
    },
    {
      name: "urdu",
      totalmarks: 100,
      obtainmark: urduMarks,
    },

    {
      name: "math",
      totalmarks: 100,
      obtainmark: mathMarks,
    },
    {
      name: "science",
      totalmarks: 100,
      obtainmark: scienceMarks,
    },
    {
      name: "pst",
      totalmarks: 100,
      obtainmark: pstMarks,
    }
  ]
  add(dataArray);
  per(dataArray);
  grades();
  rander(dataArray);
  rander1();
})

function add(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i].obtainmark
  }
  totalmarks = sum;
}

function per() {
  percentage = totalmarks / 500 * 100;
}

function grades() {
  if (percentage >= 90) {
    grade = "A+"
  }
  else if (percentage >= 80) {
    grade = "A"
  }
  else if (percentage >= 70) {
    grade = "B"
  }
  else if (percentage >= 60) {
    grade = "C"
  }
  else if (percentage >= 50) {
    grade = "D"
  }
  else {
    grade = "Fail"
  }

}
function rander(array) {
  let tablebody = document.getElementById("tablebody")
  for (i = 0; i < array.length; i++) {
    let tr = document.createElement("tr")
    for (let key in array[i]) {
      let td = document.createElement("td")
      td.innerText = `${array[i][key]}`
      tr.appendChild(td)
    }
    tablebody.appendChild(tr)
  }
}
function rander1() {
  let obtainedMarks = document.getElementById("obtainedMarks")
  let obtainedGrade = document.getElementById("obtainedGrade")
  let obtainedPer = document.getElementById("obtainedPer")
  obtainedMarks.innerText = `Obtained Marks: ${totalmarks}`
  obtainedGrade.innerText = `Obtained Grade: ${grade}`
  obtainedPer.innerText = `Obtained Percentage: ${percentage}`
}