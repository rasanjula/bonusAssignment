class InvestmentCalculator {
    constructor(initialInvestment, monthlyContribution, years, interestRate) {
        this.initialInvestment = initialInvestment;
        this.monthlyContribution = monthlyContribution;
        this.years = years;
        this.interestRate = interestRate / 100; // Convert to decimal
    }

    calculateGrowth() {
        let results = [];
        let investmentValue = this.initialInvestment;
        let totalContributions = this.initialInvestment;

        for (let year = 0; year <= this.years; year++) {
            results.push({
                year: year,
                investmentValue: investmentValue.toFixed(2),
                totalContributions: totalContributions.toFixed(2)
            });

            if (year < this.years) {
                totalContributions += this.monthlyContribution * 12;
                investmentValue = (investmentValue + this.monthlyContribution * 12) * (1 + this.interestRate);
            }
        }
        return results;
    }

    displayResults() {
        let results = this.calculateGrowth();
        console.log("Year | Investment Value | Total Contributions");
        results.forEach(entry => {
            console.log(
                `Year ${entry.year}: ${entry.investmentValue} | ${entry.totalContributions}`
            );
        });
    }
}

