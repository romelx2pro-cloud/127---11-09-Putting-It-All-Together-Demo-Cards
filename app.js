// // // **********************************
// // // WRITING EVERYTHING USING FUNCTIONS
// // // **********************************
// // const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
// // function initializeDeck() {
// //   const deck = [];
// //   const suits = ["hearts", "diamonds", "spades", "clubs"];
// //   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
// //   for (let value of values.split(",")) {
// //     for (let suit of suits) {
// //       deck.push({
// //         value,
// //         suit,
// //       });
// //     }
// //   }
// //   return deck;
// // }

// // function drawCard(deck, drawnCards) {
// //   const card = deck.pop();
// //   drawnCards.push(card);
// //   return card;
// // }

// // function drawMultiple(numCards, deck, drawnCards) {
// //   const cards = [];
// //   for (let i = 0; i < numCards; i++) {
// //     cards.push(drawCard(deck, drawnCards));
// //   }
// //   return cards;
// // }

// // function shuffle(deck) {
// //   // loop over array backwards
// //   for (let i = deck.length - 1; i > 0; i--) {
// //     //pick random index before current element
// //     let j = Math.floor(Math.random() * (i + 1));
// //     //swap
// //     [deck[i], deck[j]] = [deck[j], deck[i]];
// //   }
// //   return deck;
// // }

// // // We have to create a bunch of variables:
// // const firstDeck = initializeDeck();
// // const drawnCards = [];
// // shuffle(firstDeck);
// // // We have to pass a ton of arguments around:
// // const hand1 = drawMultiple(2, firstDeck, drawnCards);
// // const hand2 = drawMultiple(2, firstDeck, drawnCards);
// // const pokerHand = drawMultiple(5, firstDeck, drawnCards);

// // // **********************************
// // // USING AN OBJECT + METHODS INSTEAD:
// // // **********************************

// // const myDeck = {
// //   deck: [],
// //   drawnCards: [],
// //   suits: ["hearts", "diamonds", "spades", "clubs"],
// //   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
// //   initializeDeck() {
// //     const { suits, values, deck } = this;
// //     for (let value of values.split(",")) {
// //       for (let suit of suits) {
// //         deck.push({
// //           value,
// //           suit,
// //         });
// //       }
// //     }
// //     // return deck;
// //   },
// //   drawCard() {
// //     const card = this.deck.pop();
// //     this.drawnCards.push(card);
// //     return card;
// //   },
// //   drawMultiple(numCards) {
// //     const cards = [];
// //     for (let i = 0; i < numCards; i++) {
// //       cards.push(this.drawCard());
// //     }
// //     return cards;
// //   },
// //   shuffle() {
// //     const { deck } = this;
// //     // loop over array backwards
// //     for (let i = deck.length - 1; i > 0; i--) {
// //       //pick random index before current element
// //       let j = Math.floor(Math.random() * (i + 1));
// //       //swap
// //       [deck[i], deck[j]] = [deck[j], deck[i]];
// //     }
// //   },
// // };

// // // Much cleaner!!
// // myDeck.initializeDeck();
// // myDeck.shuffle();
// // const h1 = myDeck.drawMultiple(2);
// // const h2 = myDeck.drawMultiple(2);
// // const h3 = myDeck.drawMultiple(5);
// // const s = ["h", "d", "s", "c"];
// // const v = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
// // function md(s, v) {
// //   const d = [];
// //   for (const element of s) {
// //     // console.log(element);
// //     // d[element] = element;
// //     for (const element2 of v.split(",")) {
// //       d.push({ element, element2 });
// //     }
// //   }
// //   return d;
// // }
// // const mdv = md(s, v);
// // console.log(mdv.length);

// // function makeDeck() {
// //   const deck = [];
// //   const suits = ["h", "d", "s", "c"];
// //   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
// //   for (const suit of suits) {
// //     // console.log(`suit is ${suit}`);
// //     for (const value of values.split(",")) {
// //       // console.log(` suit is ${suit} and ...value is ${value}`);
// //       deck.push({ suit, value });
// //     }
// //   }
// //   return deck;
// // }
// // // const myDeck = makeDeck();
// // // console.log(myDeck.pop());
// // // console.log(myDeck);
// // function drawCard(deck) {
// //   return deck.pop();
// // }
// // console.log(drawCard(makeDeck));
// // const card1 = drawCard(myDeck);
// // const myDeck = {
// //   deck: [],
// //   drawnCards: [],
// //   suits: ["h", "d", "s", "c"],
// //   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
// //   initializeDeck() {
// //     const { suits, values, deck } = this;
// //     for (const suit of suits) {
// //       // console.log(`suit is ${suit}`);
// //       for (const value of values.split(",")) {
// //         // console.log(` suit is ${suit} and ...value is ${value}`);
// //         deck.push({ suit, value });
// //       }
// //     }
// //     // return deck;
// //   },
// //   drawCard() {
// //     const card = this.deck.pop();
// //     this.drawnCards.push(card);
// //     return card;
// //   },
// //   drawMultiple(numCards) {
// //     const cards = [];
// //     for (let i = 0; i < numCards; i++) {
// //       cards.push(this.drawCard());
// //     }
// //     return cards;
// //   },
// // };

// const myDeck = {
//   suits: ["h", "d", "s", "c"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   deck: [],
//   drawnCards: [],
//   initializeDeck() {
//     const { suits, values, deck } = this;
//     for (const suit of suits) {
//       for (const value of values.split(",")) {
//         deck.push({ value: value, suit: suit });
//       }
//     }
//     return deck;
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(num) {
//     const cards = [];
//     for (let i = 0; i < num; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
// };
// function shuffle(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const element = arr[i];
//     console.log(element);
//   }
// }
// let a = [1, 2, 3];
// shuffle(a);
const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["h", "d", "s", "c"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDeck() {
    const { values, suits, deck } = this;
    for (const value of values.split(",")) {
      for (const suit of suits) {
        deck.push({ value, suit });
      }
    }
    return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numberOfCards) {
    cards = [];
    for (let i = 0; i < numberOfCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  },
};
// let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
// let a = [1, 2, 3];
// function shuffle(deck) {
//   for (let i = deck.length - 1; i > 0; i--) {
//     let j = (Math.floor(Math.random() * (deck[i] + 1))[(deck[i], deck[j])] = [
//       deck[j],
//       deck[i],
//     ]);
//   }
//   return deck;
// }
// shuffle(a);
