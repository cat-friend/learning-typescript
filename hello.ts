console.log("Hello world!")

// the following lines for `greet` generated an error when compiling but `tsc` still emitted code; to prevent emitting when there's an error, use the flag `--noEmitOnError` before the file name when using `tsc`
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`)
}

greet("Wiggles")


greet("Wiggles", 1/1/11)
