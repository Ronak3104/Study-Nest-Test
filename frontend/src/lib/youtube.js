export const getYouTubeVideoId = (url = '') => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/;
  const match = url.match(regExp);
  return match ? match[2] : null;
};

export const getYouTubeEmbedUrl = (url = '') => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

export const isValidYouTubeUrl = (url = '') => {
  return !!getYouTubeVideoId(url);
};