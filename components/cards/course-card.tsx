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
    <Link
      href={`/courses/${slug}`}
      className={cn("group block no-underline rounded-[10px]", className)}
    >
      <div
        className="w-full transition-transform duration-500 ease-out [transform:perspective(1200px)] group-hover:[transform:perspective(1200px)_rotateY(-20deg)] rounded-3xl border-[3px] border-white pt-6 px-6 pb-8 [transform-style:preserve-3d]"
        style={{
          background: "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px",
        }}
      >
        <div className="flex flex-col gap-4 items-start w-full">

          {/* Banner */}
          <div className="aspect-[1.538/1] rounded-2xl overflow-hidden relative w-full shrink-0">
            {imageUrl ? (
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
          </div>

          {/* Rating & price */}
          <div className="flex items-center justify-between w-full opacity-80">
            <div className="flex items-center gap-2 flex-1 overflow-hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 256 256"
                  className="size-[17px] shrink-0"
                  fill={i < rating ? "rgb(255, 204, 0)" : "rgb(220, 220, 220)"}
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L165.93,81.17l59.46,5.15a16,16,0,0,1,9.11,28.06Z" />
                </svg>
              ))}
            </div>

            <div className="flex items-center w-min shrink-0">
              <span className="whitespace-pre text-[16px] md:text-[19px] font-sans">$</span>
              <span className="whitespace-pre text-[16px] md:text-[19px] font-sans">{price}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="line-clamp-1 w-full whitespace-pre-wrap break-words m-0 font-sans font-medium text-[16px] tracking-[-0.02em] leading-[1.4em] text-foreground">
            {title}
          </h4>

          {/* Description */}
          {description && (
            <p className="line-clamp-2 w-full whitespace-pre-wrap break-words opacity-80 m-0 font-inter text-[14px] font-normal tracking-[-0.01em] leading-[24px] text-foreground">
              {description}
            </p>
          )}

          {/* Badge & level */}
          <div className="flex flex-wrap items-center justify-between w-full">
            {badge && (
              <div className="bg-primary-muted rounded-lg py-1 px-4 overflow-hidden flex items-center justify-center shrink-0">
                <span className="text-primary whitespace-pre text-sm">{badge}</span>
              </div>
            )}

            {level && (
              <div className="flex items-center overflow-hidden opacity-80 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 shrink-0 opacity-70"
                >
                  <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
                </svg>
                <span className="whitespace-pre">{level}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </Link>
  );
}
