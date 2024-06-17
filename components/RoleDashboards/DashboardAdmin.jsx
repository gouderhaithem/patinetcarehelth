import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FiUser, FiUsers, FiLogOut } from "react-icons/fi";
import { FaQrcode } from "react-icons/fa6";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const OptionButton = ({ icon, title, seconText, link }) => {
  return (
    <Link href={link}>
      <div
        style={{
          backgroundColor: "#d4f4f4",
          minHeight: "7rem",
          width: "22rem",
          borderRadius: "15px",
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          cursor: "pointer",
        }}
      >
        <div
          className="icon-div"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          {icon}
        </div>
        <div>
          <p style={{ fontSize: "1.5rem" }}>{title}</p>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#f7f7f7",
              boxShadow: "0 1px 2px #0000004d",
              marginBottom: "1rem",
            }}
          ></div>
          <p>{seconText}</p>
        </div>
      </div>
    </Link>
  );
};

export const DashboardAdmin = ({ firstName, lastName }) => {
  const { logout } = useUser();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <div
        className="greating"
        style={{
          maxHeight: "45vh",
          display: "flex",
          borderRadius: "20px",
          backgroundColor: "#a8a8a8",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
          marginBottom:"3rem"
        }}
      >
        <div>
          {" "}
          <p style={{ color: "white", fontSize: "1.2rem" }}>
            Bienvenue de retour,
          </p>
          <h1 style={{ color: "white" }}>
            Mr Admin {firstName + " " + lastName}{" "}
          </h1>
          <p style={{ color: "white", fontSize: "1.2rem" }}>
            Bienvenue de retour,
          </p>
        </div>
        <div>
          <Image src="/images/doctors.png" width={350} height={350} />
        </div>
      </div>
      
      <div
        className="options"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <OptionButton
          link={"/create-user"}
          icon={<FiUser size={30} />}
          title={"Ajoutez Utilisateur"}
          seconText={"Voir tous les patients"}
        />
        <OptionButton
          link={"/users"}
          icon={<FiUsers size={30} />}
          title={"Les Utilisateurs"}
          seconText={"Voir la list des utilisateurs"}
        />
        <div
          style={{
            backgroundColor: "#d4f4f4",
            minHeight: "7rem",
            width: "22rem",
            borderRadius: "15px",
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            cursor: "pointer",
          }}
          onClick={logout}
        >
          <div
            className="icon-div"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              padding: "1rem",
            }}
          >
            <FiLogOut size={30} />
          </div>
          <div>
            <p style={{ fontSize: "1.5rem" }}>Deconnexion</p>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#f7f7f7",
                boxShadow: "0 1px 2px #0000004d",
                marginBottom: "1rem",
              }}
            ></div>
            <p>Déconnectez-vous ici</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
