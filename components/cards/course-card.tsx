"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  slug: string;
  price?: number;
  rating?: number;
  badge?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  enrollmentCount?: number;
  className?: string;
}

export function CourseCard({
  title,
  description,
  imageUrl,
  slug,
  price = 99,
  rating = 5,
  badge,
  level,
  className,
}: CourseCardProps) {
  return (
    // framer-586095: outer link — width 360px, border-radius 10px, column flex
    <Link
      href={`/courses/${slug}`}
      className={cn("group block no-underline", className)}
      style={{ borderRadius: "10px" }}
    >
      {/* framer-2u2tyt: white gradient container — padding 24/24/32/24, radius 24, shadow, 3D hover */}
      <div
        className="w-full transition-transform duration-500 ease-out [transform:perspective(1200px)] group-hover:[transform:perspective(1200px)_rotateY(-20deg)]"
        style={{
          "--border-bottom-width": "3px",
          "--border-color": "rgb(255, 255, 255)",
          "--border-left-width": "3px",
          "--border-right-width": "3px",
          "--border-style": "solid",
          "--border-top-width": "3px",
          background:
            "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)",
          borderRadius: "24px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px",
          border: "3px solid rgb(255, 255, 255)",
          padding: "24px 24px 32px 24px",
          transformStyle: "preserve-3d",
          opacity: 1,
        } as React.CSSProperties}
      >
        {/* framer-sg4nu3: content column — gap 16px */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* framer-1w0exhq: banner — aspect-ratio 1.538:1, radius 16 */}
          <div
            style={{
              aspectRatio: "1.538812785388128 / 1",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              width: "100%",
              flexShrink: 0,
            }}
          >
            {imageUrl ? (
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
          </div>

          {/* framer-tqodp: rating & price row — space-between, opacity 0.8 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              opacity: 0.8,
            }}
          >
            {/* framer-1p4l81w: stars row — gap 8px, flex 1, overflow hidden */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                flex: "1 0 0px",
                overflow: "hidden",
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                // framer-*-container: each star — width 17px, height 17px (aspect-ratio 1/1)
                <svg
                  key={i}
                  viewBox="0 0 256 256"
                  style={{ width: "17px", height: "17px", flexShrink: 0 }}
                  fill={i < rating ? "rgb(255, 204, 0)" : "rgb(220, 220, 220)"}
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L165.93,81.17l59.46,5.15a16,16,0,0,1,9.11,28.06Z" />
                </svg>
              ))}
            </div>

            {/* framer-p1lyhv: price — gap 0, width min-content */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0px",
                width: "min-content",
                flexShrink: 0,
              }}
            >
              <span style={{ whiteSpace: "pre", fontSize: "19px", fontFamily: "var(--font-poppins)" }}>$</span>
              <span style={{ whiteSpace: "pre", fontSize: "19px", fontFamily: "var(--font-poppins)" }}>{price}</span>
            </div>
          </div>

          {/* framer-14zxbuj: title — 1-line ellipsis, pre-wrap, word-break */}
          <h4
            className="line-clamp-1"
            style={{
              width: "100%",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              margin: 0,
            }}
          >
            {title}
          </h4>

          {/* framer-kvg7m7: description — 2-line ellipsis, opacity 0.8 */}
          {description && (
            <p
              className="line-clamp-2"
              style={{
                width: "100%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                opacity: 0.8,
                margin: 0,
                fontSize: "14px",
              }}
            >
              {description}
            </p>
          )}

          {/* framer-n1t5h5: tags row — flex-wrap, space-between */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* framer-d3x3fs: featured badge — padding 4/16, radius 8, overflow hidden */}
            {badge && (
              <div
                style={{
                  backgroundColor: "rgba(129, 79, 255, 0.15)",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: "rgb(129, 79, 255)",
                    whiteSpace: "pre",
                    fontSize: "14px",
                  }}
                >
                  {badge}
                </span>
              </div>
            )}

            {/* framer-14wdkbp: level — gap 0, overflow hidden */}
            {level && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0px",
                  overflow: "hidden",
                  opacity: 0.8,
                  flexShrink: 0,
                }}
              >
                {/* framer-mz7lmw-container: icon — width 24, height 24 (aspect-ratio 1/1) */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "24px", height: "24px", flexShrink: 0, opacity: 0.7 }}
                >
                  <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
                </svg>
                <span style={{ whiteSpace: "pre" }}>{level}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
