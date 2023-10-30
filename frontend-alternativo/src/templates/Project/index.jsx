import { EtapaCollapse } from '../../components/EtapaCollapse';
import * as Styles from './style';

export const Project = () => {
  return (
    <Styles.Container className="container p-3">
      <div className="row">
        <EtapaCollapse
          options={{
            id: 1,
            nome: 'Inicio do desenvolvimento',
          }}
        />
        <EtapaCollapse
          options={{
            id: 2,
            nome: 'Inicio do desenvolvimento',
          }}
        />
        <EtapaCollapse
          options={{
            id: 3,
            nome: 'Inicio do desenvolvimento',
          }}
        />
      </div>
    </Styles.Container>
  );
};
