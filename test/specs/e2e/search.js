describe.skip('search feature', () => {
    it('should search for values using keyboard press', async() => {
        await browser.url('http://zero.webappsecurity.com/')
        await $('#searchTerm').waitForDisplayed()
        await $('#searchTerm').setValue('bank')
        await browser.keys('Enter')
        await expect($("div[class='top_offset'] h2")).toHaveTextContaining('Search Results:')
    });
});