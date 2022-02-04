document.addEventListener("keydown", function(e) {
    if (e.code === 'KeyA') {
        console.log("The 'A' key is pressed.");
        let audioA = new Audio("white_keys/A.mp3");
        audioA.play();
    } else if (e.code === 'KeyS') {
        console.log("The 'S' key is pressed.");
        let audioS = new Audio("white_keys/S.mp3");
        audioS.play();
    } else if (e.code === 'KeyD') {
        console.log("The 'D' key is pressed.");
        let audioD = new Audio("white_keys/D.mp3");
        audioD.play();
    } else if (e.code === 'KeyF') {
        console.log("The 'F' key is pressed.");
        let audioF = new Audio("white_keys/F.mp3");
        audioF.play();
    } else if (e.code === 'KeyG') {
        console.log("The 'G' key is pressed.");
        let audioG = new Audio("white_keys/G.mp3");
        audioG.play();
    } else if (e.code === 'KeyH') {
        console.log("The 'H' key is pressed.");
        let audioH = new Audio("white_keys/H.mp3");
        audioH.play();
    } else if (e.code === 'KeyJ') {
        console.log("The 'J' key is pressed.");
        let audioJ = new Audio("white_keys/J.mp3");
        audioJ.play();
    } else if (e.code === 'KeyW') {
        console.log("The 'W' key is pressed.");
        let audioW = new Audio("black_keys/W.mp3");
        audioW.play();
    } else if (e.code === 'KeyE') {
        console.log("The 'E' key is pressed.");
        let audioE = new Audio("black_keys/E.mp3");
        audioE.play();
    } else if (e.code === 'KeyT') {
        console.log("The 'T' key is pressed.");
        let audioT = new Audio("black_keys/T.mp3");
        audioT.play();
    } else if (e.code === 'KeyY') {
        console.log("The 'Y' key is pressed.");
        let audioY = new Audio("black_keys/Y.mp3");
        audioY.play();
    } else if (e.code === 'KeyU') {
        console.log("The 'U' key is pressed.");
        let audioU = new Audio("black_keys/U.mp3");
        audioU.play();
    }
});