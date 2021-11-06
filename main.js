let field = document.querySelector('.main__inner');
let bag = document.querySelector('.main__img');
let newContent = document.querySelector('.main__item-content');
let secondBag = document.querySelector('.main__img-second');
let title = document.getElementById('title');
let stack = [];


field.addEventListener('click', e => {
    if (e.target.className == 'main__items-img') {
        e.target.classList.add('.active')
        e.target.remove()
        stack.push(e.target)
        console.log(stack);
    }
    bag.addEventListener('click', evnt => {
        if (evnt.target.className == 'main__img') {
            let i = stack.shift();
            newContent.appendChild(i);
            let newLength = newContent.children.length;
            if (newLength == 5) {
                newContent.remove();
                bag.style.display = 'none';
                secondBag.style.display = 'block';
                title.innerText = 'Congratulations! You are ready to school!!!';
            }

        }

    })
})