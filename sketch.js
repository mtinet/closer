var song, analyzer;

function preload() {
  song = loadSound('assets/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3');
}

function setup() {
  createCanvas(600, 400);
  background(51);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  var ss = map(rms, 0, 0.3, 0, 255)
  fill(100+ss, 0, 0);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*400, 10+rms*200);
}
