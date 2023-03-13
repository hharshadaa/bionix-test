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
	
x = v.split(' ');
console.log(x);
console.log((x[0]).length);

for (i in x) {
  if ((i).length == 1) {
    x = i.toUpperCase();
    console.log(x, end=' ');
  } else if ((i).length / 2 % 1 == 0) {
    fullClintStr = i;
    lowerCaseStr = fullClintStr.toLowerCase();
    upperCaseStr = fullClintStr.toUpperCase();
    cutlen = (fullClintStr).length//2;
    logStr = upperCaseStr[cutlen] + lowerCaseStr[cutlen];
    console.log(console.logStr, end=' ');

  } else if ((i).length  / 2 % 1 != 0) {
		 fullClintStr = i;
		 lowerCaseStr = fullClintStr.toLowerCase();
		 upperCaseStr = fullClintStr.toUpperCase();
		 cutlen = ((fullClintStr).length-1) // 2
		 logStr = upperCaseStr[cutlen] + lowerCaseStr[cutlen];
		 console.log(logStr, end=' ');
  }


}
	
	textNode.nodeValue = logStr;
}


