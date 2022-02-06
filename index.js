function introduction(name)
    console.log(`Hi, my name is "${name}".`);
}

function introductionWithLanguages(){
    console.log('The two values are ${_name} and ${_language}.')
}

function introductionWithLanguageOptional(firstName, language = "Javascript"){
    console.log(`Hi my name is ${firstName} and I am learning to program in ${language}.`)
}