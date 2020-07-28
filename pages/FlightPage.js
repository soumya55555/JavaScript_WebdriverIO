const utl=require("../utill/element_utill")
class flightPage{
    get depCity(){
        return $("#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1")
    }
    get arrCity(){
        return $("#ControlGroupSearchView_AvailabilitySearchInputSearchViewdestinationStation1")
    }
    get depDate(){
        return $("#custom_date_picker_id_1")
    }
    get depDateNum(){
        return $("(//a[text()='31'])[1]")
    }
    get passenger(){
        return $("#divpaxinfo")
    }
    get adult(){
        return $("#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListPassengerType_ADT")
    }
    get search(){
        return $('[name="ControlGroupSearchView$AvailabilitySearchInputSearchView$ButtonSubmit"]')
    }

departureCity(){
    this.depCity.click()
     this.depCity.selectByVisibleText("Amritsar (ATQ)")

}
arrivalCity(){
    this.arrCity.click()
    this.arrCity.selectByVisibleText("Shirdi (SAG)")
}
selectDate(){
    utl.doClick(this.depDate)
    utl.doClick(this.depDateNum)
}
selectPassnger(){
    utl.doClick(this.passenger)
    this.adult.selectByVisibleText("4")
}
clickonSearch(){
    utl.doClick(this.search)
}


}
module.exports=new flightPage()