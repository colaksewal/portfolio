jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  150,
        thumbnailWidth:   150,
        itemsBaseURL:     '', // Boş bırakıyoruz çünkü yerel dosyalar kullanacağız
        
        // ### gallery content ### 
        items: [
            { src: 'image/topluluk1.png', srct: 'image/topluluk1.png', title: 'Title 1' },
            { src: 'image/topluluk2.png', srct: 'image/topluluk2.png', title: 'Title 2' },
            { src: 'image/topluluk3.png', srct: 'image/topluluk3.png', title: 'Title 3' }
           
          ]
      });
});
