https://footnanny.com
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var categrory = "jkskd";
var dict = new Map(
    //BOOKS
    ["Books", ["Eso Won Books", "For Keeps Books", "The Lit. Bar"]], 
    //BEAUTY 
    ["Beauty & Personal Care", ["Foot Nanny" ,"Black Girl Sunscreen", "Golde", "Cee Cee's Closet NYC",
        ///next i need to do hair
        "Briogeo", "Camille Rose" ,"Curls","Curlbox", "CurlMix", "Mielle Organics", "Myavana","Melanin Haircare", "Mayvenn","Pattern Beauty","Rucker Roots",
        //next need to incorporate makeup
        "AJ Crimson Beauty", "Danessa Myricks Beauty", "Juvia’s Place","Mented Cosmetics" ,"Pat McGrath Labs","Uoma Beauty"
        //lipstick
        ,"Beauty Bakerie", "The Lip Bar"]],
    //next thing in dictionary
    ["Clothing, Shoes, & Jewelry", ["Brother Vellies" , "The Folklore","BLK MKT Vintage","Bolé Road Textiles ","Diop","FUBU",
        "Mateo New York","Unwrp","UjuuMedia","Pro Standard","BLK + GRN",  "Fini Shoes",
        //womens clothing
        "Aminah Abdul Jillil", "Fini Shoes","Cherry Blossom Intimates","Cushnie","Hanifa","Hope For Flowers ","Kahmune ","Nude Barre","Pyer Moss","Soundoff"
        ,"Telfar","The Sixes","Voluptuous Clothing","The Wrap Life ","The Honey Pot",
        //Kids/women'shoes
        "Aminah Abdul Jillil"]],
    //nexth thing in dictionary of health and household
    ["Heath, Household, & BabyCare", ["Vibrant Health", "Jungalow", "Love Notes Fragrances", "McBride Sisters Collection","SustainAble Home Goods","Thrilling",
        //Amazon Home
        "AptDeco"]]);

    var listToPromote = [];
    if (dict.has(categrory)){
        if (dict.get(categrory)<=3){
            //use three values in the array list ie books
        }
        else{
            while(listToPromote.length<3){
                var numToGrab = getRandomInt(dict.get(categrory).length);
                var toAdd = dict.get(categrory)[numToGrab];
                if (listToPromote.includes(toAdd)){
                    continue;
                }
                else{
                    listToPromote.push(toAdd);
                } 
            }

        }
    }
    var fs = require('fs');
    var textByLine = fs.readFileSync('Sources.txt').toString().split("\n");
    var links = [];
    // General Code
    function getWebsite(name, description,website) {  
        var names = read("Sources.txt").split("\n");                ///i know that this is incorrect and splitting in the wrong placed
        // for (var i = 0; i < names.length; ++i) {
        //             names[i] = names[i].trim();
        //         }
        for (var i = 0; i < names.length; i+3) { 
            var companyname = names[i];
            if (listToPromote.includes(companyname)){
                var description = names[i+1];
                var website = "https://" + names[i+2];
                links.push([companyname, description,website]);
            }
            else{
                continue;
            }
        }
    }
    product1 = links[0][0];  
    product1Description = links[0][1];  
    data-location == links[0][2]  
    product2 = links[1][0];  
    product2description = links[1][1];  
    data-location == links[1][2]; 
    product3 =links[2][0];  
    product3description = links[2][1]; 
    data-location == links[2][2];

    

        // public class startofsorting{
        //     public static void main(String[] args){
        //         String category = "from other file";
        //         HashMap<String,ArrayList<String>> map = new HashMap<>();
        
        
        //         // BufferedReader bufReader = new BufferedReader(new FileReader("Sources.txt")); 
        //         // ArrayList<String> listOfLines = new ArrayList<>(); 
        //         // String line = bufReader.readLine(); 
        //         // while (line != null) { 
        //         //     listOfLines.add(line); line = bufReader.readLine(); 
        //         // } 
        //         // bufReader.close();
        //         if dict.has(category){
        //             dict.get(category);
        //         }
                
        //     }