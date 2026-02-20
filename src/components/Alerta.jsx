import { GoAlert } from "react-icons/go";

function Alerta() {
  return (
    <div className="border-2 border-green-400 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 bg-green-100/40">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-full p-4 shadow-md">
                <GoAlert size={60} color="red" />
              </div>
            </div>

            <div className="space-y-4 text-gray-800">
              <p className="text-justify leading-relaxed">
                Em razão de tentativas de iludir a boa fé das pessoas, alertamos
                que o Ofício 1º Distribuidor de Curitiba não realiza qualquer
                tipo de aviso ou notificação através de contatos telefônicos,
                envio de e-mails, torpedos ou mensagens via aplicativos.
                Providências para identificar os responsáveis já foram tomadas
                junto ao 3º Distrito Policial de Curitiba.
              </p>

              <p className="font-bold text-justify leading-relaxed">
                Desta forma alertamos para que não faça depósitos ou
                transferências bancárias sob pedido que vincule o nome do Ofício
                1º Distribuidor de Curitiba.
              </p>
            </div>
          </div>
  );
}

export default Alerta;
