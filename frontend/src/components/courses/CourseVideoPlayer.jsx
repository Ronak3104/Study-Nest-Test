import { getYouTubeEmbedUrl } from '../../lib/youtube';

const CourseVideoPlayer = ({ youtubeUrl }) => {
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  if (!embedUrl) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">
        Invalid YouTube video URL.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title="Course Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default CourseVideoPlayer;