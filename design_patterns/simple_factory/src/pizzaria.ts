class Pizza {
  preparar() {
    console.log("Preparando pizza");
  }

  assar() {
    console.log("Assando pizza");
  }

  cortar() {
    console.log("Cortando pizza");
  }

  embalar() {
    console.log("Embalando pizza");
  }
}

class PizzaQuadrada extends Pizza {}

class PizzaCalabresa extends Pizza {}

class SimplePizzaFacttpry {
  criarPizza(tipo: string): Pizza | null {
    let pizza: Pizza | null = null;
    if (tipo === "quadrada") {
      pizza = new PizzaQuadrada();
    }
    if (tipo === "calabresa") {
      pizza = new PizzaCalabresa();
    }
    pizza?.preparar();
    pizza?.assar();
    pizza?.cortar();
    pizza?.embalar();
    return pizza;
  }
}

class PizzaStore {
  constructor(private factory: SimplePizzaFacttpry) {
    console.log(this.factory);
  }
}

const teste = (): void => {
  new PizzaStore(new SimplePizzaFacttpry());
};

teste();
