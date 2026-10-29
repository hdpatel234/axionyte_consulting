"use client";

import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  type: "image" | "video";
  src: string;
  alt?: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  type,
  src,
  alt = "Lightbox Preview",
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const id = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <div
      className="netzon-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="netzon-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="netzon-lightbox-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {type === "image" ? (
          <img src={src} alt={alt} />
        ) : (
          <div className="video-responsive-wrapper">
            <iframe
              src={getEmbedUrl(src)}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
