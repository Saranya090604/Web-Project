

const bikeBrands = ["BMW", "AUDI", "JAGQUAR"];
bikeBrands.forEach ((item, index) => {
    if (item === "jaguar") {
        bikeBrands[index] = "Honda";
    }
});
console.log(bikeBrands);

