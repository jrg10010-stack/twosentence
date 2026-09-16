let camButton = document.getElementById("cam-button");
let imageTag = document.getElementById('my-image');

let buttonName = "Camera";
camButton.textContent = buttonName;    
let mySound = new Audio();
mySound.play();

let currentPic = 0;
let currentAudio = null;

let pictures = [
        { image: 'FrontYard.jpg', sound: 'OutsideNight.wav' },
        { image: 'parkingLot.jpg', sound: 'OutsideNight.wav' },
        { image: 'Kitchen.jpg', sound: 'Inside.wav' },
        { image: 'LivingRoom.jpg', sound: 'Inside.wav' },
        { image: 'scaryGuy.jpg', sound: 'Static.wav' },
        { image: 'scaryGuy.jpg', sound: 'Static.wav' }
        
];

camButton.addEventListener("click", function(){
        if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        }
        buttonName = "Camera["+ (currentPic + 1) + "]";
        camButton.textContent = buttonName;
        currentPic += 1;
        imageTag.src = pictures[currentPic-1].image;
        currentAudio = new Audio(pictures[currentPic-1].sound);
        currentAudio.play();
        
        if (currentPic == 6){
                alert("ERROR");   
                window.location.href = "about:blank";    
        }

        updateCam();
});
