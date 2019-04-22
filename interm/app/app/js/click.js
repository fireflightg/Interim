window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();

};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

 function sta(){
	const dbReftObject = firebase.database().ref().child("plant");
	const dbd = dbReftObject.child("cool");

dbd.on('value', function(snapshot)
    {
        if(snapshot.hasChild("2")){
        	console.log("hello");
        	document.getElementById("okey").innerText = "Plant Status: Ok";

        }
        else{
        	console.log("ok");

        }
    });
}