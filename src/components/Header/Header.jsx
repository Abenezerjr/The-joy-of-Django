import djangoImg from "../../assets/django.png";
import "./Header.css";

const reactdescription = ["Fundamental", "Crucia", "Core"];

function getRandemoInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactdescription[getRandemoInt(2)];
  return (
    <header>
      <img src={djangoImg} alt="Stylized atom" />
      <h1>Django Essentials</h1>
      <p>
        {description} Django concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
