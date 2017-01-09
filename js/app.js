(function(){
  function getTitleText(){
    var titleText = document.getElementById('titleltext').value
    document.getElementById('gtitle1pete').innerHTML = titleText
  }
  var button = document.getElementById("textEnter");
  button.addEventListener("click",getTitleText)



})();
