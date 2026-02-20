import TituloDistr from "../components/TituloDistr";
import Formulario from "../components/Formulario";

function CertidaoPage() {
  return (
    <div className="bg-green-100 flex justify-center p-6">
      <div className="bg-green-200 rounded-lg drop-shadow-2xl md:w-3/4">
        {/*Titulo*/}
        <TituloDistr />
        {/*Texto*/}
        <h1 className="text-3xl font-bold text-center border-b-2 border-green-400 pb-2">
          PEDIDO DE CERTIDÕES
        </h1>
        <div className="p-6 flex flex-col gap-4">
          <div className="bg-green-100/50 rounded-xl p-6 shadow-inner space-y-4 text-justify leading-relaxed text-gray-800">
            <p>Solicite sua certidão seguindo os seguintes passos:</p>

            <ol className="list-decimal space-y-2">
              <li>
                Preencha os dados do solicitante e solicitado. (Solicitado é no
                nome de quem constará na certidão).
              </li>
              <li>
                Após preenchidos os dados, clique em TIPO DE CERTIDÃO e assinale
                a(s) certidão(ões) desejada(s).
              </li>
              <li>Clique em SALVAR PEDIDO e FINALIZAR O PEDIDO.</li>
              <li>
                Aguarde a emissão da guia para pagamento. (Obs. em
                aproximadamente 2 horas sua guia estará disponível para
                pagamento, sendo enviada por email).
              </li>
              <li>
                PRONTO! Aguarde e acompanhe a emissão das suas certidão(ões),
                por meio do - Acompanhamento de Pedidos -.
              </li>
              <li>
                Prazo de entrega das certidões: 24 horas após a compensação
                bancária.
              </li>
            </ol>
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default CertidaoPage;
