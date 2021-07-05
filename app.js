var mobiles = {
    Oppo: {
        F19: {
            Companyname: "Oppo",
            Model: "F19",
            Ram: "6Gb",
            Rom: "128Gb",
            Camera: "48 MP AI Triple Camera",
            Others: "32 Mp Selfie",
            url: "Images/F19.png"
        },
        F19pro: {
            Companyname: "Oppo",
            Model: "F19pro",
            Ram: "8Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "Dual-View Video",
            url: "Images/f19pro.png"
        },
        FindX2pro: {
            Companyname: "Oppo",
            Model: "FindX2pro",
            Ram: "12Gb",
            Rom: "512Gb",
            Camera: "108 MP  Camera",
            Others: "65W Charging",
            url: "Images/FindX2pro.png"
        },
        Reno5: {
            Companyname: "Oppo",
            Model: "Reno5",
            Ram: "8Gb",
            Rom: "128Gb",
            Camera: "64 MP Camera",
            Others: "Dual-View Video & AI Mixed Potrait",
            url: "Images/Reno5.png"
        },
        Reno2f: {
            Companyname: "Oppo",
            Model: "Reno2f",
            Ram: "8Gb",
            Rom: "128Gb",
            Camera: "64 MP Camera",
            Others: "Dual-View Video & AI Mixed Potrait",
            url: "Images/Reno2f.png"
        },
        A15s: {
            Companyname: "Oppo",
            Model: "A15s",
            Ram: "4Gb",
            Rom: "64Gb",
            Camera: "13 MP Camera",
            Others: "Potrait Camera",
            url: "Images/A15s.png"
        },
        Reno3pro: {
            Companyname: "Oppo",
            Model: "Reno3pro",
            Ram: "4Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "Dual Punch Hole CAmera & Fast Charging",
            url: "Images/Reno3pro.png"
        },
        Reno2f: {
            Companyname: "Oppo",
            Model: "Reno2f",
            Ram: "6Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "PopUp Camera",
            url: "Images/Reno2f.png"
        },
        A31: {
            Companyname: "Oppo",
            Model: "A31",
            Ram: "4Gb",
            Rom: "128Gb",
            Camera: "13 MP Camera",
            Others: "Kuxh Khas Nahi",
            url: "Images/A31.png"
        },
        F15: {
            Companyname: "Oppo",
            Model: "F15",
            Ram: "Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "5 Camera",
            url: "Images/F15.png"
        },
        F17: {
            Companyname: "Oppo",
            Model: "F17",
            Ram: "6Gb",
            Rom: "256Gb",
            Camera: "64 MP Camera",
            Others: "33 Watt Fast Charging",
            url: "Images/F17.png"
        },
        Reno3: {
            Companyname: "Oppo",
            Model: "Reno3",
            Ram: "6Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "Brilliant Photography",
            url: "Images/Reno3.png"
        }
    },
    Iphone: {
        Xr: {
            Companyname: "Iphone",
            Model: "Xr",
            Ram: "6Gb",
            Rom: "256Gb",
            Camera: "13 MP Camera",
            Others: "Face lock",
            url: "Images/Xr.jpg"
        },
        11:{
            Companyname: "Iphone",
            Model: "11",
            Ram: "6Gb",
            Rom: "256Gb",
            Camera: "13 MP Camera",
            Others: "Face lock & Purple Color",
            url: "Images/11.png"
        },
    },
    Vivo: {
        V21e: {
            Companyname: "Vivo",
            Model: "V21e",
            Ram: "8Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "Fast Charging",
            url: "Images/V21e.png"
        },
        X60pro : {
            Companyname: "Vivo",
            Model: "X60pro",
            Ram: "8Gb",
            Rom: "128Gb",
            Camera: "48 MP Camera",
            Others: "Fast Charging",
            url: "Images/X60pro.png"
        }

    }
}

var brand = document.getElementById("brand");
var model = document.getElementById("model");
var card = document.getElementById("card");
var list = document.getElementById("list");
var product = document.getElementById("product");
var productmain = document.getElementById("productmain");
function search() {
    //  console.log(model.value);
    //  console.log(mobiles[brand.value][model.value].Model)
    if (brand.value === mobiles[brand.value][model.value].Companyname) {
        productmain.setAttribute("class", "styling")
        var img = document.createElement("img");
        img.setAttribute("src", mobiles[brand.value][model.value].url);
        product.appendChild(img);
        card.style.display = "none";
        var p = document.createElement("p");
        var p0 = document.createElement("p");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p.setAttribute("class", "list1");
        p0.setAttribute("class", "list1");
        p1.setAttribute("class", "list1");
        p2.setAttribute("class", "list1");
        p3.setAttribute("class", "list1");
        p4.setAttribute("class", "list1");
        list.appendChild(p);
        list.appendChild(p0);
        list.appendChild(p1);
        list.appendChild(p2);
        list.appendChild(p3);
        list.appendChild(p4);
        console.log(product);
        p.innerHTML = ("Company Name : " + mobiles[brand.value][model.value].Companyname);
        p0.innerHTML = ("Model : " + mobiles[brand.value][model.value].Model);
        p1.innerHTML = ("Camera : " + mobiles[brand.value][model.value].Camera);
        p2.innerHTML = ("Ram : " + mobiles[brand.value][model.value].Ram);
        p3.innerHTML = ("Rom : " + mobiles[brand.value][model.value].Rom);
        p4.innerHTML = ("Others : " + mobiles[brand.value][model.value].Others);
        //p.innerHTML = ("Model : " + mobiles[brand.value][model.value].Model + "<br />" + "Camera : " + mobiles[brand.value][model.value].Camera + "<br />" + "Ram : " + mobiles[brand.value][model.value].Ram + "<br />" + "Rom : " + mobiles[brand.value][model.value].Rom + "<br />" + "Others :" + mobiles[brand.value][model.value].Others)
        brand.setAttribute('Placeholder', 'Enter Brand Name')
        brand.value = ""
        model.setAttribute('Placeholder', 'Enter Model Number')
        model.value = ""
    }
    else if (model.value == "" && brand.value == " ") {
        card.style.display = "none";
        // var p = document.createElement("p");
        // p.setAttribute("class", "list1");
        // list.appendChild(p);
        // p.innerHTML=( mobiles[brand.value][model.value] + " Is Not Availabe")
    }
}

console.log(mobiles)




















// var brand = document.getElementById("brand");
// var model = document.getElementById("model");
// var card = document.getElementById("card");
// var list = document.getElementById("list");
// var product = document.getElementById("product");
// function search() {
//     var img = document.createElement("img");
//     img.setAttribute("src", mobiles[brand.value][model.value].url);
//     product.appendChild(img);
//     card.style.display = "none";
//     var li = document.createElement("li");
//     li.setAttribute("class", "list1");
//     list.appendChild(li)
//     console.log(product);
//     li.innerHTML = ("Model : " + mobiles[brand.value][model.value].Model + "<br />" + "Camera : " + mobiles[brand.value][model.value].Camera + "<br />" + "Ram : " + mobiles[brand.value][model.value].Ram + "<br />" + "Rom : " + mobiles[brand.value][model.value].Rom + "<br />" + "Others :" + mobiles[brand.value][model.value].Others)
//     brand.setAttribute('Placeholder', 'Enter Brand Name')
//     brand.value = ""
//     model.setAttribute('Placeholder', 'Enter Model Number')
//     model.value = ""
// }

// console.log(mobiles)

























// console.table(mobiles[brand.value][model.value].Camera)
// console.table()








// var brand = prompt("Enter Brand Model");
// console.log(mobiles[brand]);
// var a = prompt("Enter Model");
// console.table(mobiles[a]);

// console.table(mobiles)
// var a = prompt("enter brand");
// console.log(a)
// if(mobiles == a){
//         console.log("HEllo")
// }else{
//     console.log("Empty")
// }

// var card = document.getElementById("card")
// function search() {
//     // var x = card.style.display="none"
//     // console.log(x)
//     // var brand = document.getElementById("brand");
//     // var model = document.getElementById("model");
//     // console.log(brand.value);
//     // console.log(model.value);
// }