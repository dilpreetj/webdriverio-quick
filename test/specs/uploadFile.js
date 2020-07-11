const path = require('path');

describe('Upload File', () => {
  it('should be able to upload a file', () => {
    const input = $('#file-upload');
    const submitBtn = $('#file-submit');
    const filePath = path.join(__dirname, '../data/chrome.png');
    const remoteFilePath = browser.uploadFile(filePath);

    browser.url('/upload');
    input.setValue(remoteFilePath);
    submitBtn.click();
    browser.pause(2000); // chai assertion
  });
});
