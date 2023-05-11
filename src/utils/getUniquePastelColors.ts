/**
 * Returns a array of given length with unique pastel colors
 */
export const getUniquePastelColors = (n: number) => {
  const colors = []; 

  for (let i= 1; i <= n; i++) {
    colors.push(`hsla(${Math.floor((360/n * i))}, 70%,  72%, 0.8)`)
  }

  return colors;
}