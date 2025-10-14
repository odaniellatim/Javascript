class Account {
    #name;
    #balance;

    constructor(name, balance, element) {
        this.element = element;
        this.name = name;
        this.balance = balance;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
        this.element.querySelector("#account-name").textContent = this.name;
    }

    get balance() {
        const balance = +this.#balance;

        return balance.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    set balance(value) {
        if (value < 0) {
            throw new Error("Valor de saldo inválido");
        }

        this.#balance = value;

        const balance = this.balance;
        console.log(balance);

        this.element.querySelector("#account-balance").textContent = balance;
    }

    deposit(value) {
        if (value < 0) {
            throw new Error("Valor de depósito inválido");
        }

        this.balance = +this.#balance + +value;
    }

    withdraw(value) {
        if (value < 0) {
            throw new Error("Valor de saque inválido");
        }

        if (value > this.#balance) {
            throw new Error("Saldo insuficiente");
        }

        this.balance = +this.#balance - +value;
    }
}

class History {
    constructor(element) {
        this.transactions = [];
        this.element = element;
    }

    registerDeposit(value) {
        this.transactions.push({
            type: "depósito",
            value: value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }),
        });

        this.render();
    }

    registerWithdraw(value) {
        this.transactions.push({
            type: "saque",
            value: value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }),
        });

        this.render();
    }

    render() {
        this.element.replaceChildren(
            ...this.transactions.map(({ type, value }) => {
                const element = document.createElement("li");
                element.textContent = `${type}: ${value}`;
                return element;
            })
        );
    }
}

class UserInterface {
    render() {
        const accountForm = document.querySelector("#account-form");
        const transactionForm = document.querySelector("#transaction-form");
        const accountElement = document.querySelector("#account");
        const historyElement = document.querySelector("#history");

        const account = new Account("---", 0, accountElement);
        const history = new History(historyElement);

        accountForm.addEventListener("submit", (event) => {
            event.preventDefault();

            account.name = accountForm.elements.name.value;
            account.balance = accountForm.elements.balance.value;
        });

        transactionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const type = event.submitter.value;
            const value = transactionForm.elements.value.value;

            try {
                if (type === "deposit") {
                    account.deposit(value);
                    history.registerDeposit(value);
                    return;
                }

                if (type === "withdraw") {
                    account.withdraw(value);
                    history.registerWithdraw(value);
                    return;
                }
            } catch (error) {
                alert(error);
            }
        });
    }
}

const ui = new UserInterface();
ui.render();