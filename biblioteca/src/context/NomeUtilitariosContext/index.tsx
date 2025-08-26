import { createContext, useState, type Dispatch, type SetStateAction } from "react";


type NomeUtilitariosContextType = {
  quantidade: number;
  setQuantidade: Dispatch<SetStateAction<number>>;
  descricao: string;
  setDescricao: Dispatch<SetStateAction<string>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const NomeUtilitariosContext = createContext<NomeUtilitariosContextType>({
  quantidade: 0,
  setQuantidade: () => {},
  descricao: "",
  setDescricao: () => {},
});

type Props = {
    children: React.ReactNode;
}


export function NomeUtilitariosProvider({ children }: Props) {
  const [quantidade, setQuantidade] = useState(0); 
  const [descricao, setDescricao] = useState("");

  return (
    <NomeUtilitariosContext.Provider value={{ quantidade, setQuantidade, descricao, setDescricao }}>
      {children}
    </NomeUtilitariosContext.Provider>
  );
}
