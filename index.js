// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: gas-pump;
let url = "https://www.goodreturns.in/petrol-price-in-pudukkottai.html";
let req = new Request(url);
let res = await req.loadString();
let price = res.match(/\<title\>(.*?)\<\/title\>/)[1].replace('<title>', '').replace('<\title>', '').replace('Petrol Price in Pudukkottai, Petrol Rate Today', '').replace(' - Goodreturns','').match(/Rs.(.*?)\/Ltr/)[1].trim();
console.log(price);
let change = res.match(/\<div class="fuel-block-details"\>(.*?)\<i  class=""\>/s)[1].replace(/&#8377;(.*?)\( &#8377;/s, "").trim();
console.log(change);
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
