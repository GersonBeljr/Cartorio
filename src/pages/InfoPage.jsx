import TituloDistr from "../components/TituloDistr";
import Alerta from "../components/Alerta";
import VoltarBtn from "../components/VoltarBtn";

function InfoPage() {
  return (
    <div className="bg-green-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-green-200 rounded-2xl shadow-2xl w-full max-w-5xl">
        {/* Título */}
        <div className="border-b border-green-400">
          <TituloDistr />
        </div>

        <div className="p-8 space-y-10">
          {/* ALERTA */}
          <Alerta />

          {/* INFORMAÇÕES */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-center border-b-2 border-green-400 pb-2">
              Informações
            </h1>

            <div className="bg-green-100/50 rounded-xl p-6 shadow-inner space-y-4 text-justify leading-relaxed text-gray-800">
              <p>
                De conformidade com o Código de Organização e Divisão
                Judiciárias do Estado do Paraná, Lei nº 7297/80, e o Código de
                Normas da Corregedoria Geral da Justiça, compete ao 1º Ofício as
                seguintes atribuições:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  Distribuidor, Contador e Partidor da 1ª a 8ª Varas da Família
                  e Fóruns Descentralizados – Sistema PROJUDI.
                </li>
                <li>
                  Distribuidor, Contador e Partidor da 1ª a 5ª Varas da Fazenda
                  Pública – Sistema PROJUDI.
                </li>
                <li>
                  Distribuidor e Contador das Varas de Falências e Recuperações.
                </li>
                <li>
                  Distribuidor e Contador das Varas de Execuções Fiscais do
                  Município e do Estado.
                </li>
                <li>
                  Distribuidor e Contador das Varas Criminais, Tribunal do Júri
                  e Juizado de Violência Doméstica.
                </li>
                <li>
                  Autorização para viagens – Vara de Infrações Penais contra a
                  Criança – Sistema PROJUDI.
                </li>
                <li>Distribuidor dos Juizados Especiais.</li>
                <li>
                  Distribuidor de Escrituras dos Tabelionatos da Sede e
                  Distritais.
                </li>
              </ul>

              <div className="pt-4 border-t border-green-400 space-y-2">
                <p className="font-bold">
                  Compete ao 1º Ofício Distribuidor as Precatórias Criminais:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Vara de Delitos de Trânsito</li>
                  <li>Vara de Crimes contra Criança, Adolescente e Idoso</li>
                  <li>Juizado de Violência Doméstica</li>
                  <li>Juizado Especial Criminal</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-green-400 space-y-2">
                <p className="font-bold">
                  Informações: 1º Ofício Distribuidor – Fórum Criminal
                </p>
                <p>Tel.: (41) 3309-9205</p>
              </div>

              <div className="pt-4 border-t border-green-400">
                <p className="font-bold mb-2">
                  Distribuições de Cartas Precatórias das Varas de Família:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Taxa Judiciária (FUNJUS)</li>
                  <li>Procuração</li>
                  <li>Recolhimento das Custas de Distribuição</li>
                  <li>Justiça Gratuita</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              Tabela de Custas dos Distribuidores
            </h2>

            <table className="w-full border-2 border-green-400 text-sm">
              <thead>
                <tr className="bg-green-200 border-b-2 border-green-400">
                  <th className="border border-green-400 p-3 text-left w-2/3">
                    Descrição
                  </th>
                  <th className="border border-green-400 p-3 text-left">
                    VRCjud
                  </th>
                  <th className="border border-green-400 p-3 text-left">R$</th>
                  <th className="border border-green-400 p-3 text-left">CPC</th>
                </tr>
              </thead>

              <tbody className="bg-green-100">
                <tr>
                  <td className="border border-green-400 p-3">
                    I. Distribuição e/ou registro para o foro judicial e
                    protocolo judiciário.
                  </td>
                  <td className="border border-green-400 p-3">90,00</td>
                  <td className="border border-green-400 p-3">R$ 27,42</td>
                  <td className="border border-green-400 p-3"></td>
                </tr>

                <tr>
                  <td className="border border-green-400 p-3">
                    II. Averbação à margem da Distribuição e/ou registro.
                  </td>
                  <td className="border border-green-400 p-3">16,00</td>
                  <td className="border border-green-400 p-3">R$ 4,87</td>
                  <td className="border border-green-400 p-3"></td>
                </tr>

                <tr>
                  <td className="border border-green-400 p-3">
                    III. Baixa ou retificação de Distribuição e/ou registro.
                  </td>
                  <td className="border border-green-400 p-3">26,00</td>
                  <td className="border border-green-400 p-3">R$ 7,92</td>
                  <td className="border border-green-400 p-3"></td>
                </tr>

                <tr>
                  <td className="border border-green-400 p-3">
                    IV. Busca para o foro judicial:
                    <br />
                    a) Informação verbal
                    <br />
                    b) Por 10 anos que exceder os primeiros 20 anos
                    <br />
                    c) Reiteração ou repetição de petição inicial
                  </td>
                  <td className="border border-green-400 p-3">
                    16,00
                    <br />
                    16,00
                    <br />
                    79,00
                  </td>
                  <td className="border border-green-400 p-3">
                    R$ 4,87
                    <br />
                    R$ 4,87
                    <br />
                    R$ 24,06
                  </td>
                  <td className="border border-green-400 p-3"></td>
                </tr>

                <tr>
                  <td className="border border-green-400 p-3">
                    V. Certidão para o foro judicial:
                    <br />
                    a) Incluída a busca até 20 anos
                    <br />
                    b) Por página que acrescer
                  </td>
                  <td className="border border-green-400 p-3">
                    141,00
                    <br />
                    8,00
                  </td>
                  <td className="border border-green-400 p-3">
                    R$ 42,95
                    <br />
                    R$ 2,43
                  </td>
                  <td className="border border-green-400 p-3">Vide Nota 4</td>
                </tr>
              </tbody>
            </table>

            {/* Notas */}
            <div className="mt-6 bg-green-100 border-2 border-green-400 rounded-lg p-4 text-sm space-y-2">
              <h3 className="font-bold">Notas:</h3>
              <p>
                1. As custas acima se referem a certidão por pessoa, não havendo
                acréscimo se solicitadas conjuntamente.
              </p>
              <p>
                2. Para atos praticados através de processamento de dados, as
                custas serão acrescidas de 10%.
              </p>
              <p>
                3. Em certidões criminais com antecedentes de réus, poderão ser
                cobradas custas ao final.
              </p>
              <p>4. Autorizada a cobrança pela Lei 8.329/86.</p>
            </div>
          </div>
          <VoltarBtn />
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
