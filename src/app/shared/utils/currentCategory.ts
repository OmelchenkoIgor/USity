export function currentCategoryName(index: number) {
  switch (index) {
    case 0:
      return 'all';
    case 1:
      return 'restaurants';
    case 2:
      return 'coffee-shops';
    case 3:
      return 'barber-shops';
    default:
      return 'Invalid index';
  }
}

export function currentCategoryIndex(name: string) {
  switch (name) {
    case 'all':
      return 0;
    case 'restaurants':
      return 1;
    case 'coffee-shops':
      return 2;
    case 'barber-shops':
      return 3;
    default:
      return 0;
  }
}

