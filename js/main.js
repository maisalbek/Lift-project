let up = document.querySelector('#goup')
let down = document.querySelector('#godown')
let lift = document.querySelector('#lift')
let showinfo = document.querySelector('.showinfo')


showinfo.innerText = 1
let elevator = {
    currentfloor: 1,
    liftstep: 80,
    maxfloor: 8,
    minfloor: 1,
    printFloor(){
         showinfo.innerText = this.currentfloor
    },
    downOneFloor(){
        if(this.currentfloor > this.minfloor){
          let cur = this.currentfloor
            this.currentfloor--
            this.printFloor()
            moveDown(lift,cur,this.currentfloor)
            
        }else{
            showinfo.innerText = '❌'
        }
    },
    upOneFloor(){
        if(this.currentfloor < this.maxfloor){
          let cur = this.currentfloor
            this.currentfloor++
            this.printFloor()
              moveUp(lift,cur,this.currentfloor)
            }else{
            showinfo.innerText = '❌'
        }
    },
    toFloor(num){
        if(num <= this.maxfloor && num >= this.minfloor){
          console.log(num);
          if(num>this.currentfloor){
            moveUp(lift,this.currentfloor,num)
            this.currentfloor = num
            this.printFloor()

          }else if(num<this.currentfloor){
            moveDown(lift,this.currentfloor,num)
            this.currentfloor = num
            this.printFloor()
          }    
        }
    }
}
up.addEventListener('click',()=>{
    elevator.upOneFloor()
  
})
down.addEventListener('click',()=>{
    elevator.downOneFloor()
})
document.addEventListener('click', (e) => {
    let arr = [...e.target.classList]
    if(arr.includes('b1')){
        elevator.toFloor(parseInt(e.target.innerText))
    }else if(arr.includes('b2')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }else if(arr.includes('b3')){
        elevator.toFloor(parseInt(e.target.innerText))  
    }else if(arr.includes('b4')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }else if(arr.includes('b5')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }else if(arr.includes('b6')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }else if(arr.includes('b7')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }else if(arr.includes('b8')){
        elevator.toFloor(parseInt(e.target.innerText))    
    }
})
function moveUp(elem,cur,target,time=10) {
    let bottom = 80*(cur-1)
    function move() {
      bottom++  
      elem.style.bottom = bottom + 'px'
      if(bottom == 80*(target-1))  
      clearInterval(id)
    }
    let id = setInterval(move, time)    
}
function moveDown(elem,cur,target,time=10) {
    let bottom = 80*(cur-1)
    function move() {
      bottom--  
      elem.style.bottom = bottom + 'px'
      if(bottom == 80*(target-1))  
      clearInterval(id)
    }
    let id = setInterval(move, time)
}