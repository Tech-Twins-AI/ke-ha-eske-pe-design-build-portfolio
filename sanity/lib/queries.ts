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

// Fetch projects with optional category and isFeatured filters
// Usage: sanityFetch({ query: PROJECTS_QUERY, params: { category: "exterior", isFeatured: true } })
// Pass null for params to get all projects
export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" 
    && defined(slug.current)
    && select(
      defined($category) && $category != "" => category == $category,
      true
    )
    && select(
      defined($isFeatured) => isFeatured == $isFeatured,
      true
    )
  ] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    location,
    isFeatured,
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
  }
`);

// Fetch featured projects only (one per category for homepage showcase)
export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current) && isFeatured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
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
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
  }
`);

// Fetch initial page of projects for a category (first page)
export const PROJECTS_INITIAL_QUERY = defineQuery(`
  *[_type == "project" 
    && defined(slug.current)
    && category == $category
  ] | order(_createdAt desc) [0...6] {
    _id,
    _createdAt,
    title,
    slug,
    category,
    location,
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
  }
`);

// Fetch next page of projects using cursor-based pagination (more performant)
// Uses _createdAt as primary sort with _id as tiebreaker for duplicates
export const PROJECTS_CURSOR_QUERY = defineQuery(`
  *[_type == "project" 
    && defined(slug.current)
    && category == $category
    && (
      _createdAt < $lastCreatedAt
      || (_createdAt == $lastCreatedAt && _id > $lastId)
    )
  ] | order(_createdAt desc) [0...6] {
    _id,
    _createdAt,
    title,
    slug,
    category,
    location,
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
  }
`);

// Count total projects in a category
export const PROJECTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "project" && defined(slug.current) && category == $category])
`);