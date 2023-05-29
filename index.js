var noOfItems = 0;

var products = [
    {
        name: "Artista Painting Brushes",
        price: 100000,
        incart: 0
    },
    {
        name: "Artista Pencil Set",
        price: 100000,
        incart: 0
    },
    {
        name: "Artista Poster Colours",
        price: 220000,
        incart: 0
    },
    {
        name: "Artista Sketch Pens",
        price: 135000,
        incart: 0
    },
    {
        name: "Artista Coloured Sheets",
        price: 50000,
        incart: 0
    },
    {
        name: "Artista Gemoetry Box",
        price: 150000,
        incart: 0
    },
    {
        name: "Artista Paint Board",
        price: 800000,
        incart: 0
    },
    {
        name: "Artista Apron",
        price: 150000,
        incart: 0
    }
]

var totalCost = 0;
var cartButtons = document.querySelectorAll(".addtocartB");
var removeButtons = document.getElementsByClassName('removebtn');

for (let i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener('click', function () {
        noOfItems++;
        document.getElementsByClassName("badge")[0].innerHTML = noOfItems;
        products[i].incart++;
        totalCost = totalCost + products[i].price;
        if (noOfItems > 0) {
            document.getElementsByClassName('list')[0].classList.remove('none');
            document.getElementsByClassName('empty')[0].classList.add('none');
            document.getElementsByClassName('fprice')[0].innerHTML=totalCost;
            // document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
            settopay();
        }
        if(products[i].incart>0)
        {
            document.getElementsByClassName('item')[i].classList.remove('none');
        }
        document.getElementsByClassName('quantity')[i].innerHTML=products[i].incart;
        document.getElementsByClassName('tprice')[i].innerHTML=products[i].incart*products[i].price;
    });
    removeButtons[i].addEventListener('click',function(){
        noOfItems=noOfItems-products[i].incart;
        totalCost=totalCost-(products[i].price*products[i].incart);
        products[i].incart=0;
        document.getElementsByClassName('item')[i].classList.add('none');
        document.getElementsByClassName("badge")[0].innerHTML = noOfItems;
        document.getElementsByClassName('fprice')[0].innerHTML=totalCost;
        // document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        settopay();
        if(noOfItems==0){
            document.getElementsByClassName('list')[0].classList.add('none');
            document.getElementsByClassName('empty')[0].classList.remove('none');
        }
    })
}
var rightcoupon="DaoThanh50";
var flag=0;
document.getElementById('apply').addEventListener('click',function(){
    let value=document.getElementById('coupon').value;
    if(value==rightcoupon)
    {
        flag=1;
        document.getElementById('d50').innerHTML="Áp dụng giảm 50.000đ";
        totalCost=totalCost-50000;
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        totalCost=totalCost+50000;
        document.getElementById('d50').classList.remove('none');
    }
    else{
        flag=0;
        document.getElementById('d50').innerHTML="Mã phiếu giảm giá không hợp lệ";
        document.getElementById('d50').classList.remove('none');
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
    }
})

function settopay()
{
    if(flag==1)
    {
        totalCost=totalCost-50;
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
        totalCost=totalCost+50;
    }
    else{
        document.getElementsByClassName('fprice')[1].innerHTML=totalCost;
    }
}
