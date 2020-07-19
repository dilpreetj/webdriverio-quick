const path = require('path');

describe('Upload File Hidden Input', () => {
  it('should be able to upload a file on hidden input', () => {
    // find your selectors
    const inputDiv = $('#div_file_box0');
    const input = $('#input_file0');
    const submitBtn = $('.convert_button');

    // store test file path
    const filePath = path.join(__dirname, '../data/chrome.png');

    // use browser.uploadFile to upload the test file
    const remoteFilePath = browser.uploadFile(filePath);

    // access the test page
    browser.url('https://online2pdf.com/');

    // change display to block from none for the hidden div
    browser.execute(function () {
      document.getElementById('div_file_box0').style.display = 'block';
    });

    // wait for div to be displayed
    inputDiv.waitForDisplayed();

    // set file path value in the input field
    input.setValue(remoteFilePath);
    submitBtn.click(); // click the submit button

    // temporary pause to see if the file got upload successfully
    browser.pause(5000);

    // Add your assertion here
  });
});
