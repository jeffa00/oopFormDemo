(function(){
    var saveButton = document.getElementById("save-button"),
        carYear = document.getElementById("car-year"),
        carMake = document.getElementById("car-make"),
        carModel = document.getElementById("car-model"),
        carDoors = document.getElementById("car-doors"),
        vehicleList = document.getElementById("vehicle-list");

    var Automobile = function Automobile(year, make, model){
        this.year = year;
        this.make = make;
        this.model = model;

        this.getFullName = function getFullName(){
            return this.Year + " " +
                    this.Make + " " +
                    this.Model;
        }
    }

    var Car = function Car(year, make, model, doors){
        Automobile.call(this, year, make, model);
        this.doors = doors;

        this.getFullName = function getFullName(){
            return this.Year + " " +
            this.Make + " " +
            this.Model + " " +
            this.Doors;
        }
    }

    Car.prototype = Object.create(Automobile.prototype);

    saveButton.addEventListener("click", function(){
        // var car = {
        //     Year: carYear.value,
        //     Make: carMake.value,
        //     Model: carModel.value,
        //     Doors: carDoors.value,
        //     getFullName: function(){
        //         return this.Year + " " +
        //                 this.Make + " " +
        //                 this.Model + " " +
        //                 this.Doors;
        //     }
        // };

        var newCar = new Car(carYear.value, carMake.value, carModel.value, carDoors.value);

        var newItem = document.createElement("li");
        newItem.innerText = newCar.getFullName();
        newItem.classList.add("list-group-item");

        vehicleList.appendChild(newItem);
    });

})();