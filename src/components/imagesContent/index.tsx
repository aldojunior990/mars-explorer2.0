import { Container, Image } from "./styles";

interface ImagesProps {
  id: number;
  img_src: string;
  earth_date: string;
}

interface ContentProps {
  imgs: ImagesProps[];
}

export function ImagesContent({ imgs }: ContentProps) {
  return (
    <Container>
      {imgs?.map((i) => {
        return (
          <Image
            key={i.id}
            src={i.img_src}
            alt={`Imagem do dia: ` + i.earth_date}
          />
        );
      })}
    </Container>
  );
}
