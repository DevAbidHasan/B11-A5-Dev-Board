
document.getElementById("ShopEase-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    // document.getElementById("ShopEase-btn").setAttribute=("disabled", true);
    alert("Board Updated Successfully.")
    if(assignedSum===0)
    {
        alert("Congrates!!! You have completed all the current tasks.")
    }
    const btnDisable=document.getElementById("ShopEase-btn");
    document.getElementById("ShopEase-btn").innerText="Completed"
    document.getElementById("ShopEase-btn").style.backgroundColor="gray";
    document.getElementById("ShopEase-btn").style.cursor="default";
    btnDisable.disabled=true;
})


document.getElementById("cloud-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    alert("Board Updated Successfully.")
    if(assignedSum===0)
        {
            alert("Congrates!!! You have completed all the current tasks.")
        }
    const btnDisable=document.getElementById("cloud-btn");
    document.getElementById("cloud-btn").innerText="Completed"
    document.getElementById("cloud-btn").style.backgroundColor="gray";
    document.getElementById("cloud-btn").style.cursor="default";
    btnDisable.disabled=true;
})


document.getElementById("swiftpay-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    alert("Board Updated Successfully.")
    if(assignedSum===0)
        {
            alert("Congrates!!! You have completed all the current tasks.")
        }
    const btnDisable=document.getElementById("swiftpay-btn");
    document.getElementById("swiftpay-btn").innerText="Completed"
    document.getElementById("swiftpay-btn").style.backgroundColor="gray";
    document.getElementById("swiftpay-btn").style.cursor="default";
    btnDisable.disabled=true;
})


document.getElementById("meta-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    alert("Board Updated Successfully.")
    if(assignedSum===0)
        {
            alert("Congrates!!! You have completed all the current tasks.")
        }
    const btnDisable=document.getElementById("meta-btn");
    document.getElementById("meta-btn").innerText="Completed"
    document.getElementById("meta-btn").style.backgroundColor="gray";
    document.getElementById("meta-btn").style.cursor="default";
    btnDisable.disabled=true;
})


document.getElementById("google-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    alert("Board Updated Successfully.");
    if(assignedSum===0)
        {
            alert("Congrates!!! You have completed all the current tasks.")
        }
    const btnDisable=document.getElementById("google-btn");
    document.getElementById("google-btn").innerText="Completed"
    document.getElementById("google-btn").style.backgroundColor="gray";
    document.getElementById("google-btn").style.cursor="default";
    btnDisable.disabled=true;
})


document.getElementById("Glassdoar-btn")
.addEventListener("click", function(event){
    const headerTaskCounter=parseInt(document.getElementById("header-task-counter").innerText); //23
const assignedTaskCounter=parseInt(document.getElementById("assigned-task-counter").innerText); //05
    const headerSum=headerTaskCounter+1;
    const assignedSum=assignedTaskCounter-1;
    document.getElementById("header-task-counter").innerText=headerSum;
    document.getElementById("assigned-task-counter").innerText=assignedSum;
    alert("Board Updated Successfully.");
    if(assignedSum===0)
        {
            alert("Congrates!!! You have completed all the current tasks.")
        }
    const btnDisable=document.getElementById("Glassdoar-btn");
    document.getElementById("Glassdoar-btn").innerText="Completed"
    document.getElementById("Glassdoar-btn").style.backgroundColor="gray";
    document.getElementById("Glassdoar-btn").style.cursor="default";
    btnDisable.disabled=true;
})



// addTask("ShopEase-btn");
// addTask("cloud-btn");
// addTask("swiftpay-btn");
// addTask("meta-btn");
// addTask("google-btn");
// addTask("Glassdoar-btn");