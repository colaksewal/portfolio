$(document).ready(function () {

    class Slider {
        constructor(cards) {
            this.cards = cards;
            this.startIndex = 0;
            this.endIndex = 2;
        }

        prevSlide() {
            if (this.startIndex === 0) {
                this.startIndex = this.cards.length - 3;
                this.endIndex = this.cards.length - 1;
            } else {
                this.startIndex--;
                this.endIndex--;
            }
            this.showSlide();
        }

        nextSlide() {
            if (this.endIndex === this.cards.length - 1) {
                this.startIndex = 0;
                this.endIndex = 2;
            } else {
                this.startIndex++;
                this.endIndex++;
            }
            this.showSlide();
        }

        showSlide() {
            var visibleCards = this.cards.slice(this.startIndex, this.endIndex + 1);
            var slideHTML = '';
            var _this = this; // Slider nesnesine erişmek için
            visibleCards.forEach(function (card, index) {
                slideHTML += `
                    <div class="slide">
                        <div class="col-card">
                            <p>${card.title}</p>
                            <div class="card-div">
                                <a href="${card.title.replace(/\s+/g, '-').toLowerCase()}.html"> <!-- Link eklendi -->
                                    <img src="image/Rectangle 6.png" alt="" width="300px">
                                    <button class="rounded-button open-modal" data-modal="myModal${index}"> <i>OK</i> </button>
                                    <img class="project-image" src="${card.image}">
                                </a>
                            </div>
                        </div>
                    </div>`;
            });
            $('.slides').html(slideHTML);
        }
    }

    var projects = [{
            title: "Artificial Intelligence",
            image: "image/robot.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Web Applications",
            image: "image/robot.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Other Works",
            image: "image/developer.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Artificial Intelligence",
            image: "image/robot.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Web Applications",
            image: "image/girl.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Other Works",
            image: "image/girl.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    var slider = new Slider(projects);

    // Button click events
    $(".prev").click(function () {
        slider.prevSlide();
    });
    $(".next").click(function () {
        slider.nextSlide();
    });

    // Initial slide
    slider.showSlide();
});
