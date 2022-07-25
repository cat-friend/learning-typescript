// Defining types

// creating an object with an inferred type which includes name: string, id: number:

const user = {
    name: "Hayes",
    id: 0,
}

// explicitly defining types using the `interface` declaration:
interface User {
    name: string;
    id: number;
}
// note the nomenclature here - capital letter for interface and lowercase for implicitly defined obj

// declare types using different explicit values
// interface vs type - extend and &

// composing types
// create complex types - combine simple ones -> with unions and with generics
