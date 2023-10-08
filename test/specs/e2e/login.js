describe.skip('login flow', () => {
    before(async() => {
        await browser.url('http://zero.webappsecurity.com/')
    });
    it('should not login with invalid credentials ', async() => {
        await browser.waitAndClick($('#signin_button'))
        await $('#login_form').waitForDisplayed()
        await $('#user_login').setValue('test')
        await $('#user_password').setValue('test')
        await $('input[type="submit"]').click()
        await expect($('div[class="alert alert-error"]').toHaveTextContaining('Login and/or password are wrong.'))
    });
    it('reset account password', async() => {
        await browser.waitAndClick($('*=Forgot'))
        await $('//h3[contains(text(), "Forgotten Password")]').waitForDisplayed()
        await $('#user_email').setValue('test@test.com')
        await $('input[value="Send Password"]').click()
        await expect($('div[class="offset3 span6"]')).toHaveTextContaining('Your password will be sent to the following email')
        await browser.pause(2000)
    });
});