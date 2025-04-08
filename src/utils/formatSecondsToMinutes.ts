export function formatSecondsToMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secondsMod = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${secondsMod}`;
}
