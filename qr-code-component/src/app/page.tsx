import QrCodeComponent from "@/components/QrCodeComponent";
import {Outfit} from "next/font/google";

const outfit = Outfit({subsets: ['latin'], weight: ['400', '700']});

export default function Home() {

  const CodePath = "/image-qr-code.png";
  const CodeTitle = "Improve your front-end skills by building projects"
  const CodeDescription = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"

  return (
      <div className={`${outfit.className} bg-light-gray p-4 w-full h-screen flex justify-center items-center`}>
        <QrCodeComponent CodePath={CodePath} CodeTitle={CodeTitle} CodeDescription={CodeDescription}/>
      </div>
  );
}