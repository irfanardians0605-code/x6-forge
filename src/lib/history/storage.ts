import { HistoryItem } from "./types";

const STORAGE_KEY = "x6forge-history";

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as HistoryItem[];
  } catch {
    return [];
  }
}

export function saveHistory(item: HistoryItem): void {
  const history = getHistory();

  history.unshift(item);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function removeHistory(id: string): void {
  const history = getHistory();

  const filtered = history.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(filtered)
  );
}

export function clearHistory(): void {
  localStorage.removeItem(STORAGE_KEY);
}