// Fetch events from Luma calendar
export async function fetchLumaEvents() {
  try {
    // Try to fetch from Luma's public API endpoint
    const response = await fetch('https://api.lu.ma/public/v1/calendar/get-items?calendar_api_id=cal-rx0Dc6lhU837mI3', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'SUUNA-Website/1.0',
      },
    });

    if (!response.ok) {
      console.warn('Luma API returned status:', response.status);
      return getFallbackEvents();
    }

    const data = await response.json();

    if (!data || !data.entries || !Array.isArray(data.entries)) {
      console.warn('Luma API returned invalid data structure');
      return getFallbackEvents();
    }

    // Transform Luma data to our format with better field extraction
    const events = data.entries
      .map((event: any) => {
        // Extract event ID
        const eventId = event.api_id || event.event?.api_id || event.event_id || 'unknown';

        // Extract URL
        let eventUrl = event.url || event.event?.url;
        if (!eventUrl && eventId !== 'unknown') {
          eventUrl = `https://lu.ma/${eventId}`;
        }
        eventUrl = eventUrl || 'https://lu.ma/suuna';

        // Extract title
        const title = event.name || event.event?.name || event.title || 'SUUNA Event';

        // Extract dates
        const start = event.start_at || event.event?.start_at || event.start || new Date().toISOString();
        const end = event.end_at || event.event?.end_at || event.end || start;

        // Extract location with multiple fallbacks
        let location = 'Online';
        if (event.geo_address_json?.city) {
          location = event.geo_address_json.city;
        } else if (event.geo_address_json?.full_address) {
          location = event.geo_address_json.full_address;
        } else if (event.location) {
          location = event.location;
        } else if (event.event?.geo_address_json?.city) {
          location = event.event.geo_address_json.city;
        }

        // Extract image with multiple fallbacks
        const image = event.cover_url ||
                     event.event?.cover_url ||
                     event.image_url ||
                     event.event?.image_url ||
                     event.cover_photo?.url ||
                     '/images/events/default.jpg';

        // Extract host
        const host = event.hosts?.[0]?.name ||
                    event.event?.hosts?.[0]?.name ||
                    event.host_name ||
                    'SUUNA Community';

        // Extract price with better formatting
        let price = 'Free';
        const ticketPrice = event.ticket_types?.[0]?.price || event.event?.ticket_types?.[0]?.price;
        if (ticketPrice && ticketPrice > 0) {
          const currency = event.ticket_types?.[0]?.currency || 'EUR';
          price = `${currency === 'EUR' ? '€' : '$'}${ticketPrice}`;
        }

        // Extract description/excerpt
        const description = event.description || event.event?.description || event.excerpt || '';
        const excerpt = description.replace(/<[^>]*>/g, '').substring(0, 200);

        // Extract tags
        const tags = event.topics || event.event?.topics || [];

        return {
          id: eventId,
          url: eventUrl,
          title,
          start,
          end,
          location,
          image,
          host,
          price,
          tags,
          excerpt,
          date: new Date(start), // For sorting
        };
      })
      .filter((e: any) => e.date > new Date()) // Only future events
      .sort((a: any, b: any) => a.date.getTime() - b.date.getTime()) // Sort by date
      .slice(0, 10); // Limit to 10 events

    return events.length > 0 ? events : getFallbackEvents();

  } catch (error) {
    console.error('Error fetching Luma events:', error);
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
