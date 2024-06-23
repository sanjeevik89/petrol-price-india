"use strict";

/**
  * Name the script.
  * @see {@link https://docs.scriptable.app/script/#name}
  */
 Script.name("petrol-price-india");
 
// 
const place = args.widgetParameter.trim();

// 
// const place = "pudukkottai";

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)


let url = `https://www.goodreturns.in/petrol-price-in-${place}.html`;
console.log(url);

let req = new Request(url);
let res = await req.loadString();
let titleText = res.match(/\<title\>(.*?)\<\/title\>/)[1];


let price = titleText.replace(`Petrol Price in ${place}, Petrol Rate Today`, '').replace(' - Goodreturns','').match(/Rs.(.*?)\/Ltr/)[1].trim();
console.log(price);

let nochange = `${res.match(/\<div class="fuel-block-details"\>(.*?)\<\/div/s)[1].includes('<span class="nochange">') ? "NC" : }`;

console.log(nochange);
let color = `${change.includes('-') ? '#00FF00' : change.match("NC") ? '#800080' : '#FF0000'}`;
let prefix = `${change.includes('-') ? '' : change.match("NC") ? '±' : '+'}`;
console.log(color);


let w = new ListWidget();

let title = w.addText("Petrol"); 
title.textColor = Color.blue();
title.font = Font.title1(30);
title.centerAlignText();

let mainCol = w.addStack();
mainCol.layoutVertically();
mainCol.addSpacer();
let row1 = mainCol.addStack();
row1.layoutHorizontally();
mainCol.addSpacer();
let row2 = mainCol.addStack();
row2.layoutHorizontally(); 





let text = row1.addText("₹"+price);
text.font = Font.systemFont(20);

row1.addSpacer();

let subtext = row1.addText(prefix + change);
subtext.font = Font.systemFont(15);
subtext.textColor = new Color(color);


let loc = row2.addText(capitalize(place));
loc.font = Font.footnote();

row2.addSpacer();


const df = new DateFormatter();
df.useMediumDateStyle();
let updateDate = titleText.match(/Petrol Rate Today \((.*?)\)/s)[1];
console.log(df.date(updateDate));
let date = row2.addDate(df.date(updateDate));
date.font = Font.systemFont(10);
date.applyDateStyle();



Script.setWidget(w);
Script.complete();
w.presentMedium();



