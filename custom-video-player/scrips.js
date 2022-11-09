//DET OUR ELEMENT

const player= document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelector("[data-skip]");
const ranges = player.querySelector(".player__sider")

//BUIL D FUNCTION

function togglePlay(){
    const method = video.paused ? "play":"pause";
    video[method]();
    
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }
}



//ADD EVENT LISTENERST