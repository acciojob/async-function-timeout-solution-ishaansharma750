const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
// async function showMessage() {
//   const message = text.value;
//   const delayVal = delay.value;
//   await new Promise((resolve) => setTimeout(resolve, delayVal));
//   output.innerText = message;
// }

// btn.addEventListener("click", showMessage);

async function showMessege() {
	const message = text.value;
	const delayValue = delay.value;
	output.innerText = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(message);
		}, delayValue);
	});
}

btn.addEventListener("click", showMessege);