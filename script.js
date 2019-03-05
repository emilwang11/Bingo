
     var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19, 20, 21];
     var index =0;

 function start(){
     var button = $("#restartButton");
     button.text(button.data("text-swap"));
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
if (index < array.length){
        document.getElementById('beingCalled').innerText =array[index];
        var calledArray = [];
        for (var i =0; i< index; i++){

            calledArray.unshift(array[i]);

            document.getElementById('pastCalls').innerText =calledArray;
        }
        console.log(calledArray.length);
        console.log(calledArray);
        index++;
    }
    else {
        document.getElementById('beingCalled').innerText ="No more calls";
        console.log("No more calls")
    }
}
