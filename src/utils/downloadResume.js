// Utility function for downloading resume
export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume/my old cv.pdf';
  link.download = 'Resume.pdf'; // This will be the downloaded file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Alternative function to open resume in new tab
export const openResumeInNewTab = () => {
  window.open('/resume/my old cv.pdf', '_blank');
};