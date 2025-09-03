function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
}

class FormSubmit {
  constructor(settings) {
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  onSubmission(event) {
    this.formButton.disabled = true;
    this.formButton.innerText = "Enviando...";
  }

  async sendForm(event) {
      this.onSubmission(event);
      }

  init() {
    if (this.form) this.form.addEventListener("submit", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
});
formSubmit.init();
