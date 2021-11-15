// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.



function days(month) {
	if(
		month ===1 
	|| month===3 
	|| month===5 
	|| month===7 
	|| month===8 
	|| month===10
	|| month===12) {
		return 31;
	
	} else if(month ===2) {
		return 28;
	
	} else if (month ===4 || month ===6 ||
		month ===9 || month ===11) {
		return 30;
	}

	
}