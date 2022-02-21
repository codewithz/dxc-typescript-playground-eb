let message="Test";

const endsWithT=message.endsWith("t");

console.log(message,"ends with T:",endsWithT);

let myMessage;
myMessage="Angular";

//Way 1 - Type Assertion
const endsWithR=(<string>myMessage).endsWith("r");
console.log(message,"ends with r:",endsWithR);

//Way 2 - Type Assertion
const endsWithL=(myMessage as string).endsWith('l');
console.log(message,"ends with r:",endsWithL);