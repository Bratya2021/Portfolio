document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });

  var header = document.querySelector(".app-sidebar");
var btns = header.getElementsByClassName("app-sidebar-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

/*   var listView = document.querySelector('.app-sidebar-link active');
  var gridView = document.querySelector('.app-sidebar-link');
  var projectsList = document.querySelector('.project-boxes');

  listView && gridView.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else this.classList.add("active");
   gridView.classList.remove('active');
     listView.classList.add('active');
     projectsList.classList.remove('jsGridView');
     projectsList.classList.add('jsListView'); 
  });

  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
 */
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });

  document.querySelector('.messages-close').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.remove('show');
  });
});
const d = new Date();
document.getElementById("demo").innerHTML = d;

function getCurrentDate() {
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let output = day + '/' + month + '/' + year;
  document.querySelector('.output').innerHTML = output;

}

