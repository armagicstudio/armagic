import express from "express";
import Menu from "../model/menu.js";

const router = express.Router();


//menu page
router.get("/",async(req,res)=>{
    try {
        const items = await Menu.find();
        res.render("menu",{items});
    } catch (error) {
        console.log(err);
    }
});

//new item 
router.get("/new" , (req,res)=>{
    res.render('new')
})

router.post("/",async(req,res)=>{
    try {
        const newmenu = new Menu(req.body.menu);
        await newmenu.save();
         console.log(newmenu);
        res.redirect("/menu");

    } catch (error) {
         console.log(error.message);

         req.session.save(() => {
      res.redirect("/menu/new");
    });
    }
})

//single item
// router.get("/:id" , async(req,res)=>{
//     try{
//         const item = await Menu.findById(req.params.id);
//         res.render("item",{item});
//     }catch(error){
//         console.log(error.message);

//     }
// })



export default router;