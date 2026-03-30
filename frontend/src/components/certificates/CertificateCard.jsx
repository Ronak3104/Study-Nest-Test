import { Download } from "lucide-react";

export default function CertificateCard({ certificate }) {
  return (
    <div className="bg-card rounded-3xl p-6 flex gap-6">
      <img
        src="/images/placeholder.png"
        alt="Certificate"
        className="w-28 h-20 object-cover rounded-2xl"
      />
      <div className="flex-1">
        <h4 className="font-bold text-xl">{certificate.course?.title}</h4>
        <p className="text-gray-400 text-sm">
          Issued on {new Date(certificate.issuedAt).toLocaleDateString("en-IN")}
        </p>
        <a
          href={certificate.url}
          target="_blank"
          className="inline-flex items-center gap-2 mt-6 text-primary hover:text-white"
        >
          <Download size={18} /> Download PDF
        </a>
      </div>
    </div>
  );
}
