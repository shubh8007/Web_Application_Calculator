const http=require("http")
const url=require("url")
const fs=require("fs")
var m1=require("./cal")
// var num1=0;
// var num2=0;
const server=http.createServer(function(req,resp){
    var s=url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(s.pathname){
        case "/":
            
            var rs=fs.createReadStream("./calculator.html")
            rs.pipe(resp);
            break;

            case "/addition":
                if(s.query.btn1==="addition"){
                    var num1=parseInt(s.query.num1)
                   var  num2=parseInt(s.query.num2)
                    var ans=m1.addition(num1,num2)
                    resp.write("<h3>Addition="+ans+"</h3>")
                    resp.end();
                }
                break;

                case "/substraction":
                    if(s.query.btn2==="substraction"){
                        var num1=parseInt(s.query.num1)
                        var num2=parseInt(s.query.num2)
                        var ans=m1.substraction(num1,num2)
                        resp.write("<h3>substraction="+ans+"</h3>")
                        resp.end();
                    }
               break;

                case "/multiplication":
                if(s.query.btn3==="multiplication"){
                    var num1=parseInt(s.query.num1)
                    var num2=parseInt(s.query.num2)
                    var ans=m1.multiplication(num1,num2)
                    resp.write("<h3>multiplication="+ans+"</h3>")
                    resp.end();
                }
                      break;


                      case "/division":
                        if(s.query.btn4==="division"){
                            var num1=parseInt(s.query.num1)
                    var num2=parseInt(s.query.num2)
                    var ans=m1.division(num1,num2)
                    resp.write("<h3>division="+ans+"</h3>")
                      resp.end();
                        }
                        break;

                        case "/square":
                            if(s.query.btn5==="square"){
                                var num=parseInt(s.query.num1)
                                var ans=m1.square(num)
                    resp.write("<h3>square="+ans+"</h3>")
                    resp.end();
                            }
                                break;


                            }
                
    
})
server.listen(8007,function(){
    console.log("server running on port 8007")
})