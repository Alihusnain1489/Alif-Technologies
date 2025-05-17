import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-center py-3 bottom-0 border-t border-gray-700">
      <p className="text-gray-500">
        &copy; {new Date().getFullYear()} Alif Technologies. All rights reserved.
      </p>
      <div className="flex items-center justify-center space-x-4 mt-2">
        <a 
          href="https://github.com/Alihusnain1489" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <GithubFilled style={{ fontSize: '24px' }} />
        </a>
        <a 
          href="https://www.linkedin.com/in/ali-husnain-790929252/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <LinkedinFilled style={{ fontSize: '24px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
