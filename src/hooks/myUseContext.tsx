import { createContext, ReactNode, useContext, useState } from "react";

interface RequestProps {
  name: string;
  request: string;
}

interface ImagesProps {
  id: number;
  img_src: string;
  earth_date: string;
}

interface HoverProps {
  id: number;
  name: string;
  description: string;
  launch: string;
  mission: string;
  to: string;
}

interface ContextData {
  hovers: HoverProps[];

  setRequest: (request: RequestProps) => void;

  mostRecent: string;
  setMostRecent: (mostRecent: string) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [request, setRequest] = useState<RequestProps>({
    name: "",
    request: "",
  });
  const [mostRecent, setMostRecent] = useState<string>("");

  const hovers: HoverProps[] = [
    {
      id: 0,
      name: "spirit",
      description:
        "Spirit encontrou evidências de que Marte já foi muito mais úmido do que é hoje e ajudou os cientistas a entender melhor o vento marciano.",
      to: "rovers/spirit",
      launch: "10 de jun de 2003",
      mission: "completa",
    },
    {
      id: 1,
      name: "Opportunity",
      description:
        "O Opportunity foi o segundo rover a pousar em Marte. Ao longo dos anos ele atravessou o planeta vermelho em busca de sinais de água.",
      to: "rovers/opportunity",
      launch: "7 de jul de 2003",
      mission: "completa",
    },
    {
      id: 2,
      name: "Curiosity",
      description:
        "A missão do Curiosity é determinar se o planeta vermelho já foi habitado por vida microbiana..",
      to: "rovers/curiosity",
      launch: "26 de nov de 2011",
      mission: "em andamento",
    },

    {
      id: 3,
      name: "Perseverance",
      description:
        "O Perseverance procura sinais de vida microbiana, o que fará NASA avançar com a exploração da possivel existencia de vida em Marte.",
      to: "rovers/perseverance",
      launch: "26 de nov de 2011",
      mission: "em andamento",
    },
  ];

  return (
    <Context.Provider
      value={{
        hovers,
        setRequest,
        mostRecent,
        setMostRecent,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function MyUseContext() {
  const context = useContext(Context);
  return context;
}
