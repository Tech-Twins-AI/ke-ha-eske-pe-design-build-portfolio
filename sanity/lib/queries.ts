import { defineQuery } from "next-sanity";

// ============================================
// Localized Field Helpers
// ============================================
// These GROQ snippets extract values from internationalized arrays
// with fallback to English if the requested language is not available

// For title field: coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled")
// For location field: coalesce(location[_key == $lang][0].value, location[_key == "en"][0].value)

// ============================================
// Testimonials Queries
// ============================================

// Fetch all testimonials with localized fields
// Params: { lang: "en" | "am" }
export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    "name": coalesce(name[_key == $lang][0].value, name[_key == "en"][0].value, ""),
    "role": coalesce(role[_key == $lang][0].value, role[_key == "en"][0].value),
    "company": coalesce(company[_key == $lang][0].value, company[_key == "en"][0].value),
    "quote": coalesce(quote[_key == $lang][0].value, quote[_key == "en"][0].value, ""),
    "avatar": avatar.asset->url
  }
`);

// ============================================
// Projects Queries
// ============================================

// Fetch projects with optional category and isFeatured filters
// Params: { lang: "en" | "am", category?: string, isFeatured?: boolean }
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
    "title": coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled"),
    slug,
    category,
    "location": coalesce(location[_key == $lang][0].value, location[_key == "en"][0].value),
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
// Params: { lang: "en" | "am" }
export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current) && isFeatured == true] | order(_createdAt desc) {
    _id,
    "title": coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled"),
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
// Params: { lang: "en" | "am", slug: string }
export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    "title": coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled"),
    slug,
    category,
    "location": coalesce(location[_key == $lang][0].value, location[_key == "en"][0].value),
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
// Params: { lang: "en" | "am", category: string }
export const PROJECTS_INITIAL_QUERY = defineQuery(`
  *[_type == "project" 
    && defined(slug.current)
    && category == $category
  ] | order(_createdAt desc) [0...6] {
    _id,
    _createdAt,
    "title": coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled"),
    slug,
    category,
    "location": coalesce(location[_key == $lang][0].value, location[_key == "en"][0].value),
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
// Params: { lang: "en" | "am", category: string, lastCreatedAt: string, lastId: string }
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
    "title": coalesce(title[_key == $lang][0].value, title[_key == "en"][0].value, "Untitled"),
    slug,
    category,
    "location": coalesce(location[_key == $lang][0].value, location[_key == "en"][0].value),
    "featuredImage": featuredImage.asset->{
      url,
      "width": metadata.dimensions.width,
      "height": metadata.dimensions.height,
      "lqip": metadata.lqip
    }
  }
`);

// Count total projects in a category (no localization needed)
// Params: { category: string }
export const PROJECTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "project" && defined(slug.current) && category == $category])
`);
