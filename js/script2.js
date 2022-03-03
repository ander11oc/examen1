
///////////////////////////////////////////////////////////////////

var check = document.getElementsByName("gender");

var camisas = {
    'camisaSinLogo': 
    {
        'nombre': 'Camiseta sin logos',
        'precio': 10,
        'moneda': 'US$',
        'imageUrl': "https://img2.freepng.es/20180610/lgu/kisspng-t-shirt-sleeveless-shirt-polo-shirt-beater-5b1dc4b6d2b547.8333924615286775588631.jpg"
    },
    'camiseta1': 
    {
        'nombre': 'Camiseta con tu super heroe favorito',
        'precio': 15,
        'moneda': 'EUR',
        'imageUrl': "https://png.pngtree.com/png-vector/20210411/ourmid/pngtree-tie-dress-posture-shirt-png-image_3204562.jpg"
    },
    'camiseta2': 
    {
        'nombre': 'Camiseta para programadores',
        'precio': 60000,
        'moneda': 'COP$',
        'imageUrl': "https://img1.freepng.es/20181122/epq/kisspng-t-shirt-dress-shirt-sleeve-5bf67a61183dd9.5355447115428798410993.jpg"
    }
};

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("selected_radio").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                let pruebaNombre = check[b].value;
                document.getElementById("selected_radio").innerHTML += '<li>' + camisas[pruebaNombre].nombre + '</li>';
                document.getElementById("selected_radio").innerHTML += '<li>' + camisas[pruebaNombre].precio + '</li>';
                document.getElementById("selected_radio").innerHTML += '<li>' + camisas[pruebaNombre].moneda + '</li>';
                document.getElementById("defecto").src = camisas[pruebaNombre].imageUrl;

            }
        }
    }  
}

    
