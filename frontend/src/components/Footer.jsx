import React from "react";
import {
  footerStyles,
  footerBackgroundStyles,
  contactIconGradients,
  iconColors,
  footerCustomStyles,
} from "../assets/dummyStyles";
import dummyFooter from "../assets/dummyFooter";
const { quickLinks, supportLinks, contactInfo } = dummyFooter.default || dummyFooter;
const socialIcons = dummyFooter.socialIcons || []; // fallback if not named export
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping,
  Globe2,
} from "lucide-react";
import logo from "../assets/logo.png";

const iconMap = {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  HelpCircle,
  Shield,
  HandHelping,
};

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerBackgroundStyles.backgroundContainer}>
        <div className={footerBackgroundStyles.floatingOrb1}></div>
        <div className={footerBackgroundStyles.floatingOrb2}></div>
        <div className={footerBackgroundStyles.floatingOrb3}></div>
        <div className={footerBackgroundStyles.floatingOrb4}></div>

        {/* subtle grid overlay, reduce opacity on small screens */}
        <div className={footerBackgroundStyles.gridOverlay}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          <div className={footerStyles.brandSection}>
            <div className={footerStyles.brandTransform}>
              <div className={footerStyles.brandContainer}>
                <div className={footerStyles.brandGradient}></div>
                <div className="relative font-serif flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-12 h-12" />
                  <h3 className={footerStyles.brandTitle}>Study Nest</h3>
                </div>
              </div>
              <p className={footerStyles.brandDescription}>
                Transform your learning experience with Study Nest LMS - your
                smart, seamless.
              </p>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className={`${footerStyles.sectionHeader} ${iconColors.cyan}`}>
              <ArrowRight className={footerStyles.sectionIcon} />
              Quick Links
            </h4>
            <ul className={footerStyles.linksList}>
              {quickLinks.map((link, index) => {
                const Icon = iconMap[link.iconKey] || ArrowRight;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${footerStyles.linkItem} ${iconColors.cyan}`}
                      style={{
                        transitionDelay: `${index * 80}ms`,
                      }}
                    >
                      <Icon
                        className={`${footerStyles.linkIcon} ${iconColors.cyan}`}
                      />
                      <span className="truncate">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4
              className={`${footerStyles.sectionHeader} ${iconColors.purple}`}
            >
              <HandHelping className={footerStyles.sectionIcon} />
              Support
            </h4>
            <ul className={footerStyles.linksList}>
              {supportLinks.map((link, index) => {
                const Icon = iconMap[link.iconKey] || HelpCircle;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`${footerStyles.linkItem} ${iconColors.purple}`}
                      style={{
                        transitionDelay: `${index * 80}ms`,
                      }}
                    >
                      <Icon
                        className={`${footerStyles.linkIcon} ${iconColors.purple}`}
                      />
                      <span className="truncate">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`${footerStyles.sectionHeader} ${iconColors.emerald}`}
            >
              <Phone className={footerStyles.sectionIcon} />
              Contact Us
            </h4>
            <div className={footerStyles.contactSpace}>
              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.address}`}
                >
                  <MapPin
                    className={`${footerStyles.contactIcon} ${iconColors.cyan600}`}
                  />
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.addressLine1}
                  </p>
                  <p className={footerStyles.contactTextSecondary}>
                    {contactInfo.city}
                  </p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.phone}`}
                >
                  <Phone
                    className={`${footerStyles.contactIcon} ${iconColors.purple600}`}
                  />
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.phone}
                  </p>
                  <p className={footerStyles.contactTextSecondary}>
                    {contactInfo.phoneHours}
                  </p>
                </div>
              </div>

              <div className={footerStyles.contactItem}>
                <div
                  className={`${footerStyles.contactIconContainer} ${contactIconGradients.email}`}
                >
                  <Mail
                    className={`${footerStyles.contactIcon} ${iconColors.emerald600}`}
                  />
                </div>
                <div className={footerStyles.contactTextContainer}>
                  <p className={footerStyles.contactTextPrimary}>
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{footerCustomStyles}</style>
    </footer>
  );
};

export default Footer;
