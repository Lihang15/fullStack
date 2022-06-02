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
  console.log(getNewVersionIndustryString('Government Agency'))
  console.log(getNewVersionIndustryString('Consumer Goods & Services'))
  console.log(getNewVersionIndustryString('11'))
 