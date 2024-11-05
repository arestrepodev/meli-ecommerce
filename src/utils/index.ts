const AUTHOR = { name: "Arnold", lastname: "Restrepo" } as const;
const formatSearchQuery = (query: string): string => {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return '';
  return encodeURIComponent(trimmedQuery);
};

export { AUTHOR, formatSearchQuery };