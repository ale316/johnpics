var $pic = document.querySelector('.pic')
// &#127881 &#128586 &#127881
$pic.addEventListener('click', function() {
	window.location.reload()
})

function pastelColor(){
    var r = (Math.round(Math.random()* 127) + 127).toString(16);
    var g = (Math.round(Math.random()* 127) + 127).toString(16);
    var b = (Math.round(Math.random()* 127) + 127).toString(16);
    return '#' + r + g + b;
}

var $instructions = document.querySelector('.instructions')
$instructions.style.color = pastelColor()
