(function(){
    var saveButton = document.getElementById("save-button"),
        clearButton = document.getElementById("clear-button"),
        currentVehicleId = document.getElementById("vehicle-id"),
        carYear = document.getElementById("car-year"),
        carMake = document.getElementById("car-make"),
        carModel = document.getElementById("car-model"),
        carDoors = document.getElementById("car-doors"),
        vehicleList = document.getElementById("vehicle-list"),
        maxVehicleId = 0,
        vehicles = [];

    var Automobile = function Automobile(year, make, model){
        this.id = maxVehicleId++;
        this.year = year;
        this.make = make;
        this.model = model;

        this.getFullName = function getFullName(){
            return  "Vehicle ID: " + this.id + " : " + this.year + " " +
                    this.make + " " +
                    this.model;
        }
    }

    var Car = function Car(year, make, model, doors){
        Automobile.call(this, year, make, model);
        this.doors = doors;

        this.getFullName = function getFullName(){
            return "Vehicle ID: " + this.id + " : " + this.year + " " +
            this.make + " " +
            this.model + " " +
            this.doors;
        }
    }

    Car.prototype = Object.create(Automobile.prototype);

    var editClickHandler = function editClickHandler(e){
        var currentVehicle = vehicles[e.currentTarget.id];

        currentVehicleId.value = currentVehicle.id;
        carYear.value = currentVehicle.year;
        carMake.value = currentVehicle.make;
        carModel.value = currentVehicle.model;
        carDoors.value = currentVehicle.doors;
    }

    var renderList = function renderList(){
        vehicleList.innerHTML = "";

        for(vehidx in vehicles){
            var curVehicle = vehicles[vehidx];

            var newItem = document.createElement("li");
            newItem.classList.add("list-group-item");

            var newAnchor = document.createElement("a");
            newAnchor.id = curVehicle.id;
            newAnchor.href ="#";
            newAnchor.innerText = curVehicle.getFullName();
            newAnchor.addEventListener("click", editClickHandler);

            newItem.appendChild(newAnchor);

            vehicleList.appendChild(newItem);
        }
    }

    var clearFields = function clearFields(){
        currentVehicleId.value = "";
        carYear.value = "2017";
        carMake.value = "";
        carModel.value = "";
        carDoors.value = "4";
    }

    clearButton.addEventListener("click", clearFields);

    saveButton.addEventListener("click", function(){
        var newCar = vehicles[currentVehicleId.value] || new Car(carYear.value, carMake.value, carModel.value, carDoors.value);

        newCar.year = carYear.value;
        newCar.make = carMake.value;
        newCar.model = carModel.value;
        newCar.doors = carDoors.value;

        vehicles[newCar.id] = newCar;

        renderList();
        clearFields();
    });

})();