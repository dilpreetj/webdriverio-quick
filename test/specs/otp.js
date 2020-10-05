const accountSid = 'YOUR_SID';
const authToken = 'YOUR_TOKEN';
const client = require('twilio')(accountSid, authToken);

describe('OTP', () => {
  it('Login with OTP', () => {
    const username = $('#login_field');
    const pass = $('#password');
    const signInBtn = $('input[type="submit"]');
    const otpField = $('#otp');
    const verifyBtn = $(
      'form[action="/sessions/two-factor"] button[type="submit"]'
    );

    browser.url('https://github.com/login');
    username.setValue('your_email@mail.com');
    pass.setValue('your_pass123');
    signInBtn.click();

    // Get OTP ...
    const otp = browser.call(() => {
      return new Promise((resolve, reject) => {
        try {
          client.messages.list({ limit: 1 }).then((messages) =>
            messages.forEach((m) => {
              // console.log(m.body.match(/\d+/)[0]);
              resolve(m.body.match(/\d+/)[0]);
            })
          );
        } catch (error) {
          reject(error);
        }
      });
    });

    otpField.setValue(otp);
    verifyBtn.click();
    expect(browser).toHaveUrl('https://github.com/');
  });
});
