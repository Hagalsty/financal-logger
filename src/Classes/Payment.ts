import HasFormater from "../Interfaces/HasFormater";

class Payment implements HasFormater {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format(): string {
    return `${this.client} is owed £${this.amount} for ${this.details} `;
  }
}

export default Payment;
