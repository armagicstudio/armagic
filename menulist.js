import mongoose from "mongoose";
import Menu from "./model/menu.js";
import connectDB from "./config/db.js";

const menuData = [

{
name: "Veg Burger",
description: "Delicious grilled veggie burger",
price: 120,
category: "burger",
model: "https://ar-code.com/kjFkVPZSD",
poster: "https://modelviewer.dev/shared-assets/models/poster-astronaut.webp"
},

{
name: "Pizza",
description: "Cheesy Italian pizza with toppings",
price: 250,
category: "pizza",
model: "https://ar-code.com/kjFkVPZSD",
poster: "https://modelviewer.dev/shared-assets/models/poster-robot.webp"
},

{
name: "French Fries",
description: "Crispy salted fries",
price: 90,
category: "snacks",
model: "https://ar-code.com/kjFkVPZSD",
poster: "https://modelviewer.dev/shared-assets/models/poster-astronaut.webp"
},

{
name: "Noodles",
description: "Hot spicy street style noodles",
price: 160,
category: "chinese",
model: "https://ar-code.com/kjFkVPZSD",
poster: "https://modelviewer.dev/shared-assets/models/poster-chair.webp"
},

{
name: "Ice Cream",
description: "Cold chocolate ice cream",
price: 80,
category: "dessert",
model: "https://ar-code.com/kjFkVPZSD",
poster: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
}

];

export default {menuData};

connectDB();
const initDB = async() =>{
   await Menu.deleteMany({});
   await Menu.insertMany(menuData);
   console.log("data was initialized");
};

initDB();