import { createContext, ReactNode, useContext, useState } from "react";
import { MyUseQuery } from "./MyUseQuery";

interface RequestProps {
  name: string;
  request: string;
}

interface ImagesProps {
  id: number;
  img_src: string;
  earth_date: string;
}

interface RecentViewsProps {
  id: number;
  rover_name: string;
  search_date: string;
  date: string;
  to: string;
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
  recents: RecentViewsProps[];
  setRequest: (request: RequestProps) => void;
  data: ImagesProps[];
  setRecents: (recents: RecentViewsProps[]) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextData>({} as ContextData);

export function ContextProvider({ children }: ContextProviderProps) {
  const [recents, setRecents] = useState<RecentViewsProps[]>([]);
  const [request, setRequest] = useState<RequestProps>({
    name: "",
    request: "",
  });

  const { data } = MyUseQuery<ImagesProps[]>(request.name, request.request);

  const hovers: HoverProps[] = [
    {
      id: 0,
      name: "spirit",
      description:
        "Spirit encontrou evidências de que Marte já foi muito mais úmido do que é hoje e ajudou os cientistas a entender melhor o ventomarciano.",
      to: "/rovers/spirit",
      launch: "10 de jun de 2003",
      mission: "completa",
    },
    {
      id: 1,
      name: "Opportunity",
      description:
        "O Opportunity foi o segundo dos dois rovers lançados em 2003 a pousar em Marte e começar a atravessar o Planeta Vermelho em busca de sinais de água antiga.",
      to: "/rovers/opportunity",
      launch: "7 de jul de 2003",
      mission: "completa",
    },
    {
      id: 2,
      name: "Curiosity",
      description:
        "A missão do Curiosity é determinar se o Planeta Vermelho já foi habitável à vida microbiana..",
      to: "/rovers/curiosity",
      launch: "26 de nov de 2011",
      mission: "em andamento",
    },
  ];

  return (
    <Context.Provider value={{ hovers, recents, setRequest, data, setRecents }}>
      {children}
    </Context.Provider>
  );
}

export function MyUseContext() {
  const context = useContext(Context);
  return context;
}
