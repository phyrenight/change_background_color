window.onload = function(){
    var colors = []
    const max_number = 255;
    document.getElementById("click_me").onclick = function() {
        colors = [];
        for(i = 0; i < 3; i++){
            colors.push(get_random_number(max_number));
        }
        rgb_color = 'rgb('+colors[0]+','+colors[1]+','+colors[2]+')';
        document.body.style.background = rgb_color;
    };
}



function get_random_number(max){
    return Math.floor(Math.random() * Math.floor(max))
}