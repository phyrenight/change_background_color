window.onload = function(){
    let colors = ["blue", "green", "orange", "red", "pink", "teal"];
    var counter = 0;
    document.getElementById("click_me").onclick = function() {
        if( counter <= 4 ){
            counter += 1;

        }
        else {
            counter = 0
        }
        document.body.style.background = colors[counter]
        console.log(colors[counter])
    };

}