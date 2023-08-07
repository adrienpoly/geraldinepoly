import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  connect() {
    setTimeout(() => {
      this.initializeCrisp();

    }, 1000);
  }

  initializeCrisp() {
    if (window.$crisp) {
      return;
    }

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "fa4a0e7f-2db1-464f-98ce-d0056f168353";
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    d.getElementsByTagName("head")[0].appendChild(s);
    setTimeout(() => {
      const client = document.querySelector(".crisp-client")
      client.id = "crisp-client";
      client.setAttribute("data-turbo-permanent", "true")
    }, 1000);
  }

  show() {
    $crisp.push(["do", "chat:open"]);
    $crisp.push(["safe", true])
  }
}
