/*
I don't understand what the PM needs
I've done this, only as a test
lasts is an array with last 10 valid results ( null are discarted )
I will do the sum, and the average of the abs value of deviation

*/
export const calculateSomethingRelatedWithLast10 = (nominal: number, lasts:string) => {
  let values = []
  try {
    values = JSON.parse(lasts)
  } catch (e) {
    return null
  }

  if (!values.length) return null

  const something = values.reduce(
    (prev: number, item:number) => {
      const dev = Math.abs(item - nominal)
      return prev + dev
    }, 0
  )

  return something / values.length
}
