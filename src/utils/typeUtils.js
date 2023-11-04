import Agua from '@img/agua';
import Fogo from '@img/fogo';
import Grama from '@img/planta';

export function getSvgComponentByType(type) {
  if (type === 'AGUA') return <Agua />;
  else if (type === 'FOGO') return <Fogo />;
  else if (type === 'PLANTA') return <Grama />;
}

export function getColorByType(type) {
  if (type === 'AGUA') return '#3B6388';
  else if (type === 'FOGO') return '#AD3F3F';
  else if (type === 'PLANTA') return '#3B8863';
}
