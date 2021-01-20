function valid(){
	var count=0,result=0;
	if(document.getElementById("Iphone12ProMax").checked==true)
	{
		count++;
		result+=134999*(document.getElementById("Quantity1").value);
	}
	if(document.getElementById("Iphone12Pro".checked)==true)
	{
		count++;
		result+=109999*(document.getElementById("Quantity2").value);
	}
	if(document.getElementById("IpadAir").checked==true)
	{
		count++;
		result+=54999*(document.getElementById("Quantity3").value);
	}
	if(document.getElementById("iPadPro").checked==true)
	{
		count++;
		result+=74999*(document.getElementById("Quantity4").value);
	}
	if(document.getElementById("samsungS20").checked==true)
	{
		count++;
		result+=64999*(document.getElementById("Quantity5").value);
	}
	if(document.getElementById("SamsungS20+").checked==true)
	{
		count++;
		result+=84999*(document.getElementById("Quantity6").value);
	}
	if(document.getElementById("MacBookPro").checked==true)
	{
		count++;
		result+=224999*(document.getElementById("Quantity7").value);
	}
	if(document.getElementById("LenovoThinkpad").checked==true)
	{
		count++;
		result+=144999*(document.getElementById("Quantity8").value);
	}
	if(count==0)
	{
		alert("Please Add Atleast one item to checkout");
	}
	else{
	alert("You are buying "+count+" Items.");
	alert("Total Billing Amount is "+result);
	}
}
