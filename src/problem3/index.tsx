// Please read stating issue and explaination below <3
interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance extends WalletBalance{
  // Beacuse I will remove formattedBalances[] later, this interface also is not needed
  // It is just for type checking and better readability
  // And in case of we have to keep formattedBalances[], this interface will be usefull
  // And instead of re-take 2 property below, make it extend WalletBalance

  formatted: string;
}

interface Props extends BoxProps {
  // add fields for props
  children: React.ReactNode;

}
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  // Store the priority in a object:
  const priority = {
    'Osmosis': 100,
    'Ethereum': 50,
    'Arbitrum': 30,
    'Zilliqa': 20,
    'Neo': 20
  }
  // Check priority by get property of object instead of switch case
  const getPriority = (blockchain: any): number => {
    return priority[blockchain] || -99;
  }
  // I made it more clean and shorter by rewrite if statements 
  // Sort function should be made more readable
  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => balance.amount > 0 && getPriority(balance.blockchain) > -99)
    .sort((lhs: WalletBalance, rhs: WalletBalance) =>  ( getPriority(lhs.blockchain) - getPriority(rhs.blockchain))
  )}, [balances, prices]);

  const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
      // Instead define a format local here, remove a loop of map function, so time complexity will be degree of O(n)
      const formattedAmount = balance.amount.toFixed();
      const usdValue = prices[balance.currency] * balance.amount;
      return (
        <WalletRow 
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={formattedAmount}
        />
      )
    })
  return (
    <div {...rest}>
      {rows}
    </div>
  )
}
  // This function to long and hard so expand when we have more and more data
  // Remove below code block and use object to store priority, it make more scalable and cleaner
    // const getPriority = (blockchain: any): number => {
    //   switch (blockchain) {
    //     case 'Osmosis':
    //       return 100
    //     case 'Ethereum':
    //       return 50
    //     case 'Arbitrum':
    //       return 30
    //     case 'Zilliqa':
    //       return 20
    //     case 'Neo':
    //       return 20
    //     default:
    //       return -99
    //   }
    // }


  // This code block is too long and complex. Write the shorter function using conditional operater instead of if else statement,
  // then remove below code block:
    // return balances.filter((balance: WalletBalance) => {
    //   const balancePriority = getPriority(balance.blockchain);
    //   if (lhsPriority > -99) {
    //      if (balance.amount <= 0) {
    //        return true;
    //      }
    //   }
    //   return false
    // }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
    // 	const leftPriority = getPriority(lhs.blockchain);
    //   const rightPriority = getPriority(rhs.blockchain);
    //   if (leftPriority > rightPriority) {
    //     return -1;
    //   } else if (rightPriority > leftPriority) {
    //     return 1;
    //   }
    // });          

  // This block is not neccesary, get formatted by call in local render funtion
    // const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    //   return {
    //     ...balance,
    //     formatted: balance.amount.toFixed()
    //   }
    // })

  