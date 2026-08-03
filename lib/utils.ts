export function getEmbedVideoUrl(url: string): { type: "youtube" | "vimeo" | "direct"; url: string } {
  if (!url) return { type: "direct", url: "" };

  const trimmed = url.trim();

  // YouTube match
  const ytMatch = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: "youtube",
      url: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0&rel=0`,
    };
  }

  // Vimeo match
  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: "vimeo",
      url: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
    };
  }

  return { type: "direct", url: trimmed };
}
