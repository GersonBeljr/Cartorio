import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import TituloDistr from "./TituloDistr";

//Menu inicial da pagina
function Menu() {
  const navigate = useNavigate();

  return (
    <div className="bg-green-200 rounded-lg drop-shadow-2xl md:w-3/4">
      {/*Titulo*/}
      <TituloDistr />
      {/*Opcoes*/}
      <div className="p-2 flex flex-col h-4/6 justify-between content-center">
        <p className="text-center font-semibold">
          (41) 3027-5253 | (41) 99778-0024 | (41) 99559-1516
        </p>
        <div className="p-6 flex flex-col xl:items-center gap-10">
          <button
            onClick={() => navigate("/info")}
            className=" drop-shadow bg-green-400 flex items-center hover:bg-green-300 text-lg font-semibold rounded-lg p-2 text-left xl:w-2/3"
          >
            <IoInformationCircleOutline size={35} className="" />
            <p className="p-2">INFORMAÇÕES</p>
          </button>
          <button
            onClick={() => navigate("/competencias")}
            className="drop-shadow bg-green-400 flex items-center hover:bg-green-300 text-lg font-semibold rounded-lg p-2 text-left xl:w-2/3"
          >
            <MdOutlineWorkOutline size={35} className="" />
            <p className="p-2">COMPETENCIAS DO DISTRIBUIDOR</p>
          </button>
          <button
            onClick={() => navigate("/certidao")}
            className="drop-shadow bg-green-400 flex items-center hover:bg-green-300 text-lg font-semibold rounded-lg p-2 text-left xl:w-2/3"
          >
            <HiOutlineDocument size={35} className="" />
            <p className="p-2">PEDIDOS DE CERTIDAO</p>
          </button>
        </div>
        <p className="text-center  ">© Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Menu;
