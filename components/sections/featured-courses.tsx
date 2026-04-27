import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { CourseCard } from "@/components/cards/course-card";
import { cn } from "@/lib/utils";

const COURSES = [
  {
    slug: "administrative-features-of-open-edx-lms",
    title: "Administrative Features of Open edX LMS",
    description:
      "Gain full control over your Open edX LMS by mastering platform administration, user management, and advanced configuration options.",
    imageUrl: "/assets/images/course-admin-features.jpg",
    price: 150,
    rating: 5,
    badge: "Featured",
    level: "Intermediate" as const,
  },
  {
    slug: "open-edx-course-authoring",
    title: "Course Authoring on Open edX using Studio",
    description:
      "Master the process of building and structuring courses using Open edX Studio, from content creation to interactive elements.",
    imageUrl: "/assets/images/course-authoring.jpg",
    price: 150,
    rating: 5,
    badge: "Featured",
    level: "Beginner" as const,
  },
  {
    slug: "dashboard-and-report-generation-from-open-edx",
    title: "Dashboard and Report Generation from Open edX",
    description:
      "Learn how to navigate the Open edX Instructor Dashboard, manage learners, and generate insightful reports for data-driven decision-making.",
    imageUrl: "/assets/images/course-dashboard.jpg",
    price: 150,
    rating: 5,
    badge: "Featured",
    level: "Advanced" as const,
  },
  {
    slug: "abc-of-instructional-design",
    title: "ABC of Instructional Design",
    description:
      "Learn the core principles of instructional design and how to create engaging, learner-centered online courses.",
    imageUrl: "/assets/images/course-instructional-design.jpg",
    price: 100,
    rating: 5,
    badge: "Featured",
    level: "Beginner" as const,
  },
  {
    slug: "theme-development-in-open-edx",
    title: "Theme Development in Open edX",
    description:
      "Learn how to customize the look and feel of Open edX by developing custom themes for a branded learning experience.",
    imageUrl: "/assets/images/course-theme-dev.jpg",
    price: 100,
    rating: 5,
    badge: "Featured",
    level: "Advanced" as const,
  },
  {
    slug: "case-studies-for-project-managers",
    title: "Case Studies for Project Managers",
    description:
      "Learn how successful online learning projects are managed through real-world case studies and best practices.",
    imageUrl: "/assets/images/course-case-studies.jpg",
    price: 150,
    rating: 5,
    badge: "Featured",
    level: "Advanced" as const,
  },
];

export interface FeaturedCoursesProps {
  className?: string;
}

export function FeaturedCourses({ className }: FeaturedCoursesProps) {
  return (
    <section className={cn("relative py-16 overflow-hidden", className)}>

      <div className="relative z-10 max-w-[1250px] mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel
            className="w-fit whitespace-nowrap"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="size-5">
                <path d="M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z" />
              </svg>
            }
            label="Our Courses"
          />
          <h2 className="text-foreground text-[32px] md:text-[42px] mt-4 mb-4 font-display font-medium tracking-[-0.01em] leading-[1.2em]">Featured Courses</h2>
          <p className="max-w-2xl mx-auto font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground">
            Our courses provide the essential knowledge to build and manage online learning
            platforms, with a special focus on Open edX and best practices in digital education
          </p>
        </div>

        <div className="relative">
          {/* Radial glow — centered on the 6 cards, fades to transparent at all edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 55% at 50% 50%, #dde9f8 0%, transparent 100%)",
            }}
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 btn-view-courses"
            style={{
              borderRadius: "100px",
              border: "1px solid rgb(0, 0, 0)",
              padding: "8px 24px",
              textDecoration: "none",
            }}
          >
            <p style={{ margin: 0, fontSize: "16px" }}>View Courses</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              style={{ width: "22px", height: "22px", flexShrink: 0 }}
            >
              <g>
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
