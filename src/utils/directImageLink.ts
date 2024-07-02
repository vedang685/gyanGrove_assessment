export function convertGoogleDriveLink(sharingLink: string, size: number = 1000): string {
  const regex = /\/file\/d\/([^/]+)\//;
  const match = sharingLink.match(regex);

  if (!match) {
    throw new Error('Invalid Google Drive link format');
  }

  const fileId = match[1];
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
}
