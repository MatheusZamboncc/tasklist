
class taskList{
    constructor(title, id, status){
        this.title = title;
        this.id = id;
        this.status = status;
    
    }
    getContent(){
        this.title = inputv;
    }
}
function tasks(){
    let inputv = document.getElementById("inp1").value;
    let things = new task(inputv);
    ins.innerHTML = `
<div class ="listitems">
<h1>${this.title}</h1>
<button class = "btn" onclick="(${inputv})"><i class ='fa-solid fa-check' style="color: #f5f9ff; ></i>
</div>
     `
    console.log(inputv);
}