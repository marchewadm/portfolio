export function useSearchQuery() {
  return useState("searchQuery", () => "");
}
