import ActionSection from "./components/ActionSection";
import LogoSection from "./components/LogoSection";
import MainSide from "./components/MainSide";
import Nav from "./components/Nav";
import NavIcon from "./components/NavIcon";
import ScreenBase from "./components/ScreenBase";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <ScreenBase>
      <SideBar>
        <LogoSection />
        <Nav>
          <NavIcon icon="package" onClick={() => { console.log('button 1') }} />
          <NavIcon icon="package" onClick={() => { console.log('button 2') }} />
          <NavIcon icon="package" onClick={() => { console.log('button 3') }} />
          <NavIcon icon="package" onClick={() => { console.log('button 4') }} />
        </Nav>
      </SideBar>
      <MainSide>
        <ActionSection icon='stocks' heading='Cadastro de Materiais'>
          <button>+</button>
        </ActionSection>
      </MainSide>
    </ScreenBase>
  )
}

export default App;
