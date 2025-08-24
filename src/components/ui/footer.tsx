import { Badge } from './badge';
import { Separator } from './separator';
const exskonLogo = '/lovable-uploads/9ac22515-acd2-4990-b163-72f67ccad3aa.png';

export const Footer = () => {
  const footerLinks = {
    Services: [
      'Installation',
      'Maintenance',
      'Modernization',
      'Emergency Service'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'News'
    ],
    Support: [
      'Contact',
      'FAQs',
      'Documentation',
      'Service Areas'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Safety Standards',
      'Certifications'
    ]
  };

  return (
    <footer className="bg-surface-elevated border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src={exskonLogo}
              alt="Exskon Elevator"
              className="h-12 w-auto mb-6"
            />
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading elevator solutions provider with over 15 years of experience. 
              We prioritize safety, reliability, and customer satisfaction in every project.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">Certified</Badge>
              <Badge variant="outline">24/7 Support</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Licensed • Bonded • Insured
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Exskon Elevator. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Emergency: +91 86886 62615</span>
            <span>•</span>
            <span>exskonelevator@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};