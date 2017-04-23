var  triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
		if((a==b&&(a+b))>c||(b==c&&(b+c)>a)||(a==c&&(a+c)>b)){
			return true ;
		}else{
			return false;
		}
    },
	isScalene : function(a,b,c) {
		if((a+b)<=c) return false ;
		if((a+c)<=b) return false ;
		//console.log("2");
		if((b+c)<=a) return false ;
		//console.log("3");
		return true ;
	}
};

