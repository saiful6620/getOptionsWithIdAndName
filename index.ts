export const getOptionsWithIdAndName = <T extends Record<string, unknown>>(
  data: T[] | undefined,
  idKey: string,
  nameKey: string,
): (T & {id: string | number; name: string})[] => {
  const options: (T & {id: string | number; name: string})[] = []
  if (!data) return options;
  data.forEach(item => {
    const id = item[idKey as keyof T] as string | number
    const name = item[nameKey as keyof T] as string
    options.push({
      ...item,
      id,
      name,
    })
  })
  return options
}
