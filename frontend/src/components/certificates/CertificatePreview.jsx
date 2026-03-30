export default function CertificatePreview({ url }) {
  return (
    <div className="bg-card rounded-3xl p-4">
      <iframe
        src={url}
        className="w-full aspect-[4/3] rounded-2xl border border-gray-700"
        title="Certificate Preview"
      />
    </div>
  );
}
