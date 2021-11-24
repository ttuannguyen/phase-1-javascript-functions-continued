function saturdayFun(activity = "roller-skate") {
  return  `This Saturday, I want to ${activity}!`;
} //function declaration

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
} //function expression = declare a var and assign a fn as its value

function wrapAdjective(wrap = "*") {
  return function (adjective = "special") {
    return `You are ${wrap}${adjective}${wrap}!`;
  }
}

//wrapAdjective("%")("a dedicate d programmer");