import "./main.css";
import {
  createIcons,
  Instagram,
  Linkedin,
  Github,
  Send,
  Palette,
  Sun,
  Moon,
} from "lucide";

const footer = document.getElementById("footer") as HTMLElement;

footer.textContent = `© ${new Date().getFullYear()} - { VisualArtisan.fr }`;

createIcons({
  icons: { Instagram, Linkedin, Github, Send, Palette, Moon, Sun },

  nameAttr: "data-lucide",
});
