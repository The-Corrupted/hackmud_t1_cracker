function(c, a) { // target: target.loc, c00_lock: "c00_lock", cobj: lc 
    if (!a || !a.target) {
        return {
            ok: false,
        };
    }

    var lc = a.lc;
    var loc = a.c00_lock;
    var t = a.target;
    var cm = "not the correct";
    var r = t.call(lc);
    var z = ['red', 'green', 'purple', 'lime', 'blue', 'cyan', 'yellow', 'orange']
    var c = {'red': [3, z[1], z[5], z[3]],
     'purple': [6, z[3], z[1], z[6]], 
     'green': [5, z[0], z[7], z[2]], 
     'lime': [4, z[2], z[0], z[4]], 
     'blue': [4, z[6], z[3], z[7]], 
     'cyan': [4, z[7], z[6], z[0]],
     'yellow': [6, z[4], z[2], z[5]], 
     'orange': [6, z[5], z[4], z[1]],
    };

    let gc = (g) => {
        for(var k in c) {
            lc[g] = k;
            r = t.call(lc);
            if(!r.includes(cm)) {
                return k;
            }
        }
    }

    let c001 = (m) => {
        var k = gc(m);
        lc.color_digit = c[k][0];
    }

    let c002 = (m) => {
        var k = gc(m);
        lc.c002_complement = c[k][1];
    }

    let c003 = (m) => {
        var k = gc(m);
        lc.c003_triad_1 = c[k][2];
        lc.c003_triad_2 = c[k][3];
    }

    switch(loc) {
        case 'c001':
            c001(loc);
            break;
        case 'c002':
            c002(loc);
            break;
        case 'c003':
            c003(loc);
            break;
    }

    r = t.call(lc);
    return {ok: true, msg: [r, lc]};
}