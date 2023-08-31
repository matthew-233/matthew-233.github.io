function textToListWithParenthesis(textFile) {
   
    const fs = require("fs");
  
    const text = fs.readFileSync(textFile, "utf-8");
  
    const words = text.split(" ");
    const listOfWords = [];
    for (const word of words) {
      listOfWords.push(`(${word})`);
    }
  
    return listOfWords;
  }

  export const REALWORDS = textToListWithParenthesis(realwords.txt);