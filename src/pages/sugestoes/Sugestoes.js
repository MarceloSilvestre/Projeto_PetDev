import { useState } from "react";
import style from "./sugestoes.module.css";
import emailjs from "@emailjs/browser";

export default function Sugestoes() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
      alert("Por favor, preencha todos os campos (Nome, Email e Mensagem são obrigatórios).");
      return;
    }

    const isConfirmed = window.confirm(
      "Sua sugestão foi aceita com sucesso. Deseja continuar?"
    );
    if (isConfirmed) {
      const templateParams = {
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      emailjs.send("service_qz6qdpf", "template_n62zvjh", templateParams, "OSFS2ByfAUBmrEhqR")
        .then((response) => {
          alert("Sua sugestão foi enviada com sucesso!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          alert("Ocorreu um erro ao enviar sua sugestão. Tente novamente.");
          console.error("FAILED...", error);
        });
    }
  };

  return (
    <div className={style.Sugestoes}>
      <h1>DEIXE SUA SUGESTÃO</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ESCREVA AQUI SUA SUGESTÃO"
          />
        </div>
        <input type="submit" value="ENVIAR" />
      </form>
    </div>
  );
}
