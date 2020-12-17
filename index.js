let timer = document.querySelector('.timer')
let footer = document.querySelector('.footer')


 
let footerImage = document.createElement('img')
    footerImage.src = 'images/pattern-hills.svg'
    footer.append(footerImage)

  
const boxes = () => {

//first box
    let outer = document.createElement('div')
        outer.className = 'outer'

    let box = document.createElement('div')
    let label = document.createElement('p')
        label.innerText = 'Day'

    outer.append(box, label)
    box.className = 'box'
 
    timer.append(outer)
    // box.innerText = "1"

    let cornerCut = document.createElement('div')
    cornerCut.className = 'cornerCut'

    let textDiv = document.createElement('div')
        textDiv.innerText = `0`
        textDiv.className = 'text'
        textDiv.id = 'days'

    let cornerCut2 = document.createElement('div')
    cornerCut2.className = 'cornerCut2'
    box.append(cornerCut, textDiv, cornerCut2)

//second box
let outer2 = document.createElement('div')
        outer2.className = 'outer'

    let box2 = document.createElement('div')
    let label2 = document.createElement('p')
        label2.innerText = 'Hours'

    box2.className = 'box'
    outer2.append(box2, label2)
    timer.append(outer2)

    let cornerCut3 = document.createElement('div')
    cornerCut3.className = 'cornerCut'

    let textDiv2 = document.createElement('div')
        textDiv2.innerText = `0`
        textDiv2.className = 'text'
        textDiv2.id = 'hours'

    let cornerCut4 = document.createElement('div')
    cornerCut4.className = 'cornerCut2'
    box2.append(cornerCut3, textDiv2, cornerCut4)
//third box

let outer3 = document.createElement('div')
        outer3.className = 'outer'

    let box3 = document.createElement('div')
    let label3 = document.createElement('p')
        label3.innerText = 'Minutes'
    outer3.append(box3, label3)

    box3.className = 'box'
    timer.append(outer3)

    let cornerCut5 = document.createElement('div')
    cornerCut5.className = 'cornerCut'

    let textDiv3 = document.createElement('div')
    textDiv3.innerText = `0`
    textDiv3.className = 'text'
    textDiv3.id = 'minutes'

    let cornerCut6 = document.createElement('div')
    cornerCut6.className = 'cornerCut2'
    box3.append(cornerCut5, textDiv3, cornerCut6)

//fourth box
let outer4= document.createElement('div')
        outer4.className = 'outer'

    let box4 = document.createElement('div')
    box4.className = 'box'
    let label4 = document.createElement('p')
        label4.innerText = 'seconds'
        outer4.append(box4, label4)
    timer.append(outer4)

    let cornerCut7 = document.createElement('div')
    cornerCut7.className = 'cornerCut'

    let textDiv4 = document.createElement('div')
    textDiv4.innerText = `0`
    textDiv4.className = 'text'
    textDiv4.id = 'seconds'

    let cornerCut8 = document.createElement('div')
    cornerCut8.className = 'cornerCut2'
    box4.append(cornerCut7, textDiv4, cornerCut8)

}

boxes()

const countDown = () => {
    const difference = +new Date("2021-01-01") - +new Date();
    console.log(difference)
    if (difference > 0) {
        const parts = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        
        };
      
        updateCount(parts)
    }
}

const updateCount = (time) => {
   
    let day = document.getElementById('days')
        day.innerText = `${time.days}`
    let hours = document.getElementById('hours')
        hours.innertime = `${time.hours}`
    let minutes = document.getElementById('minutes')
        minutes.innerText = `${time.minutes}`
    let seconds = document.getElementById('seconds')
         seconds.innerText = `${time.seconds}`
}

setInterval(countDown, 1000)







