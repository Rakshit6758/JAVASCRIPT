var car = {
    car_brand:"Tesla",
    car_name:"Model 3",
    price: 35000,

    testautopilot : function()
    {
        return "This car has autopilot";
    }   
}

document.write("<h2>"+car.testautopilot()+"</h2>");