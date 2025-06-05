const lyrics = [
  { time: 1, text: "Musik dimulai..." },
  { time: 20, text: "Mirrors - Justin Timberlake" },
  { time: 24, text: "Let's Go!" },
  { time: 25, text: "Aren't you something to admire" },
  { time: 33, text: "Cause your shine is something like a mirror" },
  { time: 41, text: "And I can't help but notice" },
  { time: 50, text: "You reflect in this heart of mine" },
  { time: 58, text: "If you ever feel alone and the glare makes me hard to find" },
  { time: 66, text: "Just know that I'm always parallel on the other side" },
  { time: 74, text: "Cause with your hand in my hand and a pocket full of soul" },
  { time: 83, text: "I can tell you there's no place we couldn't go" },
  { time: 91, text: "Just put your hand on the glass, I'm here trying to pull you through" },
  { time: 99, text: "You just gotta be strong" },
  { time: 108, text: "Cause I don't wanna lose you now" },
  { time: 116, text: "I'm looking right at the other half of me" },
  { time: 124, text: "The vacancy that sat in my heart" },
  { time: 133, text: "Is a space that now you hold" },
  { time: 141, text: "Show me how to fight for now" },
  { time: 149, text: "And I'll tell you, baby, it was easy" },
  { time: 158, text: "Coming back into you once I figured it out" },
  { time: 166, text: "You were right here all along" },
  { time: 174, text: "It's like you're my mirror" },
  { time: 183, text: "My mirror staring back at me" },
  { time: 191, text: "I couldn't get any bigger" },
  { time: 199, text: "With anyone else beside of me" },
  { time: 208, text: "And now it's clear as this promise" },
  { time: 216, text: "That we're making two reflections into one" },
  { time: 224, text: "Cause it's like you're my mirror" },
  { time: 233, text: "My mirror staring back at me, staring back at me" },
  { time: 241, text: "Aren't you something, an original" },
  { time: 249, text: "Cause it doesn't seem merely assembled" },
  { time: 258, text: "And I can't help but stare" },
  { time: 266, text: "Cause I see truth somewhere in your eyes" },
  { time: 274, text: "Ooh I can't ever change without you" },
  { time: 283, text: "You reflect me, I love that about you" },
  { time: 291, text: "And if I could, I would look at us all the time" },
  { time: 299, text: "Dan jika aku bisa, kan kupandangi kita sepanjang waktu" },
  { time: 308, text: "Yesterday is history, oh" },
  { time: 316, text: "Tomorrow's a mystery, ouhh" },
  { time: 324, text: "I can see you looking back at me" },
  { time: 333, text: "Keep your eyes on me" },
  { time: 341, text: "Baby, keep your eyes on me" }
];

const audio = document.getElementById('audio');
const lyricsContainer = document.getElementById('lyrics-container');

// Tampilkan semua lirik
lyrics.forEach((line, index) => {
  const div = document.createElement('div');
  div.classList.add('lyric-line');
  div.id = `line-${index}`;
  div.textContent = line.text;
  lyricsContainer.appendChild(div);
});

// Update lirik berdasarkan waktu
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  
  lyrics.forEach((line, index) => {
    const nextLine = lyrics[index + 1];
    const startTime = line.time;
    const endTime = nextLine ? nextLine.time : audio.duration;

    const lineDiv = document.getElementById(`line-${index}`);
    if (currentTime >= startTime && currentTime < endTime) {
      lineDiv.classList.add('active');
    } else {
      lineDiv.classList.remove('active');
    }
  });
});
