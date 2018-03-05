const { describe, it } = require('mocha');
const assert = require('assert');
const cutter = require('../src/cutter');

describe('Cut', function() {
    it('should cut string at a number of character\n', (done) => {
        const value = cutter("Sed ut perspiciatis unde omnis iste natus error " +
            "sit voluptatem accusantium doloremque laudantium, totam rem aperiam, " +
            "eaque ipsa quae ab illo inventore veritatis et quasi " +
            "architecto beatae vitae dicta sunt explicabo.", 150, false, "...");
        assert.ok(value.length === 153);
        done();
    });
});
