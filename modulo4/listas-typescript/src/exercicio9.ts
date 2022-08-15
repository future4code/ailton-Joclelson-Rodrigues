const chacaFatorial = (palavra: string): number => {
    const quantidadeLetras = palavra.length;
  
    if (quantidadeLetras === 0) {
      return 1;
    }
  
    let res = 1;
  
    for (let i = quantidadeLetras; i > 0; i--) {
      res *= i;
    }
  
    return res;
  };
  console.log(chacaFatorial("joclelson"))