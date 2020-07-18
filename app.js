document.addEventListener("DOMContentLoaded", () => {

    const spawn = document.createElement("span");
    const wrap = document.getElementById("wrap");
    const limit = 10;
    const proportion = 15;

    for (i = 1; i <= limit; i++){
        const spawn = document.createElement("span");
        wrap.appendChild(spawn);
        spawn.style.top = i * proportion + "px";
        spawn.style.left = i * proportion + "px";
        spawn.style.right = i * proportion + "px";
        spawn.style.bottom = i * proportion + "px";
        spawn.style.animationDelay = (limit - i) / 10 + "s";
    }
    
});