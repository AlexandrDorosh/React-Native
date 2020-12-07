
export default class EShopService {

    data = [
       {   name: 'Phones',
           id: 1,
           title: 'Smartphone Apple iPhone 11 128Gb Black',
           category: 'phone',
           price: 900,
           image: 'https://hotline.ua/img/tx/238/2385715295.jpg'
       },

       {   id: 2,
           title: 'Smartphone Samsung Galaxy S10 8/128Gb Black (SM-G973FZKD)',
           category: 'phone',
           price: 620,
           image: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/m/image_product_key_visual_beyond_s10_product_image_black_181211_sm_g973_galaxys10_front_black.jpg' },

       {   id: 3,
           title: 'Smartphone Samsung Galaxy J6 Plus 2018 Red (SM-J610FZRNSEK)',
           category: 'phone',
           price: 220,
           image: 'https://i.allo.ua/media/catalog/product/cache/1/image/468x468/602f0fa2c1f0d1ba5e241f914e856ff9/s/a/samsung_galaxy_j6_plus_2018_red.jpg' },

       {   id: 4,
           title: 'Smartphone Xiaomi Redmi Note 8 Pro 6/128GB Green',
           category: 'phone',
           price: 250,
           image: 'https://сота.укр/image/cache/data/Xiaomi/redmi-note-8pro-green-01-700x700.jpg' },

       {   id: 5,
           title: 'Smartphone Xiaomi Redmi Note 9 Pro 64Gb',
           category: 'phone',
           price: 300,
           image: 'https://www.myphone.kg/files/media/9/9128.jpg' },

    {   name: 'Computers',
        id: 6,
        title: 'Artline Gaming X46 v31 (X46v31)',
        category: 'Computer',
        price: 620,
        image: 'https://hotline.ua/img/tx/239/2394017455.jpg' },

    {   id: 7,
        title: 'QUBE Ryzen 5 3600 RTX 2060 SUPER 8GB 1621 (QB0034)',
        category: 'Computer',
        price: 1100,
        image: 'https://i8.rozetka.ua/goods/19941971/copy_qube_qb0033_5f64a57a3ce67_images_19941971706.jpg' },

    {   id: 8,
        title: 'Everest Home 4070 (4070_9414)',
        category: 'Computer',
        price: 450,
        image: 'https://i1.price.ua/images/model/20/4051603/2/1/type4/everest_home_4070_4070_9426_5401842.jpg' },

    {   id: 9,
        title: 'Asus ROG Strix GL10DH-UA002T1 Windows 10',
        category: 'Computer',
        price: 1180,
        image: 'https://img.moyo.ua/img/gallery/4688/57/933259_middle.jpg?1593012528' },

    {   id: 10,
        title: 'ARTLINE WorkStation W31 v01 (W31v01)',
        category: 'Computer',
        price: 660,
        image: 'https://i1.rozetka.ua/goods/2114349/copy_artline_gaming_x32v03_5980477f71766_images_2114349797.jpg' },

    {   name: 'laptops',
        id: 11,
        title: 'Acer Swift 3 SF314-58-52DU (NX.HPMEU.00L) Sparkly Silver',
        category: 'Laptops',
        price: 700,
        image: 'https://i8.rozetka.ua/goods/17015118/copy_acer_nx_hpkeu_00g_5e4fae902a3a4_images_17015118415.jpg' },

    {   id: 12,
        title: 'Asus ROG Strix G15 G512LI-HN094 (90NR0381-M01620) Black',
        category: 'Laptops',
        price: 980,
        image: 'https://brain.com.ua/static/images/prod_img/6/7/U0447967_big.jpg' },

    {   id: 13,
        title: 'Lenovo V15-IIL (82C50057RA) Iron Grey',
        category: 'Laptops',
        price: 670,
        image: 'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/l/e/lenovo_v15-iil_82c50057ra_iron_grey_3_.jpg' },

    {   id: 14,
        title: 'Acer Aspire 7 A715-75G-57LR (NH.Q87EU.006) Charcoal Black',
        category: 'Laptops',
        price: 900,
        image: 'https://s.ek.ua/jpg_zoom1/1815409.jpg' },

    {   id: 15,
        title: 'Asus ROG Strix G15 G512LU-AZ013 (90NR0351-M02450) Black',
        category: 'Laptops',
        price: 1400,
        image: 'https://hotline.ua/img/tx/233/2339769445.jpg' },

    {   name: 'TVs',
        id: 16,
        title: 'Samsung UE43TU7100UXUA',
        category: 'TV',
        price: 400,
        image: 'https://a.428.ua/img/2367054/3000/2000/ua_televizor_samsung_ue43tu7100uxua_televizor_samsung_ue43tu7100uxua~1462~899.jpg' },

    {   id: 17,
        title: 'LG 55UN71006LB',
        category: 'TV',
        price: 600,
        image: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/6/0/60un71006lb_1_1_1.jpg' },

    {   id: 18,
        title: 'Sony KD55XH9096BR',
        category: 'TV',
        price: 1150,
        image: 'https://i.eldorado.ua//240x220//goods/4247/4247592.png' },
    
    {   id: 19,
        title: 'Xiaomi Mi LED TV 4S 55" UHD 4K (L55M5-5ARU)',
        category: 'TV',
        price: 450,
        image: 'https://i2.rozetka.ua/goods/17468403/xiaomi_l55m5_5aru_images_17468403991.jpg' },

    {   id: 20,
        title: 'Samsung UE82TU8000UXUA',
        category: 'TV',
        price: 2500,
        image: 'https://img.ktc.ua/img/base/1/5/291395.jpg' },

    {   name: 'Cameras',
        id: 21,
        title: 'GoPro HERO 8 Black',
        category: 'Cameras',
        price: 400,
        image: 'https://i2.rozetka.ua/goods/14198410/gopro_hero_8_black_images_14198410467.jpg' },

    {   id: 22,
        title: 'Sony FDR-X3000 RM-LVR3 (FDRX3000R.E35)',
        category: 'Cameras',
        price: 500,
        image: 'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/1/_/1_23-w3fdwefe.jpg' },

    {   id: 23,
        title: 'Canon Legria HF G50 (3667C003AA)',
        category: 'Cameras',
        price: 1200,
        image: 'https://i2.rozetka.ua/goods/17435878/canon_3667c003aa_images_17435878104.jpg' },

    {   id: 24,
        title: 'Insta360 GO White (CING0XX/A)',
        category: 'Cameras',
        price: 260,
        image: 'https://i1.foxtrot.com.ua/product/MediumImages/6563060_1.jpg' },

    {   id: 25,
        title: 'Sony HDR-CX625 Black (HDRCX625B.CEL)',
        category: 'Cameras',
        price: 440,
        image: 'https://i1.rozetka.ua/goods/1863467/sony_hdr_cx625_images_1863467438.jpg' },
   ]

   getElectronics() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               if(Math.random() > 0.99){
                   reject(new Error('Something bad happend'))
               }
               else{
                   resolve(this.data)
               }
           }, 700);
       });
   }
}