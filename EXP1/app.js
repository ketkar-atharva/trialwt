const express=require('express');
const app=express();
const ejsmate=require("ejs-mate");
const mongoose=require("mongoose");
const path=require("path");
const methodoverride=require("method-override");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodoverride("_method"));
app.engine("ejs",ejsmate);

const studentschema=new mongoose.Schema({
    name:String,
    age:Number,

});
const Student=mongoose.model("Student",studentschema);

main().then(()=>{console.log("MongoDB connected")}).catch((e)=>{console.log(e)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wtexp1");
}

app.get("/",(req,res)=>{
    res.render("home");
});
app.post("/savestudent",async (req,res)=>{
    const {name,age}=req.body;
    const newstudent=await new Student({name,age});
    newstudent.save();
    res.redirect("/showstudents");
   
});
app.get("/showstudents", async (req, res) => {
    const students = await Student.find({});
    res.render("show",{students});
});
app.get("/delete/:id",async(req,res)=>{
    let{id}=req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/showstudents");

});
app.get("/update/:id",async(req,res)=>{
    let{id}=req.params;
    const edit=await Student.findById(id);
    res.render("update",{edit});

});
app.put("/updatest/:id",async(req,res)=>{
    let{id}=req.params;
    let{name,age}=req.body;

    let update =await Student.findByIdAndUpdate(id,{name:name, age:age});

    res.redirect("/showstudents");
});
app.listen(8000,()=>{console.log("Sever is listening")});
