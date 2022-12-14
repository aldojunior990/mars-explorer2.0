import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ImagesContent } from "../../components/imagesContent";
import { Logo } from "../../components/logo";
import { Pagination } from "../../components/pagination";
import {
  Container,
  Search,
  Image,
  RoverDescription,
} from "../../styles/rovers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPrismicClient } from "../../services/prismic";

interface RoverPageProps {
  id: string;
  title: string;
  api_url: string;
  description: string;
  start: string;
  end: string;
  link: string;
  is_active: string;
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

export default function Rovers({ Rover, api }) {
  const [value, setValue] = useState<string>("");
  const [images, setimages] = useState<ImagesProps[]>([]);
  const [total, setTotal] = useState<ImagesProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const [firstRequest, setFirstRequest] = useState<number>(0);

  async function handleNewSearch(event: FormEvent) {
    event.preventDefault();

    await axios
      .get<GetProps>(`${Rover.api_url}${value}&api_key=${api}`)
      .then((Response) => {
        setTotal(Response.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
    setOffset(0);
    setFirstRequest(1);
  }

  useEffect(() => {
    if (firstRequest !== 0) {
      if (total.length === 0) {
        toast.error("Sem imagens nesta data");
      }
    }
  }, [total]);

  useEffect(() => {
    var arr = total.slice(offset, offset + LIMIT);
    setimages(arr);
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
        <title>{Rover.title}</title>
      </Head>
      <Container>
        <ToastContainer />
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

        <h2>Rover {Rover.title}</h2>

        <RoverDescription>
          <section>
            <p>
              Inicio da miss??o: <b>{Rover.start}</b>
            </p>
            {Rover.is_active === "true" && (
              <p>
                Atualmente: <b>{Rover.end}</b>
              </p>
            )}
            {Rover.is_active === "false" && (
              <p>
                Fim: <b>{Rover.end}</b>
              </p>
            )}
          </section>
        </RoverDescription>

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
            <ImagesContent imgs={images} />

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
  const prismic = getPrismicClient();

  const rovers = await prismic.get();

  const paths = rovers.results.map((r) => {
    return {
      params: {
        slug: r.uid,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api: string = process.env.API_KEY;

  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>("rover", String(slug), {});

  const Rover = {
    id: response.uid,
    api_url: response.data.api_url,
    description: response.data.description,
    start: response.data.start,
    end: response.data.end,
    link: response.data.link,
    title: response.data.title,
    is_active: response.data.is_active,
  };

  return {
    props: {
      Rover,
      api,
    },
  };
};
