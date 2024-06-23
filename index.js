// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: gas-pump;
let url = "https://www.goodreturns.in/petrol-price-in-pudukkottai.html";
let req = new Request(url);
let res = await req.loadString();
 // Extracting petrol in pudukkottai price
 const priceMatch = res.match(/<title>(.*?)<\/title>/); 
 const price = priceMatch[1].replace('Petrol Price in Pudukkottai, Petrol Rate Today', '').replace(' - Goodreturns', '').match(/Rs.(.*?)\/Ltr/)[1].trim();
 console.log(`Petrol price: ₹${price}/Ltr`);
 fuelDetailsBlock = res.match(/\<div class="fuel-block-details"\>(.*?)\<\/div>/s)[1];        
 fuelChangeBlock = fuelDetailsBlock.match(/\<span class="(.*?)"\>(.*?)\<i class="/s)[2];        
 // Extract the number using a regular expression
 const match = fuelChangeBlock.match(/(\d+\.\d+)/);

 if (match) {
     const change = parseFloat(match[1]);            
     console.log(`Change details: ${change}`); // Example: 0.20
 } else {
     console.log('Change details: NaN');
 }
let w = new ListWidget();
let title = w.addText("Petrol PDKT:");

title.centerAlignText();

let text = w.addText("₹"+price);
text.font = Font.systemFont(25);
text.centerAlignText();
let subtext = w.addText(change);
subtext.font = Font.systemFont(15);
subtext.rightAlignText();

Script.setWidget(w);
Script.complete();
w.presentMedium();
