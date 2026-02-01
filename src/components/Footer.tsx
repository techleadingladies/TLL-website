import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import knowYourCountryLogo from '../assets/images/WOR001_FinalLogo_FullColour.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/code-of-conduct" className="text-gray-600 hover:text-purple-600">Code of Conduct</a></li>
              <li><a href="/speaker-details-form" className="text-gray-600 hover:text-purple-600">Speaker Details Form</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-purple-600">Frequently Asked Questions</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-purple-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/sponsors" className="text-gray-600 hover:text-purple-600">Sponsors</Link></li>
              <li><a href="/mentoring-program" className="text-gray-600 hover:text-purple-600">Mentoring Program</a></li>
              <li><a href="/slack-community" className="text-gray-600 hover:text-purple-600">Slack Community</a></li>
              <li><a href="/share-your-story" className="text-gray-600 hover:text-purple-600">Share your story</a></li>
              <li><a href="/leadership-training" className="text-gray-600 hover:text-purple-600">Leadership training</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-4">Acknowledgment</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We acknowledge the Traditional Owners of the land on which we work and recognise their continued custodianship and connection to the land, waters and community.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We pay our respects to them and their Elders past and present as our knowledge holders.
            </p>
            <a href="https://www.knowyourcountry.com.au/" target="_blank" rel="noopener noreferrer">
              <img 
                src={knowYourCountryLogo} 
                alt="Know Your Country" 
                className="h-16"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Tech Leading Ladies. Powered by Kaleida ABN 92 658 168 131
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://twitter.com/techleadladies" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/tech-leading-ladies/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="https://github.com/TechLeadingLadies" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="mailto:techleadingladies@gmail.com">
              <Mail className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;