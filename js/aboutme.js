

$(document).ready(function() {

    
    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   300,
        itemsBaseURL:     '', // Boş bırakıyoruz çünkü yerel dosyalar kullanacağız
        
        // ### gallery content ### 
        items: [
            { src: 'image/topluluk1.png', srct: 'image/topluluk1.png', title: 'Image 1' },
            { src: 'image/topluluk2.png', srct: 'image/topluluk2.png', title: 'Image 2' },
            { src: 'image/topluluk3.png', srct: 'image/topluluk3.png', title: 'Image 3' }
           
          ]
      });
      function fetchEducation() {
        $.ajax({
            url: 'works/education.json',
            method: 'GET',
            success: function(data) {
                let content = '';
                data.education.forEach(item => {
                    content += `<li class = "title">${item.school}<span class="subtitle d-block">${item.years}</span></li>`;
                });
                $('#education-list').html(content);
            },
            error: function(error) {
                console.log('Error fetching education data:', error);
            }
        });
    }

    function fetchSocialActivity() {
        $.ajax({
            url: 'works/social_activity.json',
            method: 'GET',
            success: function(data) {
                let content = '';
                data.socialActivity.forEach(activity => {
                    content += `<li class = "title">${activity}</li>`;
                });
                $('#socialActivity-list').html(content);
            },
            error: function(error) {
                console.log('Error fetching social activity data:', error);
            }
        });
    }

    function animateSections() {
        setInterval(function() {
            let educationList = $('#education-list');
            let socialActivityList = $('#socialActivity-list');

            educationList.addClass('rotateX');
            socialActivityList.addClass('rotateX');

            setTimeout(function() {
                educationList.removeClass('rotateX');
                socialActivityList.removeClass('rotateX');

                let firstEducationItem = educationList.children().first();
                let firstSocialActivityItem = socialActivityList.children().first();

                educationList.append(firstEducationItem.clone());
                socialActivityList.append(firstSocialActivityItem.clone());

                firstEducationItem.remove();
                firstSocialActivityItem.remove();
            }, 1000); // Animasyon süresi
        }, 3000); // 3 saniyede bir dönüşüm yapar
    }

    fetchEducation(); 
    fetchSocialActivity(); // İlk başta sosyal aktiviteleri yükle
    setTimeout(animateSections, 500); 
});
