
Array.prototype.rotate = function ( dir ) {
    var that = this,
        direction = dir !== "ccw",
        columns = that[0].length,
        flat = [],
        tmp = [];

    /* check if used array has proper structure */
    if ( !(that.length) || !columns ) {
        console.error("incompatible array lengths");
        return false;
    }

    /* flatten array entries */
    for ( var i = 0, l = that.length; i < l; i++ ) {
        for ( var j = 0, m = that[i].length; j < m; j++ ) {
            if (direction) {
                flat.push(that[i][j]);
            } else {
                flat.unshift(that[i][j]);
            }
        }
    }

    /* set up modified array structure */
    for ( var k = 0, n = flat.length; k < n; k++ ) {
        var index = k % columns;
        if ( !tmp[index] ) {
            tmp[index] = [flat[k]];
        } else {
            tmp[index].unshift(flat[k]);
        }
    }

    return tmp;
};
