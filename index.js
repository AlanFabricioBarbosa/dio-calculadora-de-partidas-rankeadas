function calcRank(wins, losses) {
  const winMargin = wins - losses;

  let level;

  if (winMargin < 0) {
    level = "Ferro";
  } else {
    switch (true) {
      case wins < 10:
        level = "Ferro";
        break;
      case wins >= 11 && wins <= 20:
        level = "Bronze";
        break;
      case wins >= 21 && wins <= 50:
        level = "Prata";
        break;
      case wins >= 51 && wins <= 80:
        level = "Ouro";
        break;
      case wins >= 81 && wins <= 90:
        level = "Diamante";
        break;
      case wins >= 91 && wins <= 100:
        level = "Lendário";
        break;
      case wins >= 101:
        level = "Imortal";
        break;
      default:
        level = "Nível não identificado";
    }
  }

  return `O herói possui um saldo de vitórias em relação a derrotas de ${winMargin} e está no nível ${level}.`;
}

const wins = 75;
const losses = 40;

console.log(calcRank(wins, losses));
