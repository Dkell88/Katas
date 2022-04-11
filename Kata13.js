const talkingCalendar = function(date) {

  if (date[4] === "/" && date[7] === "/"){
  
    ymdArray = date.split('/');
    let month = "";
    let text = ymdArray[2];
    let day = text * 1;

    switch(ymdArray[1]){
      case "01":
        month = "January";
        break;
      case "02":
        month = "Febuary";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November"
        break;
      case "12":
        month = "December"
        break;
    }
    switch(date[9]){
      case "1":
        text = "st";
        break;
      case "2":
        text = "nd";
        break;
      case "3":
        text = "rd"
        break;
      default:
        text = "th"
    }
    return(month + " " + day + text + ", " + ymdArray[0]);
  }else return "Invalid entry"
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));