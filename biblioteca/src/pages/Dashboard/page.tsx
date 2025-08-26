import { NomeUtilitarios } from "../../components/NomeUtilitarios";

export default function Dashboard() {
  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full flex justify-around items-center">
        <section className="flex w-1/2 justify-end">
          <img src="/home.png" alt="" className="w-5/6 flex" />
        </section>

        <section className="flex w-1/2 flex-col items-center gap-6">
          <div className="w-full flex flex-col items-center">
            <h1 className="!text-[101px] !font-black">BIBLIOTECA</h1>
            <p className="!text-[22px] text-left ">
              Um espaço onde o conhecimento encontra a prática <br />
              do desenvolvimento
            </p>
          </div>

          <div className="w-full flex justify-center gap-10">
            <NomeUtilitarios quantidade={120} descricao="EMPRESTADOS" />
            <NomeUtilitarios quantidade={50} descricao="DISPONÍVEIS" />
          </div>
        </section>
      </div>
    </div>
  );
}
