export const getDots = (name:string, price:number) => {
    const totalLength = 45; // Total length we want for the line
    const textLength = name.length + (''+price).length;
    const dotsLength = totalLength - textLength;

    return '.'.repeat(dotsLength);
  };