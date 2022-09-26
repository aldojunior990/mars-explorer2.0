import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ImagesContent } from "../../components/imagesContent";
import { Logo } from "../../components/logo";
import { Pagination } from "../../components/pagination";
import { Container, Image, Search } from "../../styles/rovers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface HoverPageProps {
  id: string;
  title: string;
  api_url: string;
}
interface ImagesProps {
  id: number;
  img_src: string;
  earth_date: string;
}

interface GetProps {
  photos: ImagesProps[];
}

const LIMIT: number = 25;

export default function Hovers({ hover }) {
  const [value, setValue] = useState<string>();
  const [data, setData] = useState<ImagesProps[]>([]);
  const [total, setTotal] = useState<ImagesProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  async function handleNewSearch(event: FormEvent) {
    event.preventDefault();

    await axios
      .get<GetProps>(
        `${hover.api_url}${value}&api_key=r9J5nknzQPaDpoja4sfglpb0SvITf9KlPPYgRQv4`
      )
      .then((Response) => {
        setTotal(Response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
    setOffset(0);
  }

  useEffect(() => {
    if (total.length === 0) {
      toast.error("Sem imagens nesta data");
    }
  }, [total]);

  useEffect(() => {
    var arr = total.slice(offset, offset + LIMIT);
    setData(arr);
  }, [total, offset]);

  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Head>
        <title>{hover.title}</title>
      </Head>
      <Container>
        <ToastContainer className="toast" />
        <header>
          <Logo />
          <Link href="/">
            <a>voltar</a>
          </Link>
        </header>
        <Image
          src="/rover.jpg"
          alt="Imagem de um rover explorando a superficie de Marte"
        />
        <h2>Rover {hover.title}</h2>

        <Search>
          <form onSubmit={handleNewSearch}>
            <input
              type="date"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <input type="submit" value="buscar" />
          </form>
          {total?.length > 0 && (
            <Pagination
              limit={LIMIT}
              total={total.length}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </Search>
        {total?.length > 0 && (
          <>
            <ImagesContent imgs={data} />

            <button className="btn_top" onClick={() => handleToTop()}>
              voltar ao topo
            </button>
          </>
        )}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const HoverPages: HoverPageProps[] = [
    {
      id: "spirit",
      title: "Spirit",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=",
    },
    {
      id: "opportunity",
      title: "Opportunity",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=",
    },
    {
      id: "curiosity",
      title: "Curiosity",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=",
    },
  ];

  const paths = HoverPages.map((h) => {
    return { params: { slug: h.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const HoverPages: HoverPageProps[] = [
    {
      id: "spirit",
      title: "Spirit",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=",
    },
    {
      id: "opportunity",
      title: "Opportunity",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=",
    },
    {
      id: "curiosity",
      title: "Curiosity",
      api_url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=",
    },
  ];

  const data: HoverPageProps = HoverPages.find((h) => h.id === slug);

  return {
    props: {
      hover: data,
    },
  };
};
