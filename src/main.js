const pianoKeys = {
    a: { audio: "audio/a.mp3" },
    s: { audio: "audio/s.mp3" },
    d: { audio: "audio/d.mp3" },
    f: { audio: "audio/f.mp3" },
    g: { audio: "audio/h.mp3" },
    h: { audio: "audio/h.mp3" },
    j: { audio: "audio/j.mp3" },

    w: { audio: "audio/w.mp3" },
    e: { audio: "audio/e.mp3" },
    t: { audio: "audio/t.mp3" },
    y: { audio: "audio/y.mp3" },
    u: { audio: "audio/u.mp3" },
}

document.addEventListener("keypress", function (event) {
    let eventKey = event.key;
    let keyId = eventKey.toLowerCase();
    let pianoKey = pianoKeys[keyId];

    if (!pianoKey) return

    new Audio(pianoKey.audio).play()
})