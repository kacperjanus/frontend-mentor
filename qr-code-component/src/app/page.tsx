import Image from "next/image";
import QrCodeComponent from "@/components/QrCodeComponent";

export default function Home() {
  const CodePath = "/image-qr-code.png";
  const CodeTitle = "Improve your front-end skills by building projects"
  const CodeDescription = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"

  return (
      <div className="bg-slate-300 p-4 w-min">

        <QrCodeComponent CodePath={CodePath} CodeTitle={CodeTitle} CodeDescription={CodeDescription}/>
      </div>
  );
}