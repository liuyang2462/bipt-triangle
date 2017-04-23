QUnit.test("equilateral have three equal sides", function( assert ) {
	assert.equal(triangle.isEquilateral(2,2,2),triangle.isEquilateral(2,2,2),triangle.isEquilateral(2,2,2)?"2,2,2 是等边三角形":"2,2,2 不是等边三角形") ;
	assert.equal(triangle.isEquilateral(0,0,0),triangle.isEquilateral(0,0,0),triangle.isEquilateral(0,0,0)?"0,0,0 是等边三角形":"0,0,0 不是等边三角形") ;
	assert.equal(triangle.isEquilateral(-1,-1,-1),triangle.isEquilateral(-1,-1,-1),triangle.isEquilateral(-1,-1,-1)?"-1,-1,-1 是等边三角形":"-1,-1,-1 不是等边三角形") ;
});
QUnit.test("isosceles triangle has two equal sides", function( assert ) {
	assert.equal(triangle.isIsosceles(5,5,2),triangle.isIsosceles(5,5,2),triangle.isIsosceles(5,5,2)?"5,5,2 是等腰三角形":"5,5,2 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(2,5,5),triangle.isIsosceles(2,5,5),triangle.isIsosceles(0,0,1)?"0,0,1 是等腰三角形":"0,0,1 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(5,2,5),triangle.isIsosceles(5,2,5),triangle.isIsosceles(5,2,5)?"5,2,5 是等腰三角形":"5,2,5 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(1,1,7),triangle.isIsosceles(1,1,7),triangle.isIsosceles(1,1,7)?"1,1,7 是等腰三角形":"1,1,7 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(3,2,5),triangle.isIsosceles(3,2,5),triangle.isIsosceles(3,2,5)?"5,5,2 是等腰三角形":"3,2,5 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(0,0,1),triangle.isIsosceles(0,0,1),triangle.isIsosceles(0,0,1)?"0,0,1 是等腰三角形":"0,0,1 不是等腰三角形") ;
	assert.equal(triangle.isIsosceles(-1,-1,5),triangle.isIsosceles(-1,-1,5),triangle.isIsosceles(-1,-1,5)?"-1,-1,5 是等腰三角形":"-1,-1,5 不是等腰三角形") ;
});
QUnit.test("scalene triangle has three different sides", function( assert ) {
	assert.equal(triangle.isScalene(3,2,4),triangle.isScalene(3,2,4),triangle.isScalene(3,2,4)?"3,2,4 是三角形":"3,2,4 不是三角形") ;
	assert.equal(triangle.isScalene(1,2,6),triangle.isScalene(1,2,6),triangle.isScalene(1,2,6)?"1,2,6 是三角形":"1,2,6 不是三角形") ;
});







