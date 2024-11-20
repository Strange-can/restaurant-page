const about = ( function () {
    //declare #content div which will be parent element
    const content = document.getElementById("content")

    const aboutTitle = document.createElement("p")
    aboutTitle.setAttribute("id", "about-title")
    aboutTitle.textContent = 'About Us'

    //make about-container to hold all content (so that the content occupy only 80% of screen with css)
    const aboutBox = document.createElement("div")
    aboutBox.setAttribute("id", "about-container")

    //section 1(welcome) -- subheading with text
    const subheading1 = document.createElement("p")
    subheading1.classList.add("sub-heading")
    subheading1.textContent = 'Welcome to Pizza Place - Where Flavor Meets Tradition!'

    const text1 = document.createElement("p")
    text1.classList.add("text")
    text1.innerHTML = 'At Pizza Place, we\'re more than just a pizza place — we\'re a family that brings the authentic taste of Italy to your table.\
                <br />Located in the heart of [City/Town Name], we\'ve been serving up delicious, hand-crafted pizzas for over [X] years,\
                and every bite is a celebration of quality, passion, and the love of great food.'

    aboutBox.append(subheading1, text1)

    //section 2(our story)
    const subheading2 =  document.createElement("p")
    subheading2.classList.add("sub-heading")
    subheading2.textContent = 'Our Story'

    const text2 = document.createElement("p")
    text2.classList.add("text")
    text2.textContent = 'It all started with a love for pizza and a dream to share our passion with others.\
      Our founder, Strange Can, grew up with family recipes passed down through generations.\
       From the perfect dough to our secret tomato sauce and freshly selected toppings,\
        we strive to create a pizza experience like no other.'

    const text3 = document.createElement("p")
    text3.classList.add("text")
    text3.textContent = 'Every pizza is made with the finest, locally sourced ingredients,\
                 and we pride ourselves on offering a wide variety of classic and innovative options to suit every taste.\
                  Whether you\'re a fan of the simple Margherita or an adventurous foodie ready to try something new,\
                   we\’ve got something for everyone.'
    
    aboutBox.append( subheading2, text2, text3 )

    //section 3(our values)
    const subheading3 =  document.createElement("p")
    subheading3.classList.add("sub-heading")
    subheading3.textContent = 'Our Values'
    
    //list container for the 4 values
    const list = document.createElement("ul")
    
    const value1 = document.createElement("li")
    value1.textContent = 'We believe in using only the best,\
                      locally-sourced produce, fresh cheeses,\
                       and premium meats to ensure every bite bursts with flavor.'
    const valueheading1 = document.createElement("p")
    valueheading1.classList.add("li-bold")
    valueheading1.textContent = 'Quality Ingredients:'
    value1.prepend(valueheading1)
    list.append(value1)

    const value2 = document.createElement("li")
    value2.textContent = 'Each pizza is hand-tossed and cooked in a traditional stone oven,\
                      guaranteeing a crispy, delicious crust every time.'
    const valueheading2 = document.createElement("p")
    valueheading2.classList.add("li-bold")
    valueheading2.textContent = 'Craftsmanship:'
    value2.prepend(valueheading2)
    list.append(value2)

    const value3 = document.createElement("li")
    value3.textContent = 'We love being a part of the [City/Town Name] community,\
                     and our mission is to create a welcoming,\
                      family-friendly space where everyone can enjoy a great meal together.'
    const valueheading3 = document.createElement("p")
    valueheading3.classList.add("li-bold")
    valueheading3.textContent = 'Community:'
    value3.prepend(valueheading3)
    list.append(value3)

    const value4 = document.createElement("li")
    value4.textContent = 'We’re committed to sustainability by minimizing waste and using eco-friendly packaging whenever possible.'
    const valueheading4 = document.createElement("p")
    valueheading4.classList.add("li-bold")
    valueheading4.textContent = 'Sustainability:'
    value4.prepend(valueheading4)
    list.append(value4)

    aboutBox.append( subheading3, list )

    //section 4(contact)
    const subheading4 = document.createElement("p")
    subheading4.classList.add("sub-heading")
    subheading4.textContent = 'Join us today!'

    const text4 = document.createElement("p")
    text4.classList.add("text")
    text4.textContent = 'Whether you\'re dining in or ordering for delivery,\
                 we can\'t wait to share our love of pizza with you.\
                 Stop by and enjoy a slice (or two) at Pizza Place today — where every meal is made with love.'

    const contact = document.createElement("p")
    contact.setAttribute("id", "contact")
    contact.textContent = 'Visit Us: [Address] [Phone Number] [Email Address]'

    aboutBox.append( subheading4, text4, contact )
    
    let createAbout = () => { 
        content.textContent = ''
        content.append(aboutTitle)
        content.append(aboutBox)
    }

    return { createAbout }
})()

export { about }