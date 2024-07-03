type PlainObject = { [key: string]: any };
function isObject (item: any): item is PlainObject {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Merge two localization objects and their type information.
 */
export function mergeLocalizations<T extends PlainObject, U extends PlainObject>(target: T, source: U): T & U {
  const output = { ...target } as T & U;

  for (const key in source) {
    if (isObject(source[key])) {
      if (!(key in target)) Object.assign(output, { [key]: source[key] });
      else output[key] = mergeLocalizations(target[key], source[key]) as (T & U)[Extract<keyof U, string>];
    } else {
      Object.assign(output, { [key]: source[key] });
    }
  }
  return output;
}