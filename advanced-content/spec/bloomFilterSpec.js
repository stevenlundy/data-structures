describe('bloomFilter', function() {
  var bloomFilter;


  // beforeEach(function() {
  //   bloomFilter = new BloomFilter(13, 3);
  // });

  // it('should have methods named "add" and "constains', function() {
  //   expect(bloomFilter.add).to.be.a("function");
  //   expect(bloomFilter.contains).to.be.a("function");
  // });

  // it('should add values and check that they are', function() {
  //   bloomFilter.add(65);
  //   expect(bloomFilter.contains(65)).to.be.equal(true);
  // });

  // it('should return false if they are not', function() {
  //   bloomFilter.add(2);
  //   expect(bloomFilter.contains(65)).to.be.equal(false);
  // });

  it('should be close to the theoretical number of false positives', function() {
    var m = 18;
    var k = 3;
    var n = 8;
    bloomFilter = new BloomFilter(m, k);
    debugger;
    var fpTheory = Math.pow(1- Math.pow(Math.E,(-k*n/m)),k);
    var nums = [];
    for (var i = 0; i < n; i++) {
      nums.push(i*3 + 100);
      bloomFilter.add('' + (i*3 + 100));
    }

    var fp = 0;
    debugger;
    for(var i = 0; i < 10000; i++){
      if(bloomFilter.contains(i) && nums.indexOf(i) > -1){
        fp++;
      }
    }

    console.log(fpTheory);
    console.log(fp/10000);


  })
});