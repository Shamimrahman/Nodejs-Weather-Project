const express=require('express')
const app=express()
const port=process.env.PORT || 8000
const path=require('path')
const hbs=require("hbs")


//Render St atic page Start

//const staticPath=path.join(__dirname,"./public")
//app.use(express.static(staticPath))

//Render Static Page end



//Render Dynamic Page with views name change into template
app.set('view engine','hbs')
const templatepath=path.join(__dirname,'./template/views')
app.set("views",templatepath)

//Render Dynamic Page end


//partial start

//Partial use korbo public folder er index ,about file ta fetch 
//korarjonno views folder er index.hbs ,about.hbs a
const partialpath=path.join(__dirname,'./template/partials')
hbs.registerPartials(partialpath)

//partial end




//routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error404")
})

//routing end


//connection

app.listen(port,()=>{
    console.log(`Connected from ${port}`)
})

//connection end