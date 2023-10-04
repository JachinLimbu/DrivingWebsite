const headings = document.getElementsByClassName('content-info')[0].querySelectorAll('.content-info-heading')
const testimonialWrapper = document.querySelector('.testimonial-wrapper')

const testimonials = [
  {
    id: 0,
    title: 'Best Instructor',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur quos officia voluptatem eos autem, voluptates rerum 
    ab magnam culpa vel! Aut excepturi perspiciatis minima molestias 
    assumenda reiciendis inventore a facere?`
  },
  {
    id: 1,
    title: 'Professional and patient',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur quos officia voluptatem eos autem, voluptates rerum 
    ab magnam culpa vel! Aut excepturi perspiciatis minima molestias 
    assumenda reiciendis inventore a facere?`
  },
  {
    id: 2,
    title: 'Quick pass rate!',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur quos officia voluptatem eos autem, voluptates rerum 
    ab magnam culpa vel! Aut excepturi perspiciatis minima molestias 
    assumenda reiciendis inventore a facere?`
  },
  {
    id: 3,
    title: 'Professional and patient',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur quos officia voluptatem eos autem, voluptates rerum 
    ab magnam culpa vel! Aut excepturi perspiciatis minima molestias 
    assumenda reiciendis inventore a facere?`
  },
  {
    id: 4,
    title: 'Quick pass rate!',
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur quos officia voluptatem eos autem, voluptates rerum 
    ab magnam culpa vel! Aut excepturi perspiciatis minima molestias 
    assumenda reiciendis inventore a facere?`
  }
]


function createTestimonials(){
  for (let i = 0; i < 3; i++){
    const div = document.createElement('div')
    const divtop = document.createElement('div')
    const span = document.createElement('span')
    const testimonialTitle = document.createElement('h2')
    const testimonialBody = document.createElement('p')

    div.classList.add('testimonial-item')
    divtop.classList.add('testimonial-item-top')
    span.classList.add('testimonial-user-profile')
    testimonialTitle.classList.add('testimonial-heading')
    testimonialBody.classList.add('testimonial-body')

    testimonialTitle.innerHTML = 
      testimonials[i].title.length > 15 ? 
          testimonials[i].title.slice(0,15)+' ...' :
          testimonials[i].title.slice(0,15)
    testimonialBody.innerHTML = testimonials[i].body.slice(0,100)

    divtop.appendChild(span)
    divtop.appendChild(testimonialTitle)
    div.appendChild(divtop)
    div.appendChild(testimonialBody)

    testimonialWrapper.appendChild(div)

  }
}

function nextTestimonial(){

}


function previousTestimonial(){

}

function goToAboutPage(){
  location.assign('/about')
}

createTestimonials()





// for (let i = 0; i<headings.length; i++){
//   headings[i].style.transform = 'translateX(0)'
// }
