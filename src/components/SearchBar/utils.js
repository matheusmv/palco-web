export function buildSearchParams(searchObject) {
  return Object.keys(searchObject).reduce((searchParams, filter) => {
    if (filter === 'eventName' && !searchObject[filter]) {
      searchParams[filter] = undefined;
    } else if (searchObject[filter]) {
      searchParams[filter] = searchObject[filter];
    }

    return searchParams;
  }, {});
}
