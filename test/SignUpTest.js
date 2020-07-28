const sp=require("../pages/SignUpPage")
describe("Sign up for a user",()=>{
it("Sign up ",()=>{
    browser.url("/")
    browser.maximizeWindow()
    sp.clickon_LinkSignUp()
    sp.clickon_buttonSignUp()
    sp.selectTitle()
    browser.pause(1000)
    sp.enter_FirstName()
    sp.enter_LastName()
    sp.enter_MobileNumber()
    sp.enter_password()
    sp.enter_confirmpass()
})







})