function fireEvent(element,event) {
   if (document.createEvent) {
       // dispatch for firefox + others
       var evt = document.createEvent("HTMLEvents");
       evt.initEvent(event, true, true ); // event type,bubbling,cancelable
       return !element.dispatchEvent(evt);
   } else {
       // dispatch for IE
       var evt = document.createEventObject();
       return element.fireEvent('on'+event,evt)
   }
}

var tracks = document.querySelectorAll('[class*=List__item]');
var txts = [];
for(var i=0; i<tracks.length; ++i){

    var pbt = tracks[i].getElementsByClassName('sc-button-play')[0];
    pbt.dataset.jkbid = ''+i;

    var tr = {isPlaying: (pbt.title==='Pause'),
	      imgsrc: tracks[i].getElementsByTagName('img')[0].src,
	      artist: tracks[i].querySelectorAll('[class*=Title__username]')[0].innerHTML,
	      title: tracks[i].querySelectorAll('[class*=Title__title]')[0].innerHTML
	     };

    txts.push(tr);
}

var play = document.querySelectorAll('.playControl')[0];
var socket = io.connect('http://localhost:8500');

socket.on('control', function (data) {
    if(data.event === 'play') fireEvent(play, 'click');
    else if(data.event === 'select'){
	// use data.jkbid to grab the element to click
	var sld = document.querySelectorAll("[data-jkbid='"+data.jkbid+"']");
	console.log(sld);
    }
});

socket.on('serverConnect', function(){
    socket.emit('tracks', {tracks:txts});
});

socket.emit('plyrConnect', {great:'success?'});

// here attach the socket and grab the button presses from the server
// I wonder if I can just append in the io script 
