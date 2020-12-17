let timer = document.querySelector('.timer')
let footer = document.querySelector('.footer')


 
let footerImage = document.createElement('img')
    footerImage.src = 'images/pattern-hills.svg'
    footer.append(footerImage)

const boxes = () => {

//first box
    let box = document.createElement('div')
    box.className = 'box'
    timer.append(box)
    // box.innerText = "1"

    let cornerCut = document.createElement('div')
    cornerCut.className = 'cornerCut'

    let textDiv = document.createElement('div')
        textDiv.innerText = '01'
        textDiv.className = 'text'

    let cornerCut2 = document.createElement('div')
    cornerCut2.className = 'cornerCut2'
    box.append(cornerCut, textDiv, cornerCut2)

//second box

    let box2 = document.createElement('div')
    box2.className = 'box'
    timer.append(box2)

    let cornerCut3 = document.createElement('div')
    cornerCut3.className = 'cornerCut'

    let textDiv2 = document.createElement('div')
        textDiv2.innerText = '25'
        textDiv2.className = 'text'

    let cornerCut4 = document.createElement('div')
    cornerCut4.className = 'cornerCut2'
    box2.append(cornerCut3, textDiv2, cornerCut4)
//third box

    let box3 = document.createElement('div')
    box3.className = 'box'
    timer.append(box3)

    let cornerCut5 = document.createElement('div')
    cornerCut5.className = 'cornerCut'

    let textDiv3 = document.createElement('div')
    textDiv3.innerText = '18'
    textDiv3.className = 'text'

    let cornerCut6 = document.createElement('div')
    cornerCut6.className = 'cornerCut2'
    box3.append(cornerCut5, textDiv3, cornerCut6)

//fourth box
    let box4 = document.createElement('div')
    box4.className = 'box'
    timer.append(box4)

    let cornerCut7 = document.createElement('div')
    cornerCut7.className = 'cornerCut'

    let textDiv4 = document.createElement('div')
    textDiv4.innerText = '25'
    textDiv4.className = 'text'

    let cornerCut8 = document.createElement('div')
    cornerCut8.className = 'cornerCut2'
    box4.append(cornerCut7, textDiv4, cornerCut8)

}

boxes()



