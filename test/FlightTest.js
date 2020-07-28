const ft=require("../pages/FlightPage")
describe("Search and Book a flight",()=>{
it("Book a flight",()=>{
browser.url("/")
browser.maximizeWindow()
ft.departureCity()
ft.arrivalCity()
ft.selectDate()
ft.selectPassnger()
ft.clickonSearch()

})

})