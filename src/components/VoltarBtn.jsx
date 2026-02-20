import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function VoltarBtn() {
    const navigate = useNavigate();
  return (
    <div className="border-2 border-green-400 p-2 rounded-lg text-center w-[100px]">
        <button onClick={() => navigate("/")} className="flex items-center justify-">
            <FaArrowLeft /> Voltar
        </button>
    </div>
  );
}

export default VoltarBtn;
