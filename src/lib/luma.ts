// Fetch events from Luma calendar
export async function fetchLumaEvents() {
  try {
    // Try to fetch from Luma's public API endpoint
    const response = await fetch('https://api.lu.ma/public/v1/calendar/get-items?calendar_api_id=cal-rx0Dc6lhU837mI3', {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.log('Luma API not available, using fallback');
      return getFallbackEvents();
    }

    const data = await response.json();

    // Transform Luma data to our format
    return data.entries?.map((event: any) => ({
      id: event.api_id || event.event_id,
      url: event.url || `https://lu.ma/${event.api_id}`,
      title: event.name || event.title,
      start: event.start_at || event.start,
      end: event.end_at || event.end,
      location: event.geo_address_json?.city || event.location || 'Online',
      image: event.cover_url || event.image_url || '/images/events/default.jpg',
      host: event.hosts?.[0]?.name || 'SUUNA Community',
      price: event.ticket_types?.[0]?.price ? `€${event.ticket_types[0].price}` : 'Free',
      tags: event.topics || [],
      excerpt: event.description?.substring(0, 150) || '',
    })).filter((e: any) => new Date(e.start) > new Date()) // Only future events
      .slice(0, 10) || getFallbackEvents();

  } catch (error) {
    console.log('Error fetching Luma events:', error);
    return getFallbackEvents();
  }
}

// Fallback events if Luma API is unavailable
function getFallbackEvents() {
  return [
    {
      id: "luma-embed",
      url: "https://lu.ma/suuna",
      title: "View All Events on Luma",
      start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
      location: "Visit lu.ma/suuna",
      image: "/images/events/luma-calendar.jpg",
      host: "SUUNA Community",
      price: "Free",
      tags: ["Community", "Events"],
      excerpt: "Check out all upcoming SUUNA community events, workshops, and gatherings on our Luma calendar."
    }
  ];
}
