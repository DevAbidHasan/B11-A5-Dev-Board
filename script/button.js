const activityContainer=document.getElementById("activity-log-section");
activityTest("ShopEase-btn", "ShopEase-title");
activityTest("cloud-btn","cloud-title");
activityTest("swiftpay-btn", "swiftpay-title");
activityTest("meta-btn", "meta-title");
activityTest("google-btn", "google-title");
activityTest("Glassdoar-btn", "Glassdoar-title");

// History Clear Button Functionalities
const activityLogBtn=document.getElementById("activity-log-btn");
document.getElementById("activity-log-btn")
.addEventListener("click", function(event){
    alert("Confirm to Delete Activity Log?");
    // document.getElementById("activity-log-btn").innerText="History Cleared";
    // document.getElementById("activity-log-btn").style.backgroundColor="gray";
    // document.getElementById("activity-log-btn").style.cursor="default";
    // activityLogBtn.disabled=true;
   
    document.getElementById('activity-log-text').style.display='none';
    
})
