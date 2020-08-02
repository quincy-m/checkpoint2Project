const { assert } = require("console")

var checkpoint2Project = {}
module.exports = {
    beforeEach: browser => {
        checkpoint2Project = browser.page.automationBasicsPage()
        checkpoint2Project.navigate()
    },
    after: browser => {
    browser.end()
    },
'Evens and Odds Valid Entry': browser => {
    checkpoint2Project
    .setValue('@evenOddInput', '1,2,3,4,5,6,7,8,9')
    .click('@evenOddButton')
    checkpoint2Project.expect.element('@evenResults').text.to.equal('Evens: [2,4,6,8]')
    checkpoint2Project.expect.element('@oddResults').text.to.equal('Odds: [1,3,5,7,9]')
    },
'Even and Odds Invalid Entry': browser => {
    checkpoint2Project
    .setValue('@evenOddInput', 'Quincy')
    .click('@evenOddButton')
    checkpoint2Project.expect.element('@evenOddBox').text.to.contain('null')
    },

'Filter Objects Valid Entry': browser => {
    checkpoint2Project
    .setValue('@objectFilterInput', 'age')
    .click('@objectFilterButton')
    checkpoint2Project.expect.element('@objectFilterResults').text.to.contain('12', '24')
    checkpoint2Project.expect.element('@objectFilterResults').text.not.to.contain('Carly')
    },
'Filter Objects Invalid Entry': browser => {
    checkpoint2Project
    .setValue('@objectFilterInput', 'This is fun!')
    .click('@objectFilterButton')
    checkpoint2Project.expect.element('@objectFilterResults').text.to.equal('Filtered: []')
    },

'Filter String Valid Entry': browser => {
    checkpoint2Project
    .setValue('@stringFilterInput', 'J')
    .click('@stringFilterButton')
    checkpoint2Project.expect.element('@stringFilterResults').text.to.contain('James', 'Jessicsa', 'Jennifer')
    },
'Filter String Invalid Entry': browser => {
    checkpoint2Project
    .setValue('@stringFilterInput', 'Q')
    .click('@stringFilterButton')
    checkpoint2Project.expect.element('@stringFilterResults').text.to.equal('Filtered Names: []')
    },

'Palindrome Valid Entry': browser => {
    checkpoint2Project
    .setValue('@palindromeInput', 'HANNAH')
    .click('@palindromeButton')
    checkpoint2Project.expect.element('@palindromeResults').text.to.equal('Palindrome: true')
    },
'Palindrome Invalid Entry': browser => {
    checkpoint2Project
    .setValue('@palindromeInput', 'Coffee')
    .click('@palindromeButton')
    checkpoint2Project.expect.element('@palindromeResults').text.to.equal('Palindrome: false')
    },

'Sum Valid Entry': browser => {
    checkpoint2Project
    .setValue('@sumInput1', '436')
    .setValue('@sumInput2', '267')
    .click('@sumButton')
    checkpoint2Project.expect.element('@sumResults').text.to.equal('Sum: 703')
    },
'Sum Invalid Entry': browser => {
    checkpoint2Project
    .clearValue('@sumInput1')
    .clearValue('@sumInput2')
    .click('@sumButton')
    checkpoint2Project.expect.element('@sumResults').text.to.equal('Sum: 0')
    }
}