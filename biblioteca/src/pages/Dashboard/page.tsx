import { NomeUtilitarios } from "../../components/NomeUtilitarios";

export default function Dashboard() {
  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full flex justify-between items-center gap-10">
        <section className="flex w-1/2 justify-end">
          <img src="/home.png" alt="" className="w-7/8 flex" />
        </section>

        <section className="flex w-1/2 flex-col items-center gap-6">
          <div className="w-full flex flex-col items-start">
            <h1 className="!text-[68px] !font-black ">BIBLIOTECA</h1>
            <p className="!text-[18px] text-left ">
              Um espaço onde o conhecimento encontra a prática <br />
              do desenvolvimento
            </p>
          </div>

          <div className="w-full flex justify-start gap-10">
            <NomeUtilitarios quantidade={120} descricao="EMPRESTADOS" />
            <NomeUtilitarios quantidade={50} descricao="DISPONÍVEIS" />
          </div>
        </section>
      </div>
    </div>
  );
}
