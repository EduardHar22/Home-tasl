

function getStr(str) {
	let num = str.indexOf('(');
		for(let i = 0; i < str.length; i++){
			if(str[i] === ')') {
				if(num > i || num === -1){
					return false
				}
			}
		}
		if(num !== -1 && !str.includes(')')){
			return false
		}
		return true
}
	

console.log(getStr('eduardhar'))