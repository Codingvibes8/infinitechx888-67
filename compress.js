const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'Create_vid_of_image_delpmaspu_.mp4');
const outputPath = path.join(__dirname, 'public', 'hero-video-compressed.mp4');

console.log('Using ffmpeg at:', ffmpegPath);
console.log('Compressing video...');

const ffmpeg = spawn(ffmpegPath, [
  '-i', inputPath,
  '-vcodec', 'libx264',
  '-crf', '28',        // Compression quality (lower = better quality, 23 is default, 28 is smaller)
  '-preset', 'fast',   // Encoding speed vs compression ratio
  '-y',                // Overwrite output file
  outputPath
]);

ffmpeg.stdout.on('data', (data) => {
  // console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', (data) => {
  // ffmpeg outputs progress to stderr
  // console.error(`${data}`);
});

ffmpeg.on('close', (code) => {
  if (code === 0) {
    console.log(`Video compression finished successfully. Saved to ${outputPath}`);
  } else {
    console.log(`ffmpeg process exited with code ${code}`);
  }
});
