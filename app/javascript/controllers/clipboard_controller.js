import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = { content: String }

  connect() {
    this.originalText = this.element.textContent
  }

  async writeClipboardText() {
    try {
      await navigator.clipboard.writeText(this.contentValue);
      this.element.textContent = "Copied!"
      setTimeout(() => {
        this.element.textContent = this.originalText
      }, 1500)
    } catch (error) {
      console.error(error.message);
    }
  }
}
