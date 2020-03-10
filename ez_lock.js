function(c, a)
{ // target: target.loc, ez_lock: "ez_lock", lc: lc 

	var eo = ["open", "release", "unlock"];
	var cm = "not the correct";
	var p=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
	var l0c = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"];
	var lc = a.lc;
    var loc = a.ez_lock;
	var t = a.target;
	var r = "";

	let ezo = (e, l) => {
		for (var i=0; i<l.length; ++i) {
			var x = l[i]
			lc[e] = x;
			var r = t.call(lc);
			if (!r.includes(cm)) {
				return [x, r];
			}
		}
	}

	let e1 = (m) => {
		a = ezo(m, eo);	
		lc[m] = a[0];
		r = a[1];
	}

	let e2 = (m) => {
		lc[m] = ezo(m, eo)[0];
		for ( var i = 0; i < 10; ++i ) {
			lc.digit = i;
			r = t.call(lc);
			if(!r.includes(cm)) {
				break;
			}
		}
	}

	let e3 = (m) => {
		lc[m] = ezo(m, eo)[0];
		for(var i = 0; i < p.length; ++i) {
			lc.ez_prime = p[i];
			r = t.call(lc);
			if (!r.includes(cm)){ 
				break;
			}
		}
	}

	let l0k = () => {
		for ( var x = 0; x < l0c.length; ++x ) {
			lc.l0cket = l0c[x];
			r = t.call(lc);
			if (!r.includes(cm)) {
				break;
			}
		}
	}

	switch(loc) {
		case 'ez_21':
			e1(loc);
			break;
		case 'ez_35':
			e2(loc);
			break;
		case 'ez_40':
			e3(loc);
		case 'l0cket':
			l0k();
	}

	return { ok: true, msg: [r, lc] };
}
