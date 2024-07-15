document.addEventListener("DOMContentLoaded", () => {
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      const menulist = document.getElementById("pure-menu-list");
      data.testimonials.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = `"${element.quote}"  - ${element.location}`;
        menulist.appendChild(li);
      });

      const carouselInner = document.getElementById("carouselInner");

      data.testimonials.forEach((testimonial, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

        carouselItem.innerHTML = `
        <img src="${testimonial.heroImage}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5 id="crs-header">${testimonial.quote}</h5>
            <p id="crs-text">${testimonial.location}</p>
        </div>
    `;

        carouselInner.appendChild(carouselItem);
      });
    });
});
