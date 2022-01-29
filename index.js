/*_____________________________________________________________________*/
let target = document.getElementById("target");
/*_____________________________________________________________________*/
let upperCaseButton = document.getElementById("upper-case");
upperCaseButton.addEventListener("click", function (){
   target.value = target.value.toUpperCase();
});
/*_____________________________________________________________________*/
let lowerCaseButton = document.getElementById("lower-case");
lowerCaseButton.addEventListener("click", function (){
    target.value = target.value.toLowerCase();
});
/*_____________________________________________________________________*/
let properCaseButton = document.getElementById("proper-case");
properCaseButton.addEventListener("click", function(){
    const arr = target.value.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    target.value = arr.join(" ");
});
/*_____________________________________________________________________*/
let sentenceCaseButton = document.getElementById("sentence-case");
sentenceCaseButton.addEventListener("click", function (){
   const arr = target.value.split(" ");
   let firstInSentence = "";
   for (let i = 0; i < arr.length; i++) {
       if (firstInSentence == "") {
           firstInSentence = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
       } else {
           if (arr[i].charAt(arr[i].length-1) == ".") {
               arr[i] = arr[i].toLowerCase();
               firstInSentence = "";
           } else {
               arr[i] = arr[i].toLowerCase();
           }
       }
   }
   target.value = arr.join(" ");
});
/*_____________________________________________________________________*/
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
let saveTextFile = document.getElementById("save-text-file");
saveTextFile.addEventListener("click", function(){
    download("text.txt", target.value);
});
/*_____________________________________________________________________*/