"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const downloadFileAtURL = (url) => {
  const fileName = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", fileName);
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const DownloadButton = () => {
  // const FRONT_END_PDF_FILE_URL = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/CVs/Rachwan_Harb_Front-End_Developer.pdf`;
  const FULL_STACK_PDF_FILE_URL = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/assets/CVs/Rachwan_Harb_Full-StackWebDeveloper.pdf`;

  const handleDownload = (event) => {
    event.preventDefault();
    downloadFileAtURL(FULL_STACK_PDF_FILE_URL);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="flex items-center gap-2 uppercase"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
