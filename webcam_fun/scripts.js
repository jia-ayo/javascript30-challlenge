const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');  
function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
      .then(MediaStream =>{
        console.log(MediaStream)
        // video.src = window.URL.createObjectURL(MediaStream);
        video.srcObject=MediaStream;
        video.play(); 
     })
     .catch(err =>{
       console.log('OH NO!!', err);
     })
}
function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

}
getVideo()