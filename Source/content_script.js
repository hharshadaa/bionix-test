walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	console.log(v);
	
	
y = v.split(" ") //string split by space -> converted to list
//#print(x) 
//#print(type(x)) =  list
//#print(len(x[5])) = len of certain element
	
  
for (i in y)  {// #iterates through every value/element in list
    if ((i).length == 1){ //#base-case EX/ a, i, e...
      x = i.toUpperCase() //#turned into A, I, E...
      v = v.replace(i ,x) ///replaces the word with the new version of the word
	    console.log(x);
    }
    else if ((i).length / 2 % 1 == 0) { //#if its an even number
      fullStr = i //#gets a name so its recognizable 
      lowerCaseStr = fullStr.toLowerCase() //# makes copy of Apples -> apples
      upperCaseStr = fullStr.toUpperCase() //# makes copy of Apples -> APPLES
      cutlen = (fullStr).length //2 # takes Apples length (6), halves it, cuts off decimals
      printStr = upperCaseStr.slice(0,cutlen) + lowerCaseStr.slice(cutlen,lowerCaseStr.length) //# APPLES -> APP + les <- apples
      v = v.replace(i ,printStr) //replaces the word with the new version of the word
	    console.log(printStr);
    }
    else if ((i).length  / 2 % 1 != 0) {//if it's a decimal
  		 fullStr = i
  		 lowerCaseStr = fullStr.toLowerCase()
  		 upperCaseStr = fullStr.toUpperCase()
  		 cutlen = ( (fullStr).length -1) // 2 #Makes length even, rounding down
  		 printStr = upperCaseStr.slice(0,cutlen) + lowerCaseStr.slice(cutlen,lowerCaseStr.length)
  		 v = v.replace(i ,printStr) //replaces the word with the new version of the word
	    console.log(printStr);
    }
}
	
	textNode.nodeValue = v;
}


