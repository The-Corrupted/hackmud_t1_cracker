function(c, a) { // target:#s.t1npc.corp
	if (!a|| !a.target) {
		return {ok: false};
	}

	var lc = {};
	var t = a.target;
	var r = t.call({});
	var re = /LOCK_ERROR+[\s\S]+(ez_21|ez_35|ez_40|c001|c002|c003|l0cket|DATA_CHECK)/im;
	while(r.includes('LOCK_ERROR')) {
		var m = "";
		m = re.exec(r)
		if (!m) break;
		m = m[m.length-1];
		switch(m.toLowerCase()) {
			case 'ez_21':
				var j = #fs.user.ez_lock({target: t, ez_lock: 'ez_21', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'ez_40':
				var j = #fs.user.ez_lock({target: t, ez_lock: 'ez_40', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'ez_35':
				var j = #fs.user.ez_lock({target: t, ez_lock: 'ez_35', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'c001': 
				var j = #fs.user.c00_lock({target: t, c00_lock: 'c001', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'c002':
				var j = #fs.user.c00_lock({target: t, c00_lock: 'c002', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'c003':
				var j = #fs.user.c00_lock({target: t, c00_lock: 'c003', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			case 'l0cket':
				var j = #fs.user.ez_lock({target: t, ez_lock: 'l0cket', lc: lc});
				lc = j.msg[1];
				r = j.msg[0];
				break;
			default:
				r = "";
				lc[m]="unknown"
		}
	}
	return {ok: true, msg: lc};
}
