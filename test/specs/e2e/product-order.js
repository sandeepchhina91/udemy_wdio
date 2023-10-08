describe('sauce demo-product order', () => {
    before(async() => {
      await browser.url('https://www.saucedemo.com/v1/')  
      await browser.sauceLogin()
    });
    // after(async() => {
    //     await browser.sauceLogout()
    // });
    it('should complete product order', async() => {
      await $('.product_label').isExisting()
      await $('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click()
      await $('[data-icon="shopping-cart"]').click()
      await $("//div[text()='Your Cart']").waitForDisplayed()
      await $("//a[text()='CHECKOUT']").click()
      await $('//div[text()="Checkout: Your Information"]').waitForDisplayed()
      await $('#first-name').setValue('test')
      await $('#last-name').setValue('sandhu')
      await $('#postal-code').setValue('t233')
      await $('input[value="CONTINUE"]').click()
      await $('//div[text()="Checkout: Overview"]').waitForDisplayed()
      await $('//div[text()="Shipping Information:"]').waitForDisplayed()
      await $('//a[text()="FINISH"]').click()
      await $('//h2[text()="THANK YOU FOR YOUR ORDER"]').waitForDisplayed()

    });
});