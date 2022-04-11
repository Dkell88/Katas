const makeCase = function(input, caseStyle) {
    let text = input;
    let caseArray = [];
    const excuOrder = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];

    if(typeof caseStyle === "string"){
        caseArray[0] = caseStyle;
    }
    if(typeof caseStyle === "object"){
        caseArray = caseStyle;
    }

    for(let y = 0; y < excuOrder.length; y++){
        for(let r = 0; r < caseArray.length; r++){
            if(excuOrder[y] === caseArray[r]){
                text = makeCaseII(text, caseArray[r]);
                //console.log(text + " " + excuOrder[y]+ " " + caseArray[r]);
            }
        }
    }
    return text;
}

const makeCaseII = function(input, caseStyle){
    let text = "";
    switch (caseStyle){
    case "camel":
        text = camel(input);
        break;
    case "pascal":
        text = pascal(input);
        break;       
    case "snake":
        text = snake(input);
        break;
    case "kebab":
        text = kebab(input);
        break;      
    case "title":
        text = title(input);
        break;
    case "vowel":
        text = vowel(input);
        break;      
    case "consonant":
        text = consonant(input);
        break;      
    case "upper":
        text = upper(input);
        break;
    case "lower":
        text = lower(input);
        break;
    }
    return text
}

function camel(input){
    let string = "";
    for (let i = 0; i < input.length; i++){
        if(input[i] === " "){
            i ++;
            string += input[i].toUpperCase()
        }else string += input[i];
    }
    return string;
  }

function pascal(input){
    let string = "";
    string += input[0].toUpperCase()
    for (let i = 1; i < input.length; i++){
        if(input[i] === " "){
            i ++;
            string += input[i].toUpperCase();
        }else string += input[i];
    }
    return string;
}

function snake(input){
    let string = "";
    for (let i = 0; i < input.length; i++){
        if(input[i] === " "){
            string += "_";
        }else string += input[i];
    }
    return string;
}
function kebab(input){
    let string = "";
    for (let i = 0; i < input.length; i++){
        if(input[i] === " "){
            string += "-";
        }else string += input[i];
    }
    return string;
}

function title(input){
    let string = "";
    string += input[0].toUpperCase()
    for (let i = 1; i < input.length; i++){
        if(input[i] === " "){
            i ++;
            string += " " + input[i].toUpperCase();
        }else string += input[i];
    }
    return string;
}

function vowel(input){
    let string = "";
    const vowels = ['a','e','i','u','o'];
    for (let i = 0; i < input.length; i++){
        if(vowels.includes(input.charAt(i))){
            string += input[i].toUpperCase();
        }else string += input[i]
    }
    return string;
}
function consonant(input){
    let string = "";
    const vowels = ['a','e','i','u','o'];
    for (let i = 0; i < input.length; i++){
        if(!vowels.includes(input.charAt(i))){
            string += input[i].toUpperCase();
        }else string += input[i]
    }
    return string;
}

function upper(input){
    return input.toUpperCase()
}
function lower(input){
    return input.toLowerCase()
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "kebab", "title"]));
