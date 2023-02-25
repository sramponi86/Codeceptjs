Feature('Zero Bank application');

Before(({ I }) => {
    console.log('BEFORE HOOK')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
});

Scenario('Login test',  ({ I }) => {
    I.click('#signin_button')
    I.seeElement('#login_form')

    I.fillField('#user_login','invalid username')
    I.fillField('#user_password','invalid password')
    I.click('.btn-primary')

    I.seeElement('.alert-error')
});

After(({ I }) => {
    console.log('AFTER HOOK')
});