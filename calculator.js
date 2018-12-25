	var firstNum;
    var secondNum;
    var total;
    var plusminus;
    var plusClick;
    var minusClick;
    var multiplyClick;
    var devideClick;
	var decimalClick;
   
	
	function Clear() {                                   
        // Clear
        document.f.result.value="";
		document.f.display.value="";
		
    } 
	function num0Perform() {                                   
        // Zero
		document.f.display.value +=" 0";
        document.f.result.value += document.f.num0.value;
    } 
	function num1Perform() {                                   
        // NO1
		document.f.display.value +=" 1";
        document.f.result.value += document.f.num1.value;
    } 
	function num2Perform() {                                   
        // NO2
		document.f.display.value +=" 2";
        document.f.result.value += document.f.num2.value;
    } 
	function num3Perform() {                                   
        // NO3
		document.f.display.value +=" 3";
        document.f.result.value += document.f.num3.value;
    } 
	function num4Perform() {                                   
        // NO4
		document.f.display.value +=" 4";
        document.f.result.value += document.f.num4.value;
    } 
	function num5Perform() {                                   
        // NO5
		document.f.display.value +=" 5";
        document.f.result.value += document.f.num5.value;
    } 
	function num6Perform() {                                   
        // NO6
        document.f.display.value +=" 6";
		document.f.result.value += document.f.num6.value;
    } 
	function num7Perform() {                                   
        // NO7
		document.f.display.value +=" 7";
        document.f.result.value += document.f.num7.value;
    } 	
	function num8Perform() {                                   
        // NO8
		document.f.display.value +=" 8";
        document.f.result.value += document.f.num8.value;
    } 
	function num9Perform() {                                   
        // NO9
		document.f.display.value +=" 9";
        document.f.result.value += document.f.num9.value;
    } 
	function Sign(){
			document.f.display.value="-"+(document.f.result.value);
			document.f.result.value="-"+(document.f.result.value);
	 }
	function Addition(){
			firstNum = (parseFloat(document.f.result.value));
			document.f.display.value=(document.f.result.value)+" +";
			document.f.result.value="";
			plusClick = 1;
			decimalClick=0
			
			}
	function SubStract(){
			 firstNum = (parseFloat(document.f.result.value));
			 document.f.display.value=(document.f.result.value)+" -";
			document.f.result.value="";
			 minusClick=1;
			decimalClick=0
			 }
	function Muliply(){
			 firstNum = (parseFloat(document.f.result.value));
			 document.f.display.value=(document.f.result.value)+" *";
			 document.f.result.value="";
			 multiplyClick=1;
			decimalClick=0
			 }
	function Divison(){
			 firstNum = (parseFloat(document.f.result.value));
			 document.f.display.value=(document.f.result.value)+" /";
			 document.f.result.value="";
			 devideClick=1;
			 decimalClick=0
			 }
	function Decimal(){
			document.f.display.value=(document.f.result.value)+".";
			document.f.result.value=(document.f.result.value+".");
			}
	
	function Equal(){
			secondNum = (parseFloat(document.f.result.value));
				if (plusClick > 0) {
						total = firstNum + secondNum;
						document.f.result.value=total;
						document.f.display.value=firstNum +" + "+secondNum+" = "+total;
						firstNum = 0;
						secondNum = 0;
						plusClick = 0;
				}


				 if(minusClick>0){
						 total = firstNum - secondNum;
						 document.f.result.value=total;
						 document.f.display.value=firstNum +" - "+ secondNum+" = "+total;
						 firstNum = 0;
						 secondNum = 0;
						 minusClick = 0;
			 
				}                                      
		  if(multiplyClick>0){
						 total = firstNum * secondNum;
						document.f.result.value=total;
						document.f.display.value=firstNum +" * "+ secondNum+" = "+total;
						 firstNum = 0;
						 secondNum = 0;
						 multiplyClick = 0;
			 
			}

			 if(devideClick>0){
					 total = firstNum / secondNum;
					 document.f.result.value=total;
					 document.f.display.value=firstNum +" / "+ secondNum+" = "+total;
					 firstNum = 0;
					 secondNum = 0;
					 devideClick = 0;
			 }
	}