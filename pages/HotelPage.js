const utl=require("../utill/element_utill")

class HotelPage{
    get hotelLink(){
        return $("//span[text()='Hotels']")
    }
    get city(){
        return $("#MySpiceTripSearchView_TextBoxMarketOrigin1")
    }
    get date(){
        return $("#custom_mySpiceTripdate_picker_id_1")
    }
    get checkinDate(){
        return $("(//a[text()='31'])[1]")
    }
    get checkOut(){
        return $("(//a[text()='4'])[1]")
    }
    get adult(){
        return $("#MySpiceTripSearchView_DropDownListPassengerType_ADT")
    }
    get Search(){
        return $("#MySpiceTripSearchView_ButtonSubmit")
    }
    get location(){
        return $("//h4/a[contains(text(),'Locations Search')]")
    }
    enterlocation(){
        return $("//input[@ng-model='locationfiltermodel']")
    }
    clickOnLinkHotel(){
        utl.doClick(this.hotelLink)
    }
    enterCity(){
        utl.doSetValue(this.city,"mumbai")
        browser.pause(3000)
       $("//a[text()='Mumbai']").click()
       // browser.keys("ArrowDown")
         
    }
    selectCheckinDate(){
        this.date.click()
        this.checkinDate.click()
    }
    selectCheckOutDate(){
        this.checkOut.click()
    }
    selectPassenger(){
        utl.doClick(this.adult)
        this.adult.selectByVisibleText("4")
    }
    clickOnSearch(){
        utl.doClick(this.Search)
    }
   searchLocation(){
       this.location.click()
   }
   waitForElement(){
       browser.waitUntil(function(){
          return ($("//img[@alt='logo']").isDisplayed()==true)},
           5000,"Element was not displayed on the webpage"
       )
   }
   EnterLocationToSearch(){
       this.enterlocation.setValue("Navi Mumbai")
       browser.pause(2000)
       $("(//a/strong[text()='Navi Mumbai'])[1]").click()
   }

}
module.exports=new HotelPage()