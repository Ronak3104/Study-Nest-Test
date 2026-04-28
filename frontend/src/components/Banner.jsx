import React from "react";
import { useState } from "react";
import { bannerStyles, customStyles } from "../assets/dummyStyles";
import { features, floatingIcons } from "../assets/dummyBanner";
import { CircleCheckBig, Sparkle, X } from "lucide-react";
import bannerImg from "../assets/BannerImage.png";
import video from "../assets/BannerVideo.mp4";

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={bannerStyles.container}>
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={bannerStyles.mainContentWrapper}>
        <div className={bannerStyles.mainContent}>
          <div className={bannerStyles.grid}>
            <div className={bannerStyles.leftContent}>
              <span className={bannerStyles.badge}>
                <Sparkle className={bannerStyles.badgeIcon} />
                Explore new horizons in education
              </span>
              <h1 className={bannerStyles.heading}>
                <span className={bannerStyles.headingSpan1}>
                  Empower Learning,
                </span>
                <span className={bannerStyles.headingSpan2}>
                  Simplify Teaching
                </span>
              </h1>

              <p className={bannerStyles.description}>
                Build your future with Study Nest LMS a smart, seamless platform
                designed to simplify learning and teaching. Empower your journey
                with organized courses, interactive tools, and a truly engaging
                learning experience.
              </p>

              {/* Features List */}
              <div className={bannerStyles.featuresGrid}>
                {features.map((feature, i) => (
                  <div key={i} className={bannerStyles.featureItem}>
                    <div className={bannerStyles.featureIconContainer}>
                      <span
                        className={`${bannerStyles.featureIcon} text-${feature.color}-500`}
                      >
                        <CircleCheckBig size={16} />
                      </span>
                    </div>
                    <span className={bannerStyles.featureItem}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/*btns*/}
              <div className={bannerStyles.buttonsContainer}>
                <a href="/courses" className={bannerStyles.buttonGetStarted}>
                  Get Started
                </a>

                <button
                  className={bannerStyles.buttonViewDemo}
                  onClick={() => setShowVideo(true)}
                >
                  View Demo Lecture
                </button>
              </div>
            </div>

            <div className={bannerStyles.imageContainer}>
              <img
                src={bannerImg}
                alt="Banner Image"
                className={bannerStyles.image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className={bannerStyles.videoModal.overlay}>
          <div className={bannerStyles.videoModal.container}>
            <iframe
              src={video}
              className={bannerStyles.videoModal.iframe}
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setShowVideo(false)}
              className={bannerStyles.videoModal.closeButton}
            >
              <span>
                <X className={bannerStyles.videoModal.closeIcon} />
              </span>
            </button>
          </div>
        </div>
      )}
      <style>{customStyles}</style>

      {/* Inline Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Banner;
