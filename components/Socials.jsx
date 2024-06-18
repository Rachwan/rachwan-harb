import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/rachwan-harb" },
  { icon: <FaGithub />, path: "https://github.com/Rachwan" },
  { icon: <FaWhatsapp />, path: "https://wa.me/96176445648" },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/share/4AUaVF5VxfxN31Si/?mibextid=qi2Omg",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
