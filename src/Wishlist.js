class Wishlist {
    constructor() {
        this.cars = [];
        this.nextId = 1;

    }
    add(make, model, year){
        let newCar = new Car(this.nextId++, make, model, year);
        this.cars.push(newCar);

        this.addToDOM();
    }

    remove(id){
        this.cars = this.caars.filter((car)=> car.id !=id)

        this.removeFromDOM(id);
    }
    addToDOM(car){
        let ul = document.querySelector("#wishListContainer > ul");
        let li = document.createElement("li");
        li.textContent = car.model;
        li.id =`cars ${car.id}`;
        li.addEventListener("click", (event)=>{
            car.display();
            let removeBtn = document.querySelector("#removeBtn");
            removeBtn.disabled =false;
            removeBtn.onclick = (event) => {
                this.remove(car.id);
                document.querySelector("#car-make").textContent = this.make;
                document.querySelector("#car-model").textContent = this.model;
                document.querySelector("#car-year").textContent = this.year;
                removeBtn.disabled =true;
            }
            this.remove.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
             
        });
        ul.appendChild(li);
    }
    removeFromDOM(id) {
        let ul = document.querySelector("#wishContainer >ul");
        let li = document.querySelector(`#cars${id}`);
    }
 }

export default Wishlist