# JSCutter

JSCutter is a lightweight library used for truncating string to limit its length, by word number or symbols.

**Install and Build**
```$xslt
npm install
npm run build
```

**Run test**
```$xslt
npm run test
```

**Example**
```$xslt
const cutter = require('cutter');
const value = cutter("Sed ut perspiciatis unde omnis iste natus error " +
            "sit voluptatem accusantium doloremque laudantium, totam rem aperiam, " +
            "eaque ipsa quae ab illo inventore veritatis et quasi " +
            "architecto beatae vitae dicta sunt explicabo.", 150, false, "...");
```

**Result**
```$xslt
Sed ut perspiciatis unde omnis iste natus error sit 
voluptatem accusantium doloremque laudantium, 
totam rem aperiam, eaque ipsa quae ab illo inventore...
```