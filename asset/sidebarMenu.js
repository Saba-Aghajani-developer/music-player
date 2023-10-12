let inw = 0
let _li = document.querySelectorAll('main > ul > li')
let _a = document.querySelectorAll(' main > ul > li > a')
window.addEventListener('resize', ()=>{
    inw = window.innerWidth
    console.log(inw);
    if ( inw <= 992 && flag ==1){
        _add()
    }else{
        flag = 0
        document.getElementById('sidemenu').classList.remove('sidebarul')
        _li.forEach((i)=>{
            i.classList.remove('sidebarli')
        })
        _a.forEach((i)=>{
            i.classList.remove('sidebara')
        })
    }
})

let flag = 0
document.getElementById('ham').addEventListener('click',()=>{
    flag =1
    _add()
})

function _add(){
    document.getElementById('sidemenu').classList.add('sidebarul')
    _li.forEach((i)=>{
        i.classList.add('sidebarli')
    })
    _a.forEach((i)=>{
        i.classList.add('sidebara')
    })
}
