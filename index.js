const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

app.get("/api/recipes", (req, res)=>{
    db.getRecipes().then(recipes=>{
        res.status(200).json(recipes);
    })
});

app.get("/api/recipes/:id/shoppingList", (req, res)=>{
    db.getShoppingList(req.params.id).then(ingredients=>{
        res.status(200).json(ingredients)
    }).catch(err=>{
        console.log(err);
        res.send(err);
    })
});

app.get("/api/recipes/:id/instructions", (req, res)=>{
    db.getInstructions(req.params.id).then(instructions=>{
        res.status(200).json(instructions);
    }).catch(err=>{
        console.log(err);
    });
})

app.listen(5000, ()=> console.log("server running on port 5000"));