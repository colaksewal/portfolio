jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  150,
        thumbnailWidth:   150,
        itemsBaseURL:     '', // Boş bırakıyoruz çünkü yerel dosyalar kullanacağız
        
        // ### gallery content ### 
        items: [
            { src: 'image/girl.png', srct: 'image/girl.png', title: 'Title 1' },
            { src: 'path_to_your_image2.jpg', srct: 'path_to_your_thumbnail2.jpg', title: 'Title 2' },
            { src: 'path_to_your_image3.jpg', srct: 'path_to_your_thumbnail3.jpg', title: 'Title 3' }
          ]
      });
});
