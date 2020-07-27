describe('New Tab', () => {
  it('should be able to switch to a new tab', () => {
    // find selector
    const link = $('.example a');

    // access the page
    browser.url('/windows');

    // click on the link to open a new window
    link.click();

    // switch window
    browser.switchWindow('/windows/new');

    // optional assertion
    expect(browser).toHaveTitle('New Window');
  });

  it('should close the new tab and switch back to old tab', () => {
    // close new window
    browser.closeWindow();

    // switch back to old window
    browser.switchWindow('/windows');

    // optional assertion
    expect(browser).toHaveTitle('The Internet');
  });
});
