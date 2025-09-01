type props = {
  quantidade?: number;
  descricao?: string;
};

export const NomeUtilitarios = ({ quantidade, descricao }: props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-34 h-24 flex justify-center items-center !border-[4px] !border-white !rounded-3xl">
        <p className="!text-[40px] !font-black">{quantidade}</p>
      </div>
      <p className="!w-[138px] !py-1 bg-[#2F7ECB] !font-black text-center rounded-xl">
        {descricao}
      </p>
    </div>
  );
};
