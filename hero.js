
        const slides = document.querySelectorAll(".hero-sec-container .hero-section");
        const dots = document.querySelectorAll(".slider-dots span");
        let current = 0;
        const AUTO_DELAY = 6000; // 6 seconds per slide
        let timer;

        function goToSlide(index) {
            slides[current].classList.remove("active");
            dots[current].classList.remove("active");

            current = index;

            slides[current].classList.add("active");
            dots[current].classList.add("active");
        }

        function nextSlide() {
            const next = (current + 1) % slides.length;
            goToSlide(next);
        }

        function startAutoSlide() {
            timer = setInterval(nextSlide, AUTO_DELAY);
        }

        // init first slide
        slides[0].classList.add("active");

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                clearInterval(timer);
                goToSlide(parseInt(dot.dataset.index));
                startAutoSlide();
            });
        });

        startAutoSlide();
