import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/Gowri-US",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/gowri-u-s-0857b6306/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/paruzzzgowri/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start gap-4 mb-8">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-gray-700 hover:border-red-500 hover:bg-red-500/10 transition-all text-gray-300 hover:text-red-500"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;