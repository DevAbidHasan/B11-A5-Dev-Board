const activityContainer=document.getElementById("activity-log-section");
activityTest("ShopEase-btn", "ShopEase-title");
activityTest("cloud-btn","cloud-title");
activityTest("swiftpay-btn", "swiftpay-title");
activityTest("meta-btn", "meta-title");
activityTest("google-btn", "google-title");
activityTest("Glassdoar-btn", "Glassdoar-title");

// Random Background Color Generator:
const hexvalues=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
let randomColor = () => {
    let hex ='#';
    for(let i=0;i<6;i++){
        let randomIndex=Math.floor(hexvalues.length * Math.random());
        let randomValue=hexvalues[randomIndex];
        hex=hex+randomValue;
    }
    return hex;
}

document.getElementById("theme-generator").addEventListener("click", function(event){
    document.getElementById("main-section").style.backgroundColor=randomColor();
})
