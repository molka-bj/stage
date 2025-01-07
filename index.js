document.addEventListener("DOMContentLoaded",function(){
    let inp=document.getElementById("inp")
    let dat=document.getElementById("dt")
    let bot=document.getElementById("add")
    let list=document.getElementById('list')
    bot.addEventListener("click",function(){
        let task=inp.value.trim()
        let taskdate=dat.value 
        if(task&&taskdate){
            addtask(task,taskdate)
            inp.value=''
            dat.value=''
        }
        if(taskdate==''){
            taskdate=new Date
        }
    })
    function addtask(tas,dt){
        let li=document.createElement('li')
        let check=document.createElement('input')
        check.type='checkbox'
        check.onclick=function(){
            li.classList.toggle('cll')
        }
        let label=document.createElement('label')
        label.textContent=tas+' '+dt
        let dtbt=document.createElement('button')
        dtbt.textContent='delete'
        dtbt.onclick=function(){
            li.remove()
        }
        li.appendChild(check)
        li.appendChild(label)
        li.appendChild(dtbt)
        list.appendChild(li)

    }
})
