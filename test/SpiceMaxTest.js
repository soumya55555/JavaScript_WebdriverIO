const sm=require("../pages/SpiceMax")
describe("Spice max page verification",()=>{

    it("Verify and click on retrive",()=>{
        browser.url("/")
        browser.maximizeWindow()
        sm.mousehover()
        sm.clickOnMax()
        sm.verifyText()
        sm.clickOnRetrive()
       text_from_alert= browser.getAlertText()
       console.log(text_from_alert)
       browser.acceptAlert()
    })
})