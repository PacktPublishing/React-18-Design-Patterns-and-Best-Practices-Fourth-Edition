const toUpperCase1 = (input: string[]): string[] => {
  const output: string[] = [];
  
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toUpperCase());
  }
  
  return output;
}

const toUpperCase2 = (input: string[]) => input.map(value => value.toUpperCase())

console.log(toUpperCase1(['foo', 'bar']))
console.log(toUpperCase2(['foo', 'bar']))