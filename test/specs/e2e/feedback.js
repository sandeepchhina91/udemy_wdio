describe.skip('feedback form', () => {
    it('send feedback form', async() => {
        await browser.url('http://zero.webappsecurity.com/')
        await browser.waitAndClick($('#feedback'))
        await $('#feedback-title').waitForDisplayed()
        await $('#name').setValue('test')
        await $('#email').setValue('test@test.com')
        await $('#subject').setValue('testing')
        await $('#comment').setValue('testing demo')
        await $('input[value="Send Message"]').click()
        await expect(browser).toHaveUrlContaining('sendFeedback')
        browser.pause(2000)
    });
});