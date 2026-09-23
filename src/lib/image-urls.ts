export function isFirebaseStorageImage(src: string | undefined) {
  if (!src) return false;

  try {
    return new URL(src).hostname === "firebasestorage.googleapis.com";
  } catch {
    return false;
  }
}
