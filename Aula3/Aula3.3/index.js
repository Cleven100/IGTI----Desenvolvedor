const CarModel = ["Onix", "T-Cross", "HB20", "Palio"];

//
for (let index = 0; index < CarModel.length; index++) {
  console.log(CarModel[index]);
}

let index = 0;
while (index < CarModel.length) {
  console.log(CarModel[index]);
  index++;
}

for (const car of CarModel) {
  console.log(car);
}

const carModelAll = {
  allModel: {
    Fiat: ["Palio", "Crons", "Toro"],
    Volksvagem: ["gol", "UP", "Nivus"],
    Chevrolet: ["onix"],
  },
  [Symbol.iterator]() {
    const brands = Object.values(this.allModel);

    let currentModelIndex = 0;
    let currentBrandIndex = 0;

    return {
      next() {
        const Models = brands[currentBrandIndex];
        if(!(currentModelIndex < Models.length)){
            currentBrandIndex++;
            currentBrandIndex=0;

        }

        if( currentBrandIndex < Models.length) {
            return {
                value: undefined,
                done: true
            }
        }

        return {
          value: "",
          done: false,
        };
      },
    };
  },
};
