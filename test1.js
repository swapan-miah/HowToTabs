function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log(tablinks[i].className);
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  console.log(evt.currentTarget.className);
}

// for (i = 0; i < tablinks.length; i++) {
//   tablinks[i].className = tablinks[i].className.replace(" active", "");
//   console.log(
//     tablinks[i].className +
//       "I am change from for loop and I am change tablinks (className active to Null)"
//   );
// }
