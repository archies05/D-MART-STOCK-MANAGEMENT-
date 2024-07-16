document.addEventListener("DOMContentLoaded", () => {
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      const menulist = document.getElementById("pure-menu-list");
      data.testimonials.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = `"${element.quote}"  ${element.location}`;
        menulist.appendChild(li);
      });

      const carouselInner = document.getElementById("carouselInner");

      data.testimonials.forEach((testimonial, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

        carouselItem.innerHTML = `
        <img src="${testimonial.heroImage}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5 id="crs-header">"${testimonial.quote}"</h5>
            <p id="crs-text">${testimonial.location}</p>
        </div>
    `;

        carouselInner.appendChild(carouselItem);
      });
      const copyrightText = document.getElementById("copyrightText");
      console.log(data.copyrightText);
      copyrightText.innerText = data.copyrightText;

      const heroText = document.getElementById("heroText");
      heroText.innerText = data.heroText.heading;

      const heroTextsubheading = document.getElementById("heroTextsubheading");
      heroTextsubheading.innerText = data.heroText.subheading;

      const aboutHeading1 = document.getElementById("aboutheading1");
      aboutHeading1.innerText = data.about.heading1;

      const aboutcontent1 = document.getElementById("content1");
      aboutcontent1.innerText = data.about.content1;

      const aboutHeading2 = document.getElementById("aboutheading2");
      aboutHeading2.innerText = data.about.heading2;

      const aboutcontent2 = document.getElementById("content2");
      aboutcontent2.innerText = data.about.content2;

      const aboutHeading3 = document.getElementById("aboutheading3");
      aboutHeading3.innerText = data.about.heading3;

      const aboutcontent3 = document.getElementById("content3");
      aboutcontent3.innerText = data.about.content3;

      const testimonials = document.getElementById("testimonials");
      testimonials.innerText = data.testimonialHeading;

      const testimonialsSubheading = document.getElementById(
        "testimonialsSubheading"
      );
      testimonialsSubheading.innerText = data.testimonialsSubheading;

      const heroImageBox = document.getElementById("heroImageBox");
      heroImageBox.innerHTML = `<img src="${data.heroImage}" class="img-fluid">`;

      const profitability = document.getElementById("profitability");
      profitability.src = data.image1;

      const accuracy = document.getElementById("accuracy");
      accuracy.src = data.image2;

      const efficiency = document.getElementById("efficiency");
      efficiency.src = data.image3;

      const enquiry = document.getElementById("enquiry");
      enquiry.innerText = data.enquiry;
    });
});
