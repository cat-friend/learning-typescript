// the following lines for `greet` generated an error when compiling but `tsc` still emitted code; to prevent emitting when there's an error, use the flag `--noEmitOnError` before the file name when using `tsc`
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}`)
}

greet("Denise", new Date());
// above, `Date()` won't work for a second argument because Date() returns a string; however, new Date() will return an instance of the Date type, which is what we want

// testing --noImplicitAny
function noImplicitAny(param) {
    return param;
}
