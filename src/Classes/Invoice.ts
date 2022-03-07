import HasFormater from "../Interfaces/HasFormater";

class Invoice implements HasFormater {
  constructor(
    readonly client: string,
    private details: string,
    public amount: string
  ) {}
  format(): string {
    return `${this.client} ows £${this.amount} for ${this.details} `;
  }
}

export default Invoice;
