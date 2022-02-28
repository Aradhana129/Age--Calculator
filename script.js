const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculatorAge() {
  // alert("he");
  const dateofBirth = document.getElementById("date_of_birth").value;
  const givenDate = document.getElementById("given_date").value;
  //document.getElementById('years').innerHTML = "Hello";


  let startDate = new Date(dateofBirth);
  let endDate = new Date(givenDate);

  let stdobYear = startDate.getFullYear();
  let stdobMonth = startDate.getMonth() + 1;
  let stdobDate = startDate.getDate();
  // let stdobMinute = startDate.getMinute();
  //let stdobSecond = startDate.getSecond();

  let givenYear = endDate.getFullYear();
  let givenMonth = endDate.getMonth() + 1;
  let givenDate1 = endDate.getDate();
  //let givenMinute = endDate.getMinute();
  //let givenSecond = endDate.getSecond();
  leapTest(givenYear);

  if (stdobYear > givenYear ||
    (stdobMonth > givenMonth && stdobYear === givenYear) ||
    (stdobDate > givenDate1 && stdobMonth === givenMonth && stdobYear === givenYear)
  ) {
    alert("Must be Born!!");
    return;
  }
  let diffYear = givenYear - stdobYear;
// console.log(diffYear);
  let diffMonth, diffDate;
  if (givenMonth >= stdobMonth) {
    diffMonth = givenMonth - stdobMonth;
// console.log(diffMonth);
  } else {
    diffYear--;
    diffMonth = 12 + givenMonth - stdobMonth;
// console.log(diffMonth);
  }
  if (givenDate1 >= stdobDate) {
    diffDate = givenDate1 - stdobDate;
    // console.log(diffDate);
  } else {
    diffMonth--;
    let days = month[givenMonth - 2];
    diffDate = days + givenDate1 - stdobDate;
    if (diffMonth < 0) {
      diffMonth = 11;
      diffYear--;
    }
    // console.log(diffDate);
  }
  showResult(diffYear, diffMonth, diffDate);
  // showResult(diffYear, diffMonth, diffDate, diffMinute, diffSecond);
}
  const showResult = (totalYears, totalMonths, totalDays) => {
    document.getElementById("years").textContent = `${totalYears} Year(s)`;
    document.getElementById("months").textContent = `${totalMonths} Month(s)`;
    document.getElementById("days").textContent = `${totalDays} Day(s)`;
    //document.getElementById("minutes").textContent = '${totalMinutes} Minute(s)';
    //document.getElementById("seconds").textContent = '${totalSeconds} Second(s)';
    document.getElementById("output_box").style.display = "flex";
    document.getElementById("msg").style.display = "block";

  }

  function leapTest(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
      month[1] = 29;
      console.log("Leap Year");
    } else {
      month[1] = 28;
      console.log("Normal Year");
    }


}
