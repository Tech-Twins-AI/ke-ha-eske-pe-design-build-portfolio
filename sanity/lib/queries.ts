import { defineQuery } from "next-sanity";

// Fetch all testimonials
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    quote,
    "avatar": avatar.asset->url
  }
`);

// Fetch all projects for the Works grid
export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    "featuredImage": featuredImage.asset->url
  }
`);

// Fetch a single project by slug for the detail page
export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    area,
    year,
    clientName,
    description,
    "featuredImage": featuredImage.asset->url,
    "gallery": gallery[].asset->url,
    specifications[] {
      label,
      value
    }
  }
`);