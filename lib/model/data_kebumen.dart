class DataKebumen {
  String name;
  String location;
  String description;
  String openDays;
  String openTime;
  String imageAsset;
  List<String> imageUrls;

  DataKebumen({
    required this.name,
    required this.location,
    required this.description,
    required this.openDays,
    required this.openTime,
    required this.imageAsset,
    required this.imageUrls,
  });
}

var dataKebumenList = [
  DataKebumen(
    name: 'Benteng Van den Wijck',
    location: 'Gombong',
    description:
        'Terletak sekitar 20 km sebelah barat dari Ibukota Kabupaten Kebumen.Puluhan pintu dan jendela menjadi fitur menarik bangunan yang kemudian diubah menjadi benteng yang menjadi salah satu destinasi wisata di Kebumen yang cukup ikonik. ',
    openDays: 'Open Everyday',
    openTime: '08.00 - 17.00',
    imageAsset: 'images/benteng-van-der-wijk.jpg',
    imageUrls: [
      'https://assets.pikiran-rakyat.com/crop/136x76:743x563/750x500/photo/2022/04/10/3408445518.png',
      'https://awsimages.detik.net.id/community/media/visual/2022/03/15/pesona-benteng-van-der-wijck-4.jpeg?w=600&q=90',
      'https://awsimages.detik.net.id/community/media/visual/2021/09/12/pesona-merah-merona-benteng-van-der-wijck-3.jpeg?w=600&q=90',
      'https://3.bp.blogspot.com/-epKmdDDLRLU/VhCmgOf3V_I/AAAAAAAAJ7s/5FfMx8CUy4I/s1600/Kereta%2BMini%2BBenteng%2BVan%2BDer%2BWijck.jpg'
    ],
  ),
  DataKebumen(
    name: 'Bukit Pentulu Indah',
    location: 'Karangsambung',
    description:
        'Bukit ini merupakan bagian dari Cagar Alam Nasional Geologi Karangsambung.Dari total luas lahan 20 hektar, lima hektar di antaranya dapat kamu jelajahi untuk mencari titik terbaik menunggu matahari terbit. Untuk itu, berkemah bersama teman-teman di sini bisa kamu jadikan aktivitas akhir pekanmu.',
    openDays: 'Open Everyday',
    openTime: '06.00 - 18.00',
    imageAsset: 'images/pentulu-indah.jpg',
    imageUrls: [
      'https://2.bp.blogspot.com/--dQHx8LwXgw/XHsfFW1vYsI/AAAAAAAANSw/2y77Vc4Owm8c_wsTicoTSxGXhNhgdI22wCLcBGAs/s640/52980020_397303327483947_7674730121248374784_n.jpg',
    ],
  ),
  DataKebumen(
    name: 'Waduk Sempor',
    location: 'Kebumen',
    description:
        'Di Kebumen ada tempat yang menawarkan kesejukan, serta pemandangan matahari terbit yang indah, yaitu Waduk Sempor.Lokasinya terletak di perbukitan dengan ribuan pohon pinus. Waduk ini merupakan bendungan yang menghubungkan Sungai Jatinegara atau Sungai Sempor, Sungai Cicingguling, dan Samudra Hindia.Keberadaannya sangat penting untuk mengairi ribuan sawah di wilayah Kabupaten Kebumen bagian barat. Selanjutnya, Waduk Sempor mungkin akan menempati posisi penting untuk feeds Instagram-mu.',
    openDays: 'Open Everyday',
    openTime: '00.00-23.59',
    imageAsset: 'images/waduk-sempor.jpg',
    imageUrls: [
      'https://fastly.4sqi.net/img/general/200x200/20360242_H-XvKVDyoWbM7RT8lOpsCZ2lr1tgFyb26X32eOwiWOc.jpg',
      'https://1.bp.blogspot.com/-RoDeydijwwo/YRH2QrZYe7I/AAAAAAAFqiU/0PvYYE7S6jUzv2BqD4uMnYAyJjNfLNPBgCLcBGAsYHQ/s2048/IMG_9715.jpg',
      'https://pbs.twimg.com/media/EwABL9_VEAEaTXy.jpg'
    ],
  ),
  DataKebumen(
    name: 'Bukit Hud',
    location: 'Karangbolong',
    description:
        'Bukit Hood, Hud, atau Uhud adalah bukit yang berada di ketinggian 150 mdpl (meter di atas permukaan laut). Dari ketinggian, kamu bisa menikmati pemandangan yang mengesankan akan pesisir selatan Pulau Jawa.Ada juga spot menarik yang dibuat warga lokal, yaitu anjungan untuk para pengunjung agar bisa melihat garis pantai dengan lebih jelas. Tentu saja, view yang menawan ini tidak disia-siakan oleh para penggemar fotografi. Lokasinya cukup mudah dijangkau kok, yaitu dekat dengan Pantai Karangbolong.',
    openDays: 'Open Everyday',
    openTime: '06.00 - 18.00',
    imageAsset: 'images/bukit-hud.png',
    imageUrls: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/eb/0b/5e/bukit-hud.jpg?w=1200&h=1200&s=1'
    ],
  ),
  DataKebumen(
    name: 'Brujul Adventure Park',
    location: 'Pejagoan',
    description:
        'Destinasi wisata di Kebumen ini diresmikan ulang sebagai taman wisata dengan fasilitas-fasilitas yang lebih modern, termasuk wahana permainan sepeda layang, flying fox, dan panahan. Terdapat pula gazebo untuk kumpul keluarga. Tentu saja, yang paling menarik dari BAP adalah cuacanya yang lumayan sejuk.',
    openDays: 'Open Everyday',
    openTime: '07.00 - 17.00',
    imageAsset: 'images/brujul.jpg',
    imageUrls: [
      'https://4.bp.blogspot.com/-_FCsBusj-u4/WyO4lMMR4wI/AAAAAAAAL24/XN8IuNuNOR4sXjtAk_HV9VyrnaceVk2XgCLcBGAs/s1600/LogoLicious_20180615_193545.png',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/07/ff/16/the-adventure-park-at.jpg',
      'https://1.bp.blogspot.com/-bjsy7bVqMKI/XjgTt8Ia74I/AAAAAAAASg8/CGJkJKfP-EU67aw6Qi--RPb7DhPFx1wWwCLcBGAsYHQ/s1600/WhatsApp%2BImage%2B2020-02-03%2Bat%2B14.29.59.jpeg'
    ],
  ),
  DataKebumen(
    name: 'Gua Petruk',
    location: 'Kebumen',
    description:
        'Gua Petruk merupakan gua yang paling dijaga kealamiannya. Bahkan pengelola memutuskan untuk tidak memasang penerangan di dalamnya. Maka dari itu, untuk menikmati stalaktit dan stalagmit yang didominasi dengan bentuk seperti hidung wayang Petruk ini, pengunjung dapat menggunakan headlamp dan helm khusus yang disediakan oleh petugas. Selain itu, ada baiknya kamu mengenakan baju tahan air karena di dalam gua, banyak genangan air yang harus kamu lewati. Menantang adrenalin, dan pasti mengasyikkan!',
    openDays: 'Open Everyday',
    openTime: '07.30 - 16.00',
    imageAsset: 'images/goa-petruk.jpg',
    imageUrls: [
      'http://2.bp.blogspot.com/_VHfHayEZUc4/TPERfM46n3I/AAAAAAAAAw4/m9Cyk19SPow/s1600/Goa%2BPetruk%2B-23.JPG',
      'https://1.bp.blogspot.com/-T-8XdLaPk8A/V1IwrBMwdRI/AAAAAAAABnk/ol74k7qNodszvQDBE1XZiBIP6luJj2YUQCLcB/s1600/goa%2Bpetruk%2Bkebumen%2B1.JPG',
      'https://awsimages.detik.net.id/community/media/visual/2021/02/03/dev-keindahan-gua-petruk-3.jpeg?w=600&q=90'
    ],
  ),
  DataKebumen(
    name: 'Pantai Lampon',
    location: 'Ayah',
    description:
        'Pantai Lampon merupakan pantai yang tidak akan membuatmu kelelahan. Pasalnya, garis pantainya tidak sampai 100 meter.Pantai ini juga merupakan tempat yang tepat untuk menikmati matahari terbenam. Jika air sedang surut, kamu juga bisa mencoba menyusuri gua yang ada di sini, tentunya dengan didampingi oleh pemandu wisata, ya!',
    openDays: 'Open Everyday',
    openTime: '06.00 - 18.00',
    imageAsset: 'images/Pantai-Lampon-Kebumen.jpg',
    imageUrls: [
      'https://s3.ap-southeast-1.amazonaws.com/cdn.orbit/wp-content/uploads/2021/12/21155308/pantai-lampon3.jpg',
      'https://dolanyok.com/wp-content/uploads/Pantai-Lampon-Boom.jpg',
      'https://liburanyuk.co.id/wp-content/uploads/2021/11/@kabutpetualang-819x1024.jpg'
    ],
  ),
  DataKebumen(
    name: 'Kampung Etnik',
    location: 'Pejagoan',
    description:
        'Kampoeng Etnik menjadi destinasi baru di Kabumen Jawa Tengah dengan konsep wisata keluarga yang ramah anak. Karena tempat piknik satu ini menyuguhkan berbagai macam spot menarik dengan wahana permainan seru didalamnya. Aroma klasik khas Jawa juga menjadi daya tarik tersendiri mulai dari ornamen bangunan dan lainnya.Manjakan akhir pekan bersama keluarga di Kabumen dengan explore pesona wisata Kampung Etnik.',
    openDays: 'Open Everyday',
    openTime: '08.00 - 16.00',
    imageAsset: 'images/Kampung-Etnik.jpg',
    imageUrls: [
      'https://1.bp.blogspot.com/-RE0iq0NeWzA/XYffwQ_CUqI/AAAAAAAACgQ/UqLkz2XmBEY86F3NFzSo5KHBDqF58NipwCLcBGAsYHQ/s1600/0bd78e6853219087949e3b38e741f151.jpg',
      'https://1.bp.blogspot.com/--m4Tonb6fPQ/Xa8exs5F8BI/AAAAAAAABcs/T2fx3frHCnI6WM73Le7tIwVdVYEgLjttQCEwYBhgL/s1600/IMG_20191007_183319.jpg'
    ],
  ),
  DataKebumen(
    name: 'Goa Jatijajar',
    location: 'Kebumen',
    description:
        'Gua Jatijajar adalah sebuah situs geologi yang terbentuk dari proses alamiah, yang terletak di Kabupaten Kebumen, Jawa Tengah. Gua yang keseluruhannya terbentuk dari kapur, ini memiliki panjang 250 meter, llebar rata-rata 15 meter, dan tinggi rata-rata 12 meter. Lokasi gua ini berada 50 meter di atas permukaan laut.Di dalam Gua Jatijajar banyak terdapat stalagmit dan juga pilar atau tiang kapur, yaitu pertemuan antara stalaktit dengan stalagmit.',
    openDays: 'Everyday',
    openTime: '07.30 - 16.00',
    imageAsset: 'images/goa-jatijajar.jpg',
    imageUrls: [
      'https://i0.wp.com/1.bp.blogspot.com/-Q3AXph-o6Js/X3V8qEP9j8I/AAAAAAAAAIo/yqD-INhxwnMsOfjgfSBt3NJ5v_-TH17gACPcBGAYYCw/s16000/hal%252Bmenarik%252Bgoa%252Bjatijajar.jpg?w=735&ssl=1',
      'https://1.bp.blogspot.com/-ES7Tjb8i3D4/X0NLAB2xbXI/AAAAAAAAUmY/FcOZg6-WAKs_K4Apzjo7L_PssFOZ5BJrwCLcBGAsYHQ/s1600/jalanan%2Bmenuju%2Bgoa%2Bjatijajar.jpeg',
      'https://osccdn.medcom.id/images/content/2019/09/30/cf791965b5be95cd800c1f9cbc4dd928.jpg'
    ],
  ),
  DataKebumen(
    name: 'Sawangan Adventure',
    location: 'Karangduwur',
    description:
        'Obyek wisata Sawangan Adventure Ayah Kebumen memang menawarkan pesona alam yang menarik. Pengunjung akan dimanjakan dengan pemadangan laut lepas dari atas bukit. Lebih asik lagi, karena ada sejumlah spot foto yang instagrambale untuk mengisi timeline sosmed.',
    openDays: 'Everyday',
    openTime: '06.00 - 17.00',
    imageAsset: 'images/pantai-sawangan.jpg',
    imageUrls: [
      'https://1.bp.blogspot.com/-Y2dBZQxh8gI/XgV9bPdbKII/AAAAAAAAG3Q/tGcgSn_lw_ocZ4pOhSF24x2Rquvd49PQACNcBGAsYHQ/s640/IMG_9526.JPG'
    ],
  ),
  DataKebumen(
    name: 'Gading Paradise',
    location: 'Pejagoan',
    description:
        'Gading Paradise menjadi destinasi wisata baru di Kebumen Jawa Tengah yang sedang hits dengan sajian spot instagenicnya. Mengusung konsep mini eropa, destinasi wisata baru di Kebumen satu ini rekomended untuk liburan bersama keluarga. Nikmati berbagai macam spot menarik yang akan membawa anda merasakan nuansa eropa di dalam negeri.Tak perlu susah payah dan menghabiskan banyak uang untuk explore keindahan benua biru.',
    openDays: 'Everyday',
    openTime: '08.00 - 17.00',
    imageAsset: 'images/gading-paradise.jpg',
    imageUrls: [
      'https://i0.wp.com/suwatu.com/gambar/Wisata-Gading-Paradise-Kebumen.jpg?resize=1080%2C1350&ssl=1'
    ],
  ),
];
