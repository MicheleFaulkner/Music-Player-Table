function playAudio(btnNumber) {
	const music = document.getElementById("music"+btnNumber);
	const controlBtn = document.getElementById("control-btn"+btnNumber);

	if(music.paused) {
		music.play();
		controlBtn.textContent = "pause_circle_outline";
	} else {
		music.pause();
		controlBtn.textContent = "play_circle_outline";
	}
}