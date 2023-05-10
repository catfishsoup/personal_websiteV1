const jobNav = document.querySelectorAll('#work-list li')
const jobList = document.querySelectorAll('.job-desc-child')
const aboutCont = document.getElementById('about-container')

for(let x = 0; x < jobNav.length; x++) {
    jobNav[x].onclick = function(e) {
        jobNav.forEach( f => f.classList.remove('active'))

        jobList.forEach(x => x.classList.add('hidden'))
        jobList.forEach(x => x.classList.remove('view'))
        
        e.target.classList.add('active')   
        jobList[x].classList.add('view')
    }
}

const miniNav = document.getElementById('mini-nav')
const navBar = document.getElementById('navigation-bar')
miniNav.onclick = () => {
    navBar.classList.toggle('active')
}