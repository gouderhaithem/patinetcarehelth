import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FiUser, FiUsers } from "react-icons/fi";
import { FaQrcode } from "react-icons/fa6";
import Link from "next/link";

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

export const DashboardDoctor = ({ firstName, lastName }) => {
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
          <h1 style={{ color: "white" }}>Dr. {firstName + " " + lastName} </h1>
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
          link={"/create-patient"}
          icon={<FiUser size={30} />}
          title={"Ajoutez patient"}
          seconText={"Voir tous les patients"}
        />
        <OptionButton
          link={"/scan-qr"}
          icon={<FaQrcode size={30} />}
          title={"Code Qr"}
          seconText={"Scanner Qr Code"}
        />
        <OptionButton
          link={"/patients"}
          icon={<FiUsers size={30} />}
          title={"Patients"}
          seconText={"Voir tous les patients"}
        />
      </div>
      <div></div>
    </div>
  );
};
