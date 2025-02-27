const specialist_1 = document.querySelector('.specialists-name-1')
const specialist_2 = document.querySelector('.specialists-name-2')
const specialist_3 = document.querySelector('.specialists-name-3')

const specialist_img_1 = document.querySelector('.specialists-img-1')
const specialist_img_2 = document.querySelector('.specialists-img-2')
const specialist_img_3 = document.querySelector('.specialists-img-3')

const about_ref_toggle_1 = document.querySelector('#about-ref-toggle-1')
const about_ref_toggle_2 = document.querySelector('#about-ref-toggle-2')
const about_ref_toggle_3 = document.querySelector('#about-ref-toggle-3')

/*
The reason i decided to run header() function in here
is that with the .hero-placeholder, I also want to add
a header.
*/
$(".hero-placeholder").load("hero.html", () => {
    header()

    if (document.title === 'About') {
        about()
    } else if (document.title === 'Massage') {
        massage()
    } else if (document.title === 'Manicure and pedicure') {
        mani_pedi()
    }
})

function header() {
    $(".header-placeholder").load("header.html", () => {
        const ham = document.querySelector('.header-hamburger')
        const headerWrapper = document.querySelector('.header-nav-wrapper')
        const close = document.querySelector('.header-close')
    
        function navigation() {
            headerWrapper.style.right = '0'
            headerWrapper.style.display = 'flex'
        }
    
        function closeNavigation() {
            headerWrapper.style.right = '-66%'
            headerWrapper.style.display = 'none'
        }
    
        if (ham) {
            ham.addEventListener('click', navigation)
        }
    
        if (close) {
            close.addEventListener('click', closeNavigation)
        }
    });
}


function about() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')

    title.innerText = 'About page'
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Gravida mattis ullamcorper neque sapien ultrices vulputate tincidunt quam.'

}

function massage() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')

    title.innerText = 'Massage Page'
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Gravida mattis ullamcorper neque sapien ultrices vulputate tincidunt quam.'

}

function mani_pedi() {
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-subtitle')

    title.innerText = 'Manicure & Pedicure'
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur \
    adipiscing elit. Gravida mattis ullamcorper neque sapien ultrices vulputate tincidunt quam.'

}

// console.log(document.title)



$(".footer-placeholder").load("footer.html")


function specialist(e) {
    
    

    const specialists_content = document.querySelector('.specialists-content')

    const jordyn = 'Hey I am Jordyn lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo integer \
                    cras aliquet phasellus nunc. Nunc, faucibus urna integer ac pulvinar \
                    egestas velit cursus. Leo at fringilla non magna vestibulum sed id diam. \
                    Id montes, nisi, lorem tempor faucibus diam tincidunt posuere quis. '
    const jennifer = 'Hey I am Jennifer lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo integer \
                    cras aliquet phasellus nunc. Nunc, faucibus urna integer ac pulvinar \
                    egestas velit cursus. Leo at fringilla non magna vestibulum sed id diam. \
                    Id montes, nisi, lorem tempor faucibus diam tincidunt posuere quis.'
    const cassidy = 'Hey I am Cassidy lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo integer \
                    cras aliquet phasellus nunc. Nunc, faucibus urna integer ac pulvinar \
                    egestas velit cursus. Leo at fringilla non magna vestibulum sed id diam. \
                    Id montes, nisi, lorem tempor faucibus diam tincidunt posuere quis.'

    if (e.target.value === 'Jordyn') {
        specialists_content.innerText = jordyn
        specialist_img_1.classList.add('specialists-img-on');
        specialist_1.classList.add('specialists-content-on')

        specialist_img_2.classList.remove('specialists-img-on')
        specialist_2.classList.remove('specialists-content-on')

        specialist_img_3.classList.remove('specialists-img-on')
        specialist_3.classList.remove('specialists-content-on')

    } else if (e.target.value === 'Jennifer') {
        specialists_content.innerText = jennifer
        specialist_img_2.classList.add('specialists-img-on');
        specialist_2.classList.add('specialists-content-on')

        specialist_img_1.classList.remove('specialists-img-on')
        specialist_1.classList.remove('specialists-content-on')

        specialist_img_3.classList.remove('specialists-img-on')
        specialist_3.classList.remove('specialists-content-on')

    } else if (e.target.value === 'Cassidy') {
        specialists_content.innerText = cassidy
        specialist_img_3.classList.add('specialists-img-on');
        specialist_3.classList.add('specialists-content-on')

        specialist_img_1.classList.remove('specialists-img-on')
        specialist_1.classList.remove('specialists-content-on')

        specialist_img_2.classList.remove('specialists-img-on')
        specialist_2.classList.remove('specialists-content-on')
    }

}

specialist_1.addEventListener('click', specialist)
specialist_2.addEventListener('click', specialist)
specialist_3.addEventListener('click', specialist)

// specialist_img_3.addEventListener('click', specialist)
// specialist_img_3.addEventListener('click', specialist)
// specialist_img_3.addEventListener('click', specialist)

function cta(e) {
    const about_ref_content = document.querySelector('.about-ref-content')
    const referral_name = document.querySelector('.referral-name')
    const referral_company = document.querySelector('.referral-company')
    const referral_img = document.querySelector('.referral-img')


    const about_ref_toggle_1_name = 'Jannette Holland'
    const about_ref_toggle_2_name = 'Jason Curtis'
    const about_ref_toggle_3_name = 'Lennard King'

    const about_ref_toggle_1_company = 'XYZ Corp'
    const about_ref_toggle_2_company = 'ABC Alpha'
    const about_ref_toggle_3_company = '123 Number'


    
    if (e.target.getAttribute('id') === 'about-ref-toggle-1') {
        about_ref_content.innerText = 'I have said it before'
        about_ref_toggle_1.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_1_name
        referral_company.innerText = about_ref_toggle_1_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Jennifer.png')


        about_ref_toggle_2.classList.remove('about-ref-toggle-on')
        about_ref_toggle_3.classList.remove('about-ref-toggle-on')

    } else if (e.target.getAttribute('id') === 'about-ref-toggle-2') {
        about_ref_content.innerText = 'And I will say it again'
        about_ref_toggle_2.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_2_name
        referral_company.innerText = about_ref_toggle_2_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Frank.png')

        about_ref_toggle_1.classList.remove('about-ref-toggle-on')
        about_ref_toggle_3.classList.remove('about-ref-toggle-on')

    } else if (e.target.getAttribute('id') === 'about-ref-toggle-3') {
        about_ref_content.innerText = 'You guys are the best'
        about_ref_toggle_3.classList.add('about-ref-toggle-on') 
        referral_name.innerText = about_ref_toggle_3_name
        referral_company.innerText = about_ref_toggle_3_company
        referral_img.setAttribute('src', 'pic/Images/Home/Spa and Salon/Eliza.png')

        about_ref_toggle_2.classList.remove('about-ref-toggle-on')
        about_ref_toggle_1.classList.remove('about-ref-toggle-on')
    }
}

about_ref_toggle_1.addEventListener('click', cta)
about_ref_toggle_2.addEventListener('click', cta)
about_ref_toggle_3.addEventListener('click', cta)






