// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: gas-pump;
async function getPetrolPrice() {
    const url = "https://www.goodreturns.in/petrol-price-in-pudukkottai.html";
    try {
        const place = "pudukkottai";
        const response = await fetch(url);
        const res = await response.text();
        let titleText = res.match(/\<title\>(.*?)\<\/title\>/)[1];    
        let price = titleText.replace(`Petrol Price in ${place}, Petrol Rate Today`, '').replace(' - Goodreturns','').match(/Rs.(.*?)\/Ltr/)[1].trim();
        console.log(price);
        fuelDetailsBlock = res.match(/\<div class="fuel-block-details"\>(.*?)\<\/div>/s)[1];
        fuelChangeBlock = fuelDetailsBlock.match(/\<span class="(.*?)"\>(.*?)\<i class="/s)[2];        
        console.log(fuelChangeBlock);
        // Extract the number using a regular expression
        const finder = fuelChangeBlock.match(/(\d+\.\d+)/);

        if (finder) {
            const change = parseFloat(finder[1]);            
            console.log(`Change details: ${change}`); // Example: 0.20
        } else {
            console.log('Change details: NaN');
        }
        fuelChangeIndicator = fuelDetailsBlock.match(/\<span class="(.*?)"\>(.*?)\<i class="/s)[1];        
        console.log(fuelChangeIndicator);
        let color = `${fuelChangeIndicator.includes("fuel-rate-down") ? '#00FF00' : fuelChangeIndicator.includes("fuel-rate-nochange") ? '#800080' : fuelChangeIndicator.includes("fuel-rate-up") ? '#FF0000' : 'None'}`;
        console.log(color);
        let prefix = `${fuelChangeIndicator.includes("fuel-rate-down") ? '-' : fuelChangeIndicator.includes("fuel-rate-nochange") ? '±' : fuelChangeIndicator.includes("fuel-rate-up") ? '+' : 'None'}`;
        console.log(prefix);

        const df = new DateFormatter();
        df.useMediumDateStyle();
        let updateDate = titleText.match(/Petrol Rate Today \((.*?)\)/s)[1];
        console.log(df.date(updateDate));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


// Example usage
getPetrolPrice();



// title.centerAlignText();

// let text = w.addText("₹"+price);
// text.font = Font.systemFont(25);
// text.centerAlignText();
// let subtext = w.addText(change);
// subtext.font = Font.systemFont(15);
// subtext.rightAlignText();

// Script.setWidget(w);
// Script.complete();
// w.presentMedium();
