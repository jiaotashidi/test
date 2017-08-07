/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
// List.list([4, 6, 7, 3, 8])/
List.list = function (array) {
	var sentinel = new List(),
		len = array.length,
		p, i;

	p = sentinel;
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
	}
	return sentinel.tail;
}

// Returns a readable String for THIS.
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};


function call_single(A,B){
	if(A.tail){
		A = A.tail;
		call_single(A,B);
	}else{
		A.tail = B;
	}
}
/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	call_single(A,B);
	return A;
}
/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var i = 0,j = 0;
	var rsList = new List(),p = rsList;;
	for (; L !== null; L = L.tail,i++) {
		if(i>=start && j<len)
			{
				p.tail = new List(L.head,L.tail);
		    p = p.tail;
				j++;
			}	
			if(j == len){
				p.tail = null;
				break;
			}
	}
	return rsList.tail;
}

var A = List.list([4, 6, 7, 3, 8]),
  	B = List.list([3, 2, 5, 9]),
  	C = List.list([19, 8, 7, 3, 2]);
var result  = dcate(A,B)
      
      console.info(sub(C, 3, 2))
//  C.toString().should.equal('[ 19 8 7 3 2 ]');
//  sub(C, 3, 2).toString().should.equal('[ 3 2 ]');
//  C.toString().should.equal('[ 19 8 7 3 2 ]');
