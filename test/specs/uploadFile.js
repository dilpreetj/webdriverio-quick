const path = require('path');

describe('Upload File', () => {
  it('should be able to upload a file', () => {
    // find selectors
    const input = $('#file-upload');
    const submitBtn = $('#file-submit');

    // store test file path
    const filePath = path.join(__dirname, '../data/chrome.png');

    // use browser.uploadFile to upload the test file
    const remoteFilePath = browser.uploadFile(filePath);

    // access the test page
    browser.url('/upload');

    // set file path value in the input field
    input.setValue(remoteFilePath);
    submitBtn.click(); // click the submit button

    browser.pause(2000); // temporary pause to see if the file got upload successfully

    // Add your assertion here
  });
});
