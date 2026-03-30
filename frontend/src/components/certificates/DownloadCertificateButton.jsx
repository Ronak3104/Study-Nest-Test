import { Download } from "lucide-react";
import Button from "../common/Button";

export default function DownloadCertificateButton({ url, certificateId }) {
  return (
    <Button
      variant="success"
      onClick={() => window.open(url, "_blank")}
      className="flex items-center gap-2"
    >
      <Download size={18} /> Download Certificate #{certificateId}
    </Button>
  );
}
