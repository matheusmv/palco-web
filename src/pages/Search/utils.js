export function buildSearchFiltersFromUrlParamsEntries(entries) {
  return Array.from(entries).reduce((searchFilter, [key, value]) => {
    if (key === 'eventName' && ['undefined', ''].includes(value)) {
      searchFilter[key] = undefined;
    } else {
      searchFilter[key] = value;
    }

    return searchFilter;
  }, {});
}
