const ht=require("../pages/HotelPage")
describe("Find a hotel",()=>{
   //let url_loc
 it("Search a hotel",()=>{
     browser.url("/")
     browser.maximizeWindow()
     ht.clickOnLinkHotel()
     ht.enterCity()
     ht.selectCheckinDate()
     ht.selectCheckOutDate()
     ht.selectPassenger()
     browser.pause(500)
     ht.clickOnSearch()
     browser.pause(1000)
     let parent=browser.getWindowHandle()
    let set= browser.getWindowHandles()
    
    for(var i = 0; i<set.length;i++){
        console.log(i)
        if(set[i]!=parent){
        browser.getUrl()
        browser.switchToWindow(set[i])
        url_loc=browser.getUrl()
        console.log("URL of the switched window"+" " + browser.getUrl())
       console.log(browser.getTitle())
       
        }
    }
    

 })
 

})