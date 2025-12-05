// Fetch events from Luma calendar
export async function fetchLumaEvents() {
  try {
    // Try to fetch from Luma's public API endpoint
    const response = await fetch('https://api.lu.ma/public/v1/calendar/get-items?calendar_api_id=cal-rx0Dc6lhU837mI3', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
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

    console.log(`✅ Fetched ${events.length} events from Luma API`);
    return events.length > 0 ? events : getFallbackEvents();

  } catch (error) {
    console.error('❌ Error fetching Luma events:', error);
    return getFallbackEvents();
  }
}

// Fallback events if Luma API is unavailable - ACTUAL current events from lu.ma/suuna
function getFallbackEvents() {
  return [
    {
      id: "crshpi7b",
      url: "https://lu.ma/crshpi7b",
      title: "🌿 REGENERA - o zi de Regenerare",
      start: "2025-12-14T09:00:00Z",
      end: "2025-12-14T18:00:00Z",
      location: "Hunedoara, Romania",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/u9/36e49dce-c839-4ece-bbe1-c86e066d94ce.png",
      host: "Laura Calmore & Gabriel Cătălin Silviu Troia",
      price: "See event page",
      tags: ["Regeneration", "Wellness"],
      excerpt: "O zi de regenerare și reconectare cu natura și comunitatea. Vino să ne bucurăm împreună de o zi plină de activități și practici de regenerare.",
      date: new Date("2025-12-14T09:00:00Z")
    },
    {
      id: "sqi159ke",
      url: "https://lu.ma/sqi159ke",
      title: "REGENERA Online Circle – A pause to practice inner-led change for leaders",
      start: "2025-12-18T18:00:00Z",
      end: "2025-12-18T20:00:00Z",
      location: "Virtual",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/kq/12ac42e0-6734-4f40-ba16-51dfdd07001c.png",
      host: "Gabriel Cătălin Silviu Troia & Laura Calmore",
      price: "Free",
      tags: ["Leadership", "Online"],
      excerpt: "A space for leaders to pause, reflect, and practice inner-led change. Join us for a monthly circle where we explore what it means to lead from within.",
      date: new Date("2025-12-18T18:00:00Z")
    },
    {
      id: "ihvsas92",
      url: "https://lu.ma/ihvsas92",
      title: "Doshele & emoțiile",
      start: "2025-12-19T18:00:00Z",
      end: "2025-12-19T20:00:00Z",
      location: "Zoom",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/t3/093436ab-291e-4dc5-9f34-a6fe7e0f167f.png",
      host: "Ioana Lazăr",
      price: "Free",
      tags: ["Ayurveda", "Emotions"],
      excerpt: "Explorăm legătura dintre doshele ayurvedice și emoțiile noastre. O sesiune interactivă despre cum să înțelegem și să gestionăm mai bine emoțiile.",
      date: new Date("2025-12-19T18:00:00Z")
    },
    {
      id: "hbobpn11",
      url: "https://lu.ma/hbobpn11",
      title: "Cerc de lună nouă pentru femei - SUUNA LUUNA (decembrie)",
      start: "2025-12-30T18:00:00Z",
      end: "2025-12-30T20:00:00Z",
      location: "Zoom",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/ac/f4ccf36c-64e4-4cd8-929f-1bef33934ac7.png",
      host: "Dana Dragomirescu, Maria Magdalena Asaftei & Romina Beatris Dovleac",
      price: "RON 75",
      tags: ["Women's Circle", "New Moon"],
      excerpt: "Cerc de lună nouă dedicat femeilor. Un spațiu sacru de întâlnire, împărțire și vindecare în comunitate. Celebrăm luna nouă împreună.",
      date: new Date("2025-12-30T18:00:00Z")
    },
    {
      id: "x29pi418",
      url: "https://lu.ma/x29pi418",
      title: "REGENERA Online Circle – A pause to practice inner-led change for leaders",
      start: "2026-01-15T18:00:00Z",
      end: "2026-01-15T20:00:00Z",
      location: "Virtual",
      image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/kq/12ac42e0-6734-4f40-ba16-51dfdd07001c.png",
      host: "Laura Calmore & Gabriel Cătălin Silviu Troia",
      price: "Free",
      tags: ["Leadership", "Online"],
      excerpt: "Monthly online circle for leaders exploring inner-led change. A space to pause, reflect, and connect with others on the path of conscious leadership.",
      date: new Date("2026-01-15T18:00:00Z")
    }
  ].filter((e: any) => e.date > new Date()); // Only future events
}
