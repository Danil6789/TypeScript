import {Transport} from "./lab4";
import IOwner = Transport.IOwner;
import ICar = Transport.ICar;
import Owner = Transport.Owner;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import IMotorbike = Transport.IMotorbike;
import IVehicle = Transport.IVehicle;
import Vehicle = Transport.Vehicle;
import IVehicleStorage = Transport.IVehicleStorage; 
import VehicleStorage = Transport.VehicleStorage;
import Docs = Transport.Docs;
import CarcaseType = Transport.CarcaseType;
import ClassCar = Transport.ClassCar;



const owner: IOwner = new Owner("Борисов", "Юрий", "Андреевич", new Date(), Docs.PASSPORT, 324444124, 244444);
const car1: ICar = new Car("Ford", "Focus", 2009, 2444, 32131, owner, CarcaseType.Crossover, ClassCar.B);
const car2: ICar = new Car("Sckoda", "Octavia", 2019, 24434, 561365, owner, CarcaseType.SEDAN, ClassCar.C);


const owner1: IOwner = new Owner("Каштанов", "Олег", "Дмитриевич", new Date(), Docs.POLIC, 23525, 325765);

const bike1: IMotorbike = new Motorbike("cool", "colcol", 2014, 12421, 2144, owner1, true, "маленький");
const bike2: IMotorbike = new Motorbike("lave", "lamelame", 2020, 5325235, 2352, owner1, false, "большой");


const v1: IVehicle = new Vehicle("Boomer", "B32", 2010, 242, 21421, owner1);
const v2: IVehicle = new Vehicle("Coomer", "C32", 2025, 2134, 124, owner1);
const v3: IVehicle = new Vehicle("Toyota", "Raf4", 2024, 242, 56845, owner1);
const v4: IVehicle = new Vehicle("Skoda", "C31", 2014, 1241, 23523, owner1);
const v5: IVehicle = new Vehicle("Ror", "odod", 2019, 3333, 313333, owner);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);
vehicleStorage.save(v4);
vehicleStorage.save(v5);

console.log(vehicleStorage.getAll());