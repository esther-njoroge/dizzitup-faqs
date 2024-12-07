// createEmotionCache.js
import createCache from '@emotion/cache';

// This function creates a new Emotion cache instance for each request
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
