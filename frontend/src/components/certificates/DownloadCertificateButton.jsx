import Button from '../common/Button';

const DownloadCertificateButton = ({ certificateUrl }) => {
  return (
    <a href={certificateUrl} target="_blank" rel="noreferrer">
      <Button>Download Certificate</Button>
    </a>
  );
};

export default DownloadCertificateButton;