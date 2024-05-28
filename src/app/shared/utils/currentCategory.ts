export function currentCategory(index: number) {
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
