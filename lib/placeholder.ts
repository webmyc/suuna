// Generate a simple SVG placeholder for images
export function getPlaceholder(width = 800, height = 600, text = 'SUUNA'): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0E2A22;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0A1C17;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="sans-serif"
        font-size="48"
        fill="#9EE6D6"
        opacity="0.5"
      >${text}</text>
    </svg>
  `
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}
