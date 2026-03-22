const ApiError = require('../utils/ApiError');

const extractYouTubeId = (url) => {
  if (!url) return null;

  // supports: https://www.youtube.com/watch?v=ID, https://youtu.be/ID, https://www.youtube.com/embed/ID
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/
  ];

  for (const p of patterns) {
    const match = url.match(p);
    if (match && match[1]) return match[1];
  }
  return null;
};

const toEmbedUrl = (url) => {
  const id = extractYouTubeId(url);
  if (!id) throw new ApiError(400, 'Invalid YouTube URL');
  return `https://www.youtube.com/embed/${id}`;
};

module.exports = { extractYouTubeId, toEmbedUrl };