function modifyArray(nums) {
  const solution = []
  nums.map((num) => {
    if (num % 2 === 0) {
      solution.push(num * 2)
    } else {
      solution.push(num * 3)
    }
  })
  return solution
}

console.log(modifyArray([1, 2, 3, 4]))
