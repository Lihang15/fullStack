function getNewVersionIndustryString(industry: string): string {
  switch (industry) {
    case 'Finance':
      return 'Financials';
    case 'Government Agency':
      return 'Others';
    case 'Consumer Goods & Services':
      return 'Consumer Discretionary';
    default:
      return industry;
  }
}

console.log(getNewVersionIndustryString('Finance'))