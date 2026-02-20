import logoBrasil from "../assets/brazil.png";

function TituloDistr() {
  return (
    <div className="bg-green-400 flex p-6 rounded-t-lg w-[100%] justify-between">
      <div className="flex">
        <div className="p-2 font-bold content-center border-black border-r-4 text-[50px]">
          <h1>1º</h1>
        </div>
        <div className="content-center p-4">
          <div className="font-bold text-[2rem]">Oficio do Distribuidor</div>
          <div>Foro Central da Comarca da Região Metropolitana de Curitiba</div>
        </div>
      </div>

      <div className="content-center hidden lg:block">
        <img className=" h-[100px]" src={logoBrasil} />
      </div>
    </div>
  );
}

export default TituloDistr;
