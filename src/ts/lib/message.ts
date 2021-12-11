export default class Message {
  private text: string

  constructor (text: string) {
    this.text = text
  }

  get content () {
    return this.text
  }

  set content (text: string) {
    this.text = text
  }

  public publish (selector: string): void {
    const qs = document.querySelector.bind(document)
    const element = qs(selector) as HTMLElement
    element.innerHTML = this.text
  }
}
