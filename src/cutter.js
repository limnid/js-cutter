let rtrim = function(str, charlist) {
    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '\\$1');
    const re = new RegExp('[' + charlist + ']+$', 'g');
    return (str + '').replace(re, '');
};

let strpos = function(haystack, needle, offset) {
    const i = (haystack + '').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
};

module.exports = (value, length, preserve, separator) => {
    let breakpoint = false;
    if (value.length > length) {
        if (preserve) {
            if (false !== (breakpoint = strpos(value, ' ', length))) {
                length = breakpoint;
            } else if (false !== (breakpoint = strpos(value, ' ', length - 1))) {
                length = breakpoint;
            } else {
                return value;
            }
        }

        value = value.substring(0, length);
        value = rtrim(value, "!,.-");

        return value + separator;
    }

    return value;
};
