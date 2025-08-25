export default function Dashboard() {
  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full flex justify-around items-center">
        <section className="flex w-1/2 justify-end">
          <img src="/home.png" alt="" className="w-5/6 flex" />
        </section>

        <section className="flex w-1/2 flex-col items-center gap-2">
          <div className="w-full flex flex-col items-center gap-2">
            <p className="!text-[101px] !font-black">BIBLIOTECA</p>
            <p className="!text-[22px] text-left ">
              Um espaço onde o conhecimento encontra a prática <br />
              do desenvolvimento
            </p>
          </div>

          <div className="w-full flex justify-center gap-4">
            <div className="w-32 h-32 flex justify-center items-center !border-[3px] !border-white !rounded-xl">
              <p className="!text-[40px] !font-black">100</p>
            </div>
            <div className="w-32 h-32 flex justify-center items-center !border-[3px] !border-white !rounded-xl">
              <p className="!text-[40px] !font-black">100</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
