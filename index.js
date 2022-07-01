import langs from "langs";
import { franc } from "franc";

const input = process.argv[2];
const langcode = franc(input);

if(langcode === 'und'){
    console.log("Sorry, couldn't figure it out");
}
else{
    const langname = langs.where("3",langcode);
    try{
        console.log(langname.name);
    }
    catch(e){
        console.log("We do not support this language.",e)
    }
}

