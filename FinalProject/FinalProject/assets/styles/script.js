let tipsPartTwo = document.getElementById("bodyp2");
tipsPartTwo.classList.add("hidden");

function toggleTips () {
    document.getElementById("bodyp2");
    let tipsPartTwo = document.getElementById("bodyp2");
    tipsPartTwo.classList.toggle("hidden");
}
document.getElementById("toggle-more").onclick = toggleTips;