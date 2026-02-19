import imagem1 from '../../../assets/imagem-1.jpeg';
import imagem2 from '../../../assets/imagem-2.jpg';
import imagem3 from '../../../assets/imagem-3.jpg';
import imagem4 from '../../../assets/imagem-4.jpeg';
import imagem5 from '../../../assets/imagem-5.jpeg';

export function realStatesLoader({ request }) {
  const url = new URL(request.url);
  const estado = url.searchParams.get("estado");
  const cidade = url.searchParams.get("cidade");
  const realStates = fetchRealStates(estado, cidade);
  return { realStates: realStates };
}

function fetchRealStates (estado, cidade) {
  if (estado && cidade) {
    return fetchRealStateByByState(estado, cidade);
  }

  return [
   {
     id: 1,
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 2, 
     image: imagem2,
     minIncome: 'R$ 1.000,00', 
     name: 'Bosque das Flores',
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
     ]
   },
   {
     id: 3, 
     image: imagem3,
     minIncome: 'R$ 1.200,00',
     name: 'Ipanema Beach', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 4, 
     image: imagem4,
     minIncome: 'R$ 3.200,00', 
     name: 'Ponto de Vista', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 5, 
     image: imagem5,
     minIncome: 'R$ 1.500,00',
     name: 'Cidade Jardim',
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 6, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 7, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
    acronymState: 'CE',
     state: 'Ceará',
     city: 'Eusebio',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 8, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 9, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Fortaleza',
      differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 10, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Eusebio',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   },
   {
     id: 11, 
     image: imagem1,
     minIncome: 'R$ 3.200,00', 
     name: 'Forte Alencar', 
     acronymState: 'CE',
     state: 'Ceará',
     city: 'Eusebio',
     differentials: [
       { title: '2 quartos', icon: 'bed' },
       { title: '1 banheiro', icon: 'bath' },
       { title: '1 vaga', icon: 'car' }
     ]
   }
 ]
}

function fetchRealStateByByState(state, city) {
  return fetchRealStates().filter(realState => realState.state === state && realState.city === city);
}