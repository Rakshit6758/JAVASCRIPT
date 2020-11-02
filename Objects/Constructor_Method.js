function Cars(car_brand, car_model, price)
{
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaautopilot = function()
    {
        return "This tesla has autopilot"
    }

}

var c1 = new Cars("tesla", "model 3", 35000)
var c2 = new Cars("tesla", "model p", 45000)

document.write("<h2>"+c2.teslaautopilot()+"</h2>")