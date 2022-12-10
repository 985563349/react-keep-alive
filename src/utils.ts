export function isKeepPath(aliveList: any[], path: string) {
  let isKeep = false;

  aliveList.forEach((item) => {
    if (item === path) {
      isKeep = true;
    }
    if (item instanceof RegExp && item.test(path)) {
      isKeep = true;
    }
    if (typeof item === 'string' && item.toLowerCase() === path) {
      isKeep = true;
    }
  });

  return isKeep;
}
