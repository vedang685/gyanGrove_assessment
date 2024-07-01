export function convertGoogleDriveLink(driveLink: string): string {
    const fileIdMatch = driveLink.match(/\/d\/(.*?)\//);
    if (!fileIdMatch) {
      throw new Error('Invalid Google Drive link format');
    }
  
    const fileId = fileIdMatch[1];
    console.log(`https://drive.google.com/uc?export=view&id=${fileId}`)
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  