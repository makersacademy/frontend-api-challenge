 function makeUrlChange() {
   window.addEventListener("hashchange", showContentForCurrentPage);
 };

 function showContentForCurrentPage() {
   changeDivId(getContentFromUrl(window.location));
 };

 function getContentFromUrl(location) {
   return location.hash.split("#")[1];
 };

function changeDivId(content) {
  document.getElementById("content");
  element.setAttribute('id','${content}');
 };


makeUrlChange();
