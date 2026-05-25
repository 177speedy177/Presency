const PEXELS_API_KEY = "aqIhhTe0RbA7UQNfCLd6oC05YnvXLEfcA7DnO68JrHaMZgNfthPDlPVS"

export interface PexelsPhoto {
  id: number
  url: string
  photographer: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  alt: string
}

export async function fetchPexelsPhoto(
  query: string,
  orientation: "landscape" | "portrait" = "landscape"
): Promise<PexelsPhoto | null> {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=${orientation}`,
      { headers: { Authorization: PEXELS_API_KEY } }
    )
    const data = await res.json()
    return data.photos?.[0] ?? null
  } catch {
    return null
  }
}

// Pre-fetched image URLs (hardcoded at build time to avoid runtime API calls)
export const PEXELS_IMAGES = {
  hero: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
  reviewPhone: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1280",
  websiteLaptop: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1280",
  seoSearch: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1280",
  businessSuccess: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
  dentalOffice: "https://images.pexels.com/photos/7653331/pexels-photo-7653331.jpeg?auto=compress&cs=tinysrgb&w=800",
  hairSalon: "https://images.pexels.com/photos/13758248/pexels-photo-13758248.jpeg?auto=compress&cs=tinysrgb&w=800",
  restaurant: "https://images.pexels.com/photos/14590688/pexels-photo-14590688.jpeg?auto=compress&cs=tinysrgb&w=800",
}
