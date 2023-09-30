const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name_id = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData()  {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, illum!'
    profile_img.innerHTML = '<img src="https://media.licdn.com/dms/image/D4D03AQES_zJEFhzogA/profile-displayphoto-shrink_800_800/0/1692492747707?e=1701302400&v=beta&t=k2vhoZ2cJk7EGowf1pbViFrItA4HRMSF6UmVeeuxTy8" alt="">'
    name_id.innerHTML = 'Oluwasewasayemi'
    date.innerHTML = 'sept 30, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))

}