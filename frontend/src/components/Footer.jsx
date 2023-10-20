import Logo from '@/assets/images/RandoStore.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="bg-transparent">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              RandoStore™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
