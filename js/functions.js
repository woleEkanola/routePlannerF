var opened= true
var timeline= document.querySelector('#dispatch-gnatt-chart')
var toggler=  document.querySelector('.toggleTimeline')
var dmap = document.querySelector('#map')

// toggle timeline 
toggler.addEventListener('click', function(){
    if(opened){
        timeline.style.display = 'none'
        this.innerHTML= 'Show Timeline'
        map.style.height= '100vh'
        opened = false
    }else{
        timeline.style.display = 'block'
        this.innerHTML= 'Hide Timeline'
        dmap.style.height= '60vh'
        opened = true
    }
})

// display info of a marker
var infoTab= document.querySelector('.sidebar')

displayInfo = function(info){

let sidebarContent =  `
<div>
<p> ${info.name} - <span>${info.driver}</span></p>
</div>

<p> Name  -  ${info.name}</p>
<p> Address  -  ${info.address}</p>
<p> Duration  -  30 mins</p>

`
infoTab.innerHTML= sidebarContent
infoTab.classList.add('slideIn')
}

var checkTab = function(x){
let targetDriver = columns[x]
let targetMarker = drivers.filter(driver=>{
    console.log(driver)
    console.log(driver.name == targetDriver[0]  && driver.routes[x].label == x)
    return driver.name == targetDriver[0] 
})
console.log(targetMarker)
}