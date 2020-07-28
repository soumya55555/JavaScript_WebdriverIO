const utl=require("../utill/element_utill")
class SpiceMax{
get addon(){
    return $("#highlight-addons")
}
get maxsp(){
    return $("//ul/li/a[contains(text(),'SpiceMAX')]")
}
get header(){

    return $('//*[@id="SkySales"]/div[3]/div/h2')
}
get retrive(){
   return  $('(//*[@id="ControlGroupRetrieveBookingView_BookingRetrieveInputRetrieveBookingView_ButtonRetrieve"])[1]')
}
mousehover(){
    this.addon.moveTo()
}
clickOnMax(){
    utl.doClick(this.maxsp)
}
verifyText(){
   let status=this.header.waitForDisplayed()
    expect(status).to.equal(true);
    console.log("Verification passed")
}
clickOnRetrive(){
    console.log(this.retrive.isDisplayedInViewport());
    this.retrive.scrollIntoView();
    utl.doClick(this.retrive)
}


}
module.exports=new SpiceMax()