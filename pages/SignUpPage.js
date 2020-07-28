const utl=require("../utill/element_utill")
class signupPage{
get lnk_signup(){
    return $("#Login")
}
get btn_signup(){
    return $("//a[@class='signup-link buttonN']")
}
get title(){
    return $("#CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_DropDownListTitle")
}
get firstname(){
    return $("(//input[@class='wLrgs dropdown-caps required'])[1]")
}
get lastname(){
    return $("#CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxLastName")
}
get mblNumber(){
    return $("#CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TEXTBOXINTLMOBILENUMBER")
}
get password(){
    return $("#CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldAgentPassword")
}
get confirmPas(){
    return $("#CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldPasswordConfirm")
}
clickon_LinkSignUp(){
  utl.doClick(this.lnk_signup)
}
clickon_buttonSignUp(){
    utl.doClick(this.btn_signup)  
}
selectTitle(){
    this.title.click()
    this.title.selectByVisibleText("MS")
}
enter_FirstName(){
    //utl.doSetValue(this.firstname,"soumya")
    this.firstname.setValue("Soumya")
}
enter_LastName(){
    utl.doSetValue(this.lastname,"pattanayak")
}
enter_MobileNumber(){
    utl.doSetValue(this.mblNumber,"999999999")
}
enter_password(){
    utl.doSetValue(this.password,"rtyuikl")
}
enter_confirmpass(){
    utl.doSetValue(this.confirmPas,"sdrftyui")
}

}
module.exports=new signupPage()