"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Code, MapPin, Mail, Clock } from "lucide-react";
import { ABOUT_ME, SOCIAL_LINKS } from "@/components/constants/data";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

// =============================================
// UI COMPONENTS
// =============================================
const ProfileImage = () => (
  <div className="flex-shrink-0">
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
      <Image
        src={ABOUT_ME.profileImage}
        alt={ABOUT_ME.name}
        width={64}
        height={64}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  </div>
);

// =============================================
// SOCIAL LINKS DATA
// =============================================
const SOCIAL_ICONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
    hoverBg: "hover:bg-[#333] dark:hover:bg-[#f0f0f0]",
    hoverText: "hover:text-white dark:hover:text-[#333]",
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    hoverBg: "hover:bg-[#0A66C2]",
    hoverText: "hover:text-white",
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "Twitter",
    icon: <FaXTwitter className="w-5 h-5" />,
    hoverBg: "hover:bg-[#000] dark:hover:bg-white",
    hoverText: "hover:text-white dark:hover:text-black",
  },
  {
    href: SOCIAL_LINKS.peerlist,
    label: "Peerlist",
    icon: <SiPeerlist className="w-5 h-5" />,
    hoverBg: "hover:bg-[#00AA45]",
    hoverText: "hover:text-white",
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    hoverBg: "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    hoverText: "hover:text-white",
  },
];

// =============================================
// CUSTOM HOOK FOR TIME
// =============================================
const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

// =============================================
// CUSTOM HOOK FOR ROLE SWITCHING
// =============================================
const ROLES = [
  "Software Developer",
  "Open Source Contributor",
  "AI/ML Enthusiast",
  "Detail Oriented"
];

const useRoleSwitcher = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsVisible(true);
      }, 300); // Wait for fade out before changing
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return { role: ROLES[currentRoleIndex], isVisible };
};

// =============================================
// MAIN COMPONENT
// =============================================
const Header = () => {
  const currentTime = useCurrentTime();
  const { role: currentRole, isVisible } = useRoleSwitcher();

  return (
    <section className="pt-5 pb-10">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <ProfileImage />

        <div className="flex-1">
          {/* Name with Availability Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Georgia, Garamond, serif' }}>
              {ABOUT_ME.name}
            </h1>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Open to work</span>
            </div>
          </div>
          <p 
            className="text-base text-muted-foreground transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            {currentRole}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                <Code className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-foreground">{ABOUT_ME.title}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-foreground">{currentTime}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-foreground">{ABOUT_ME.location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-muted-foreground" />
              </div>
              <a href={SOCIAL_LINKS.email} className="text-foreground hover:text-foreground/80 transition-colors">
                {ABOUT_ME.email}
              </a>
            </div>
          </div>

      {/* Bio Description */}
      <div className="mb-6 space-y-3">
        {ABOUT_ME.description.map((paragraph, index) => (
          <p key={index} className="text-[15px] sm:text-base text-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Resume Button */}
        {SOCIAL_LINKS.resume && SOCIAL_LINKS.resume.trim() !== "" && (
          <Link
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-10 px-4 rounded-full bg-muted text-foreground text-[13px] font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Resume"
          >
            Resume
            <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
          </Link>
        )}
        
        {/* Other Social Icons */}
        {SOCIAL_ICONS.filter((social) => social.href && social.href.trim() !== "").map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverBg} ${social.hoverText}`}
            aria-label={social.label}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Header;
