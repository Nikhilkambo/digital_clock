function showTime() {
  let date = new Date();
  let days = date.getDay(); // 0 - 6
  let months = date.getMonth(); // 0 - 11
  let year = date.getFullYear(); // 2023
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  let day = "";
  let month = "";
  //Gen Day Number To Letter
  switch (days) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Staurday";
      break;
  }
  //Gen Month Number To Letter
  switch (months) {
    case 0:
      month = "Jan";
      break;
    case 1:
      day = "Feb";
      break;
    case 2:
      day = "Mar";
      break;
    case 3:
      day = "Apr";
      break;
    case 4:
      day = "May";
      break;
    case 5:
      day = "Jun";
      break;
    case 6:
      day = "Jul";
      break;
    case 7:
      day = "Aug";
      break;
    case 8:
      day = "Sep";
      break;
    case 9:
      day = "Qct";
      break;
    case 10:
      day = "Nov";
      break;
    case 11:
      day = "Dec";
      break;
  }
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s + " " + session;
  let day_month_year = day + "-" + month + "-" + year;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("day_month_year").innerText = day_month_year;
  setTimeout(showTime, 1000);
}
showTime();
