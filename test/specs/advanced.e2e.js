

describe.skip('advanced testing', () => {
    beforeEach(async() => {
        await browser.url('https://testpages.herokuapp.com/styled/file-upload-test.html')
    });
    it('file upload ', async() => {
        const filePath='./myscreenshot.png'
        let fileInput=$('#fileinput')
        let radioButton=$('#itsanimage')
        let uploadButton=$("input[value='Upload']")
        // const remoteFilePath=await browser.uploadFile(filePath)
        // await $('#fileinput').setValue(remoteFilePath)
        // await $('#itsanimage').click()
        // await $("input[value='Upload']").click()
        // await expect($("div[class='centered'] h2")).toBeDisplayed()
        // await expect($("div[class='centered'] h2")).toHaveText('You uploaded this image:')
        await browser.customFileUpload(filePath,fileInput,radioButton,uploadButton)
        await browser.pause(2000)

    });
    it('Display Title and url', async() => {
        const results=await browser.getTitleAndUrl()
        console.log("title is "+results.title)
        console.log("url is "+results.url)
    });
    it('wait and click file upload', async() => {
        let uploadButton=$("input[value='Upload']")
        await browser.waitAndClick(uploadButton)
        await browser.pause(2000)
    });
    it('create and swicth new window', async() => {
        await browser.url('https://www.google.com')
        await browser.newWindow('https://www.webdriver.io')//create new tab
        await browser.pause(2000)
        await browser.switchWindow('google.com')//switch back to this tab
        await browser.pause(2000)

    });
    it('network throttle', async() => {
        await browser.throttle('Regular2G')
        await browser.url('https://www.google.com')
        await browser.pause(2000)

        await browser.throttle('Regular4G')
        await browser.url('https://www.google.com')
        await browser.pause(2000)

        await browser.throttle('offline')
        await browser.url('https://www.google.com')
        await browser.pause(2000)

    });
    it.only('Execute javascript code', async() => {
        const result=await browser.execute(
            (a,b)=>{
                return a+b
            },5,10
        )
        await expect(result).toBe(15)
        await browser.pause(2000)
    });
});