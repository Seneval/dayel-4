export function getImagePath(src: string): string {
  // In production with basePath, prepend the basePath to image URLs
  const basePath = process.env.NODE_ENV === 'production' ? '/dayel-4' : '';
  return `${basePath}${src}`;
}