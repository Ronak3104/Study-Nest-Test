import { getYoutubeEmbedUrl } from "../../lib/youtube";

export default function CourseVideoPlayer({ youtubeLink }) {
  const embedUrl = getYoutubeEmbedUrl(youtubeLink);
  if (!embedUrl) return <p className="text-red-400">Invalid YouTube link</p>;

  return (
    <div className="aspect-video bg-black rounded-3xl overflow-hidden">
      <iframe
        src={embedUrl}
        title="Course Video"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
