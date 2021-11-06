import Link from "next/link";
import {SiLinkedin, SiGithub, SiDribbble} from 'react-icons/si';
const Footer = () => {
  return (
    <footer className="bg-black-light text-white h-20 p-2">
      <p className="text-center p-4">
        {" "}
        Developed by &copy; stmeem{" "}
        <span role="img" aria-label="heart">
          💗
        </span>
      </p>
      <div className='flex justify-center'>
        <div className="mr-3">
          <Link href="https://www.linkedin.com/in/sumaiyatasmeem/"><a target="_blank"><SiLinkedin/></a></Link>
        </div>
        <div className="mr-3">
          <Link href="https://github.com/stmeem"><a target="_blank"><SiGithub/></a></Link>
        </div>
        <div className="mr-3">
          <Link href="https://dribbble.com/sumaiyatasmeem"><a target="_blank"><SiDribbble/></a></Link>
        </div>
        
      </div>
    </footer>
  );
};
export default Footer;