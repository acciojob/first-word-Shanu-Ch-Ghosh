function firstWord(s) {
  // Trim leading spaces
  const trimmedStr = s.trimStart();
  
  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return '';
  }
  
  // Find the first space
  const spaceIndex = trimmedStr.indexOf(' ');
  
  // If there is no space, return the entire trimmed string
  if (spaceIndex === -1) {
    return trimmedStr;
  }
  
  // Return the substring up to the first space
  return trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

