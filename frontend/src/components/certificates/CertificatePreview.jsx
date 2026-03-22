const CertificatePreview = ({ certificateUrl }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {certificateUrl ? (
        <iframe
          src={certificateUrl}
          title="Certificate Preview"
          className="h-[600px] w-full"
        />
      ) : (
        <div className="p-10 text-center text-slate-500">No certificate preview available.</div>
      )}
    </div>
  );
};

export default CertificatePreview;