Feature('example');

Scenario('Should load example.com website',  ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.see("Example")
    I.seeElement('h1')
    I.dontSeeElement("#idontexist")
});

Scenario('Second test',  ({ I }) => {
    I.amOnPage("https://www.example.com")
    I.see("Example")
    I.seeElement('h1')
    I.dontSeeElement("#idontexist")
});
