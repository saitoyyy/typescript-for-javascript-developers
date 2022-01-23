export {};

// returnで何かを返さない場合(void, any型だったらreturnは不要)
function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing());
