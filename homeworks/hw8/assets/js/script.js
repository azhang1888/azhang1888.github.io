function toggleSongs () {
    document.getElementById("songs-second-half");
    let songsSecondHalf = document.getElementById("songs-second-half");
    songsSecondHalf.classList.toggle("hidden");
}
document.getElementById("toggle-button").onclick = toggleSongs;
