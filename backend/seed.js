use OneCent;

db.dropDatabase();

db.products.insertMany([
{
name: 'Televisão',
image: 'https://images.samsung.com/is/image/samsung/africa-pt-fhd-t5300-ua43t5300auxly-frontblack-243729049?$684_547_PNG$',
price: 0,
},
{
name: 'Web Cam',
image: 'https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/s/t/streamcam.png ',
price: 0,
},
{
name: 'Caixa de Som',
image: 'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwb24df975/JBL_Charge4_Front_Midnight_Black_1605x1605px.png?sw=537&sfrm=png',
price: 0,
}
]); 