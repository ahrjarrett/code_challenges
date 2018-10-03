const expect = require('chai').expect;
const Thing = require('../builder_of_things.js')

console.log('\n\n\nRUNNING TESTS\n')


describe('Thing', () => {
  describe('constructor', () => {
    const jane = new Thing('Jane');
    it('jane = new Thing("Jane") creates a new object', () => {
      expect(jane).to.be.ok;
    });
    it('jane.name = "Jane"', () => {
      expect(jane.name).to.equal('Jane');
    });
  });
  describe('#is_a', () => {
    describe('jane.is_a.woman', () => {
      it('jane.is_a_woman should return true', () => {
        const jane = new Thing('Jane');
        jane.is_a.woman;
        expect(jane.is_a_woman).to.equal(true);
      });
    });
  });
  describe('#is_not_a', () => {
    describe('jane.is_not_a.man', () => {
      it('jane.is_a_man should return false', () => {
        const jane = new Thing('Jane');
        jane.is_not_a.man;
        expect(jane.is_a_man).to.equal(false);
      });
    });
  });

  describe('#has', () => {
    describe('jane.has(2).arms', () => {
      const jane = new Thing('Jane');
      jane.has(2).arms;
      it('jane.arms should be an array', () => {
        expect(Array.isArray(jane.arms)).to.equal(true);
      });

      it('jane.arms should contain two Things', () => {
        expect(jane.arms.length).to.equal(2);
        expect(jane.arms.every(arm => arm instanceof Thing)).to.equal(true);
      });

      it('should call each Thing by its singular name ("arm")', () => {
        expect(jane.arms[0].name).to.equal('arm');
      });
    });

    describe('jane.having(2).arms', () => {
      it('works like #has', () => {
        const jane = new Thing('Jane');
        jane.having(2).arms;
        expect(jane.arms.length).to.equal(2);
        expect(jane.arms[0].name).to.equal('arm');
      });
    });

    describe('jane.has(1).head', () => {
      const jane = new Thing('Jane');
      jane.has(1).head;

      it('creates a single Thing (not an array) as a property', () => {
        expect(jane.head instanceof Thing).to.equal(true);
      });

      it('jane.head.name should be "head"', () => {
        expect(jane.head.name).to.equal("head");
      });
    });

    describe('jane.has(1).head.having(2).eyes', () => {
      const jane = new Thing('Jane');
      jane.has(1).head.having(2).eyes;

      it('should create 2 new things on the head', () => {
        expect(jane.head.eyes.length).to.equal(2);
        expect(jane.head.eyes.every(eye => eye instanceof Thing)).to.equal(true);
      });

      it('should name the eye Thing "eye"', () => {
        expect(jane.head.eyes[0].name).to.equal('eye');
      });
    });

  });

  describe('#each', () => {
    describe('jane.has(2).hands.each(hand => having(5).fingers)', () => {
      const jane = new Thing('Jane');
      jane.has(2).hands.each(hand => having(5).fingers);

      it('should create 2 hands, each having 5 fingers', () => {
        expect(jane.hands.length).to.equal(2);
        expect(jane.hands[0].fingers.length).to.equal(5);
        expect(jane.hands[1].fingers.length).to.equal(5);
        expect(jane.hands[1].fingers[0].name).to.equal('finger');
      });
    });
  });

//   describe('#is_the', () => {
//     describe('jane.is_the.parent_of.joe', () => {
//       const jane = new Thing('Jane');
//       jane.is_the.parent_of.joe;

//       it('jane.parent_of === "joe"', () => {
//         expect(jane.parent_of).to.equal("joe");
//       });
//     });
//   });

//   describe('#being_the', () => {
//     describe('jane.has(1).head.having(2).eyes.each(eye => being_the.color.green)', () => {
//       const jane = new Thing('Jane');
//       jane.has(1).head.having(2).eyes.each(eye => being_the.color.green);

//       it('jane\'s eyes should both be green', () => {
//         expect(jane.head.eyes[0].color).to.equal('green');
//         expect(jane.head.eyes[1].color).to.equal('green');
//       });
//     });
//   });

//   describe('#and_the', () => {
//     describe('jane.has(2).eyes.each(eye => being_the.color.blue.and_the.shape.round)', () => {
//       const jane = new Thing('Jane');
//       jane.has(1).head.having(2).eyes.each(eye => being_the.color.blue.and_the.shape.round);

//       it('jane\'s eyes should both be blue and round', () => {
//         expect(jane.head.eyes[0].color).to.equal('blue');
//         expect(jane.head.eyes[0].shape).to.equal('round');
//       });
//     });
//   });

//   describe('#can', () => {
//     describe('jane.can.speak(phrase => `${name} says: ${phrase}!`)', () => {
//       const jane = new Thing('Jane');
//       jane.can.speak(phrase => `${name} says: ${phrase}!`);

//       it('should create a speak method on jane', () => {
//         expect(jane.speak('hello')).to.equal('Jane says: hello!');
//       });
//     });

//     describe('jane.can.speak("spoke", phrase => `${name} says: ${phrase}!`)', () => {
//       const jane = new Thing('Jane');
//       jane.can.speak('spoke', phrase => `${name} says: ${phrase}!`);

//       it('jane.spoke should track the results of all calls to jane.speak(...)', () => {
//         jane.speak('hi');
//         expect(jane.spoke).to.deep.equal(['Jane says: hi!']);
//       });
//     });
//   });

});
