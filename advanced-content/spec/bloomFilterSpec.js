describe('bloomFilter', function() {
  var bloomFilter;


  beforeEach(function() {
    bloomFilter = new BloomFilter(13, 3);
  });

  it('should have methods named "add" and "constains', function() {
    expect(bloomFilter.add).to.be.a("function");
    expect(bloomFilter.contains).to.be.a("function");
  });

  it('should add values and check that they are', function() {
    bloomFilter.add(65);
    expect(bloomFilter.contains(65)).to.be.equal(true);
  });

  it('should return false if they are not', function() {
    bloomFilter.add(2);
    expect(bloomFilter.contains(65)).to.be.equal(false);
  });
});