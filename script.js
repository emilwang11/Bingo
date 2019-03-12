
     var array = [" B1"," B2"," B3"," B4", " B5", " B6", " B7", " B8"," B9"," B10"," B11"," B12"," B13"," B14",
     " B15"," I16"," I17"," I18"," I19"," I20"," I21"," I22"," I23"," I24"," I25"," I26", " I27", " I28"," I29"," I30",
     " N31"," N32"," N33"," N34"," N35"," N36"," N37"," N38"," N39"," N40", " N41", " N42", " N43", " N44", " N45",
     " G46"," G47", " G48", " G49"," G50"," G51"," G52"," G53"," G54", " G55"," G56"," G57"," G58"," G59"," G60",
     " O61"," O62", " O63"," O64", " O65"," O66"," O67"," O68"," O69"," O70"," O71"," O72"," O73"," O74"," O75"];

     var index =0;

     window.onload = function() {
       start(); //shuffle happens when page loads up
     };

 function start(){
      shuffle (array);
 }

 function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

function call(){
      var calledArray = []; //array with partially shuffled elements (up to number called)
    if (index < array.length){
        document.getElementById('beingCalled').innerText =array[index];

        for (var i =0; i< index; i++){
            calledArray.push(array[i]); //\\

            if (index<49){
            document.getElementById('pastCalls').innerText =calledArray;  // first half of displays called
            }
        else{
          var halfArray =calledArray.slice(49, calledArray.length);  // later half of calls displayed
          document.getElementById('pastCalls').innerText =halfArray;
        }
        }
        index++;
        console.log(calledArray);
    }
    else {
      document.getElementById('beingCalled').className ='noMoreCalls' //changes style to make it smaller and center
      document.getElementById('beingCalled').innerText ="No more calls"; //changes text being displayed
    }
    var button = $("#nextButton");
    button.text(button.data("text-swap"));  //changes button from start to next after one click
}
function refreshPage(){
    window.location.reload();  //new game button
}
