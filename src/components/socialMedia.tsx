import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="w-full flex justify-center">
      <a href="https://www.instagram.com/finchisreading/" target="_blank" className="mr-1 text-orange-500"><FaInstagram size='2rem' /></a>
      <a href="https://www.linkedin.com/in/solenne-dauriac/" target="_blank" className="ml-1 text-orange-500"><FaLinkedin size='2rem' /></a>
    </div>
  )
}
