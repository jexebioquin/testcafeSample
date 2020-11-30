const createTestCafe = require('testcafe');
let testcafe = null;


createTestCafe()
    .then(tc => {
        testcafe     = tc;

        const runner = testcafe.createRunner();

    return runner

        .src([
            'tests/*tests.js'
        ])
    
        .browsers(['chrome'])
        .reporter('xunit','reports/report.xml')
        .run(               {
            selectorTimeout: 50000,
            assertionTimeout: 7000,
            pageLoadTimeout: 8000,
            speed: 0.1
        });


})

.then(failedCount => {
    console.log('Tests failed: ' + failedCount);

    testcafe.close();
});