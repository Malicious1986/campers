import { NavLink } from "react-router";
import { Container } from "../Container";

export const Header = () => {
  return (
    <header>
      <Container className="bg-inputs border-b-1 border-b-badges">
        <div className="flex py-6">
          <p className="font-bold">
            <span className="text-main">Travel</span>
            <span className="text-text">Trucks</span>
          </p>
          <nav className="mx-auto flex gap-8 font-medium">
            <ul><NavLink to='/' className={({isActive}) => isActive ? 'text-button-hover' : ''}>Home</NavLink></ul>
            <ul><NavLink to='/catalog' className={({isActive}) => isActive ? 'text-button-hover' : ''}>Catalog</NavLink></ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
