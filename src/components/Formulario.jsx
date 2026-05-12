import { useState } from "react";

function Formulario() {
  const [estrangeiro, setEstrangeiro] = useState(false);

  return (
    <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 border-b border-green-400 pb-2">
        Dados do Solicitante
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Email do Solicitante</label>
          <input
            type="email"
            placeholder="SeuEmail@gmail.com"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* RADIO BRASILEIRO / ESTRANGEIRO */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Tipo de Documento</label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="nacionalidade"
                checked={!estrangeiro}
                onChange={() => setEstrangeiro(false)}
              />
              Brasileiro
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="nacionalidade"
                checked={estrangeiro}
                onChange={() => setEstrangeiro(true)}
              />
              Estrangeiro
            </label>
          </div>
        </div>

        {/* CPF / CNPJ */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">
            {estrangeiro ? "Documento Estrangeiro" : "CPF/CNPJ"}
          </label>
          <input
            type="text"
            className={`border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 `}
          />
        </div>

        {/* DOCUMENTO ESTRANGEIRO */}
        {estrangeiro && (
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Documento Estrangeiro</label>
            <select className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="CRNM">
                Carteira de Registro Nacional Migratório
              </option>
              <option value="PSR">Protocolo de Sol Residência</option>
              <option value="passaporte">Passaporte</option>
              <option value="DPRNM">
                Doc Provisório de Regis Nacional Migratório
              </option>
              <option value="PDR">Protocolo de Refúgio</option>
            </select>
          </div>
        )}

        {/* TIPO DE CERTIDÃO */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Tipo de Certidão</label>
          <select className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="">Selecione</option>
            <option value="1">Certidão 1</option>
            <option value="2">Certidão 2</option>
            <option value="3">Certidão 3</option>
            <option value="4">Certidão 4</option>
            <option value="5">Certidão 5</option>
          </select>
        </div>

        {/* NOME */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Nome do Solicitante</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* TELEFONE */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Telefone</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* CEP */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">CEP</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* RUA */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-1">Nome da Rua e Número</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* CIDADE */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Cidade</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* ESTADO */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Estado</label>
          <input
            type="text"
            className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 border-b border-green-400 p-4">
        Dados da certidao
      </h2>

      {/* DOCUMENTO ESTRANGEIRO */}
      {estrangeiro && (
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Documento Estrangeiro</label>
          <select className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400">
            <option value="CRNM">
              Carteira de Registro Nacional Migratório
            </option>
            <option value="PSR">Protocolo de Sol Residência</option>
            <option value="passaporte">Passaporte</option>
            <option value="DPRNM">
              Doc Provisório de Regis Nacional Migratório
            </option>
            <option value="PDR">Protocolo de Refúgio</option>
          </select>
        </div>
      )}

      {/* CPF / CNPJ */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">
          {estrangeiro ? "Documento estrangeiro" : "CPF/CNPJ"}
        </label>
        <input
          type="text"
          className={`border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400 `}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-1">Nome do Solicitado</label>
        <input
          type="text"
          className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-1">Nascimento</label>
        <input
          type="date"
          className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-1">
          Nome do Pai (preencher para pedido de certidão criminal)
        </label>
        <input
          type="text"
          className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold mb-1">
          Nome da Mãe (preencher para pedido de certidão criminal)
        </label>
        <input
          type="text"
          className="border border-green-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="border-2 border-green-400 p-2 rounded-lg text-center w-[100px] m-2">
        <button
          onClick={() => alert("Enviado")}
          className="flex items-center justify-center"
        >
          {" "}
          Finalizar
        </button>
      </div>
    </div>
  );
}

export default Formulario;
