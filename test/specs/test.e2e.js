import { expect, browser, $ } from '@wdio/globals'

describe.skip('My Login application', async() => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })
    it('should login into saucedemo site', async() => {
        await browser.url('https://www.saucedemo.com/v1/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect($('.product_label')).toBeDisplayed()


    });
    it('set window size', async() => {
        await browser.setWindowSize(400,400);
        await browser.url('https://www.saucedemo.com/v1/')
        await browser.pause(3000)
    });
    it('Device Emulation', async() => {
        let mobile=[375,812]
        let tablet=[1024,768]
        let desktop=[1650,1050]
        //mobile device 
        await browser.setWindowSize(mobile[0],mobile[1])
        await browser.url('https://www.saucedemo.com/v1/')
        await browser.pause(2000)
        //tablet device
        await browser.setWindowSize(tablet[0],tablet[1])
        await browser.url('https://www.saucedemo.com/v1/')
        await browser.pause(2000)
        //desktop device
        await browser.setWindowSize(desktop[0],desktop[1])
        await browser.url('https://www.saucedemo.com/v1/')
        await browser.pause(2000)
    });
    it('Screenshot', async() => {
        await browser.url('https://www.saucedemo.com/v1/')
        await browser.saveScreenshot('myscreenshot.png')
        //just element screenshot 
        let login_logo=await $('.login_logo')
        await login_logo.saveScreenshot('pagelogo.png')
    });
})

