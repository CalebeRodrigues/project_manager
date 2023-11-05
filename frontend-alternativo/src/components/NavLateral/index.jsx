import * as Styles from './styles';

import { NavPrincipal } from './NavPrincipal';
import { NavProject } from './NavProject';
import { useProject } from '../../context/Project/useProject';

export const NavLateral = () => {
  const project = useProject();

  return <Styles.Container className="w-100">{!project.idProj ? <NavPrincipal /> : <NavProject />}</Styles.Container>;
};
