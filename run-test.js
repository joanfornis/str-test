describe('test str-test', function() {
    test('search map', function(browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body')
        .assert.visible('.autocomplete-input')
        .sendKeys('.autocomplete-input', 'Stradivarius, Inditex')
        .assert.visible('.autocomplete-option')
        .click('.autocomplete-option:first-of-type')
        .end();
    })
  });