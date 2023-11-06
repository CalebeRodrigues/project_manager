import * as Styles from './style';

export const Etapa = () => {
  return (
    <div className="mt-4 container">
      <h1>Etapa</h1>
      <Styles.KanbanContainer>
        <Styles.KanBanItem>
          <h1>Por fazer</h1>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardYellow></Styles.CardYellow>
        </Styles.KanBanItem>
        <Styles.KanBanItem>
          <h1>Fazendo</h1>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardRed></Styles.CardRed>
          <Styles.CardRed></Styles.CardRed>
          <Styles.CardRed></Styles.CardRed>
        </Styles.KanBanItem>
        <Styles.KanBanItem>
          <h1>Por fazer</h1>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardYellow></Styles.CardYellow>
          <Styles.CardGreen></Styles.CardGreen>
          <Styles.CardRed></Styles.CardRed>
          <Styles.CardRed></Styles.CardRed>
        </Styles.KanBanItem>
      </Styles.KanbanContainer>
    </div>
  );
};
