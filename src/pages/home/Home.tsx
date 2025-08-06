import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen max-h-[696px] bg-[url(assets/images/hero.jpg)] bg-cover bg-no-repeat">
      <Container className="flex h-full flex-col items-start justify-center">
        <p className="text-inputs mb-1 text-5xl font-semibold">
          Campers of your dreams
        </p>
        <p className="text-inputs mb-10 text-2xl">
          You can find everything you want in our catalog
        </p>
        <Button onClick={() => navigate('/catalog')}>View Now</Button>
      </Container>
    </div>
  );
};
