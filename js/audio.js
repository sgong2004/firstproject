let audioTag = document.getElementById('audioTag');
let audioBtn = document.getElementById('audioBtn');
let isPlaying = false;
let pauseClass = ['fas','fa-pause'];
let musicClass = ['fas','fa-music'];

audioBtn.onclick = function(){
    if (isPlaying) {
        audioTag.pause();
        isPlaying = false;
        audioBtn.classList.remove('isPlaying');
        pauseClass.forEach(cls => {
            audioBtn.classList.remove(cls);
        });
        musicClass.forEach(cls => {
            audioBtn.classList.add(cls);
        });
    } else {
        audioTag.play();
        isPlaying = true;
        audioBtn.classList.add('isPlaying');
        musicClass.forEach(cls => {
            audioBtn.classList.remove(cls);
        });
        pauseClass.forEach(cls => {
            audioBtn.classList.add(cls);
        });
    }
}