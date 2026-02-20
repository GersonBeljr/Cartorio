import TituloDistr from "../components/TituloDistr";
import Alerta from "../components/Alerta";
import VoltarBtn from "../components/VoltarBtn";

function CompetenciaPage() {
  return (
    <div className=" bg-green-100 flex justify-center p-6">
      <div className="bg-green-200 rounded-lg drop-shadow-2xl md:w-3/4">
        {/*Titulo*/}
        <TituloDistr />
        
        {/*Texto*/}
        <div className="space-y-10 p-6">
          <Alerta />  
          <h2 className="text-3xl font-bold text-center border-b-2 border-green-400 pb-2">
            Áreas de Distribuição
          </h2>

          {/* VARAS DA FAMÍLIA */}
          <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold">
              1ª a 8ª Varas da Família – Sistema PROJUDI
            </h3>

            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Procedimentos Ordinários</li>
              <li>Medidas Cautelares</li>
              <li>Alimentos</li>
              <li>Divórcio</li>
              <li>Conversão de Separação em Divórcio</li>
              <li>Anulação de Casamento</li>
              <li>Investigação e Reconhecimento de Paternidade</li>
              <li>Dissolução de Sociedade de Fato e União Estável</li>
              <li>Diversos (Alvarás e outros feitos)</li>
              <li>Inventários</li>
              <li>Arrolamentos, Sucessões, Testamentos e Adoção de Maior</li>
              <li>Precatórias</li>
            </ul>
          </div>

          {/* FAZENDA PÚBLICA */}
          <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold">
              1ª a 5ª Varas da Fazenda Pública – Sistema PROJUDI
            </h3>

            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Mandados de Segurança</li>
              <li>Procedimentos Sumários</li>
              <li>Procedimentos Ordinários</li>
              <li>Medidas Cautelares</li>
              <li>Ação Popular</li>
              <li>Ação Civil Pública</li>
              <li>Habeas Data</li>
              <li>Desapropriação</li>
              <li>Possessórias</li>
              <li>Execução</li>
              <li>Busca e Apreensão (Alienação Fiduciária)</li>
              <li>Usucapião</li>
              <li>Consignação em Pagamento</li>
              <li>Diversos (Alvarás e feitos não especificados)</li>
            </ul>
          </div>

          {/* DEMAIS COMPETÊNCIAS */}
          <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold">Demais Competências</h3>

            <ul className="space-y-2 list-disc list-inside">
              <li>
                1ª e 2ª Varas de Falências, Concordatas e Recuperação Judicial e
                Extrajudicial
              </li>
              <li>
                1ª e 2ª Varas de Execuções Fiscais do Município de Curitiba
              </li>
              <li>1ª e 2ª Varas de Execuções Fiscais do Estado do Paraná</li>
              <li>
                Varas Criminais, Delitos de Trânsito, Infrações contra Criança e
                Idoso, Tribunal do Júri e Juizado de Violência Doméstica
              </li>
              <li>Juizado Especial Criminal</li>
              <li>Juizado Especial da Fazenda Pública</li>
              <li>Juizado Especial Cível</li>
            </ul>
          </div>

          {/* TABELIONATOS */}
          <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-bold">
              Escrituras – Tabelionatos de Notas
            </h3>

            <p>Do 8º ao 14º Tabelionatos de Notas da Sede e Distritais:</p>

            <div className="grid md:grid-cols-3 gap-2 text-sm">
              <span>Barreirinha</span>
              <span>Boqueirão</span>
              <span>Bacacheri</span>
              <span>Uberaba</span>
              <span>Santa Quitéria</span>
              <span>Campo Comprido</span>
              <span>Santa Felicidade</span>
              <span>Tatuquara</span>
              <span>Portão</span>
            </div>
          </div>
          <VoltarBtn />
        </div>
      </div>
    </div>
  );
}

export default CompetenciaPage;
