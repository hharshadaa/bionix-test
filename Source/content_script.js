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
	var n = textNode.nodeValue;
	
	v = ' a i j main four love tree cave apples tempo antidisestablishments';
x = v.split(' ');
console.log(x);
console.log(len(x[0]));

for (i in x) {
  if (len(i) == 1) {
    x = i.upper();
    console.log(x, end=' ');
  } else if (len(i) / 2 != float) {
    fullClintStr = i;
    lowerCaseStr = fullClintStr.lower();
    upperCaseStr = fullClintStr.upper();
    cutlen = len(fullClintStr)//2;
    console.logStr = upperCaseStr[cutlen] + lowerCaseStr[cutlen];
    console.log(console.logStr, end=' ');

  } else if (len(i) / 2 == float) {
		 fullClintStr = i;
		 lowerCaseStr = fullClintStr.lower();
		 upperCaseStr = fullClintStr.upper();
		 cutlen = (len(fullClintStr)-1) // 2
		 console.logStr = upperCaseStr[cutlen] + lowerCaseStr[cutlen];
		 console.log(console.logStr, end=' ');
  }


}
	
	n = n.replace(/\bbeautiful\b/g, "harshada");
	n = n.replace(/\bBeautiful\b/g, "Harshada");
	n = n.replace(/\beau·ti·ful\b/g, "Har·sha·da"); 
	textNode.nodeValue = n;
}


