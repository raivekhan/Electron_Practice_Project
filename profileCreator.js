const fs = require('fs')
const {Notification} = require('electron');



function writeDataToXml(data, filename) {
    fs.writeFile(filename, data, (err) => {
        // In case of a error throw err. 
        if (err) throw err;
    })
}

function formToXml(form) {
    var xmldata = ['<?xml version="1.0"?>'];
    xmldata.push("<form>");
    var inputs = form.elements;
    for (var i = 0; i < inputs.length; i++) {
        var el = document.createElement("ELEMENT");
        if (inputs[i].name && inputs[i].checked) {
            el.setAttribute("name", inputs[i].name);
            el.setAttribute("value", inputs[i].value);
            xmldata.push(el.outerHTML);
        }
    }
    xmldata.push("</form>");
    return xmldata.join("\n");
}


function createProfile(form) {

    var data = formToXml(form);
    console.log(data);

    writeDataToXml(data, "Output.xml");
    var x = document.getElementById("createProfileConfirmation");
  if (x.style.display === "none") {
    x.style.display = "block";
    setTimeout(function(){
        x.style.display = "none";
    },10000);
  }
}