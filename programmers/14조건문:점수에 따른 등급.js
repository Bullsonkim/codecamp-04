function grade(score) {
	
    console.log(scroe)

}

//예외처리는 처음에 하는것이 좋음

function grade(score) {
   if(score > 100 || score <0 ) {
       console.log("잘못된 점수입니다")
   } else if (score <= 100 && score >= 90) {
       console.log("A")
   } else if (score <=89 && score >= 80) {
       console.log("B")
   } else if (score <=79 && score >= 70) {
       console.log("C")
   } else if (score <=69 && score >= 60) {
       console.log("D")
   } else if (score <= 59) {
       console.log("F")
   }
   
}
