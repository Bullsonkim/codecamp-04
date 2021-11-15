// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.

// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 

// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold



const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let count = 0;
let amount =0;
let grade = 0;



for( let i = 0; i < myShopping.length; i = i + 1 ) {
	if( myShopping[i].category === "의류" ) {
		count += 1; // count = count + 1;
		amount += myShopping[i].price;

		if( count >= 0 && count <= 2 ) {
			grade = "Bronze"	
		} else if( count >= 3 && count <= 4 ) {
			grade = "Sliver"
		} else if( count >= 5 ) {
			grade = "Gold"
		}
	}
}

console.log(`의료를 구매한 횟수는 총 ${count}회
금액은 ${amount}원이며 등급은 ${grade}입니다`)