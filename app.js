window.onload = function(){
    let colors = []
    const max_number = 256;
    const button = document.getElementById("click_me")
    button.onclick = function() {
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