export function getUrl(): string {
  const domain = process.env.NEXT_PUBLIC_API_BASE_URL;
  return `${domain || ""}/api/v1`;
}
