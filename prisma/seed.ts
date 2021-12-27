import { Prisma, PrismaClient } from '@prisma/client';

console.log('Top of script');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const main = async () => {
  console.log('Start seeding...');

  const cityData = [
    {
      city: 'Abadia dos Dourados',
      state: 'Minas Gerais',
    },
    {
      city: 'Abaeté',
      state: 'Minas Gerais',
    },
    {
      city: 'Abre Campo',
      state: 'Minas Gerais',
    },
    {
      city: 'Acaiaca',
      state: 'Minas Gerais',
    },
    {
      city: 'Açucena',
      state: 'Minas Gerais',
    },
    {
      city: 'Água Boa',
      state: 'Minas Gerais',
    },
    {
      city: 'Água Comprida',
      state: 'Minas Gerais',
    },
    {
      city: 'Aguanil',
      state: 'Minas Gerais',
    },
    {
      city: 'Águas Formosas',
      state: 'Minas Gerais',
    },
    {
      city: 'Águas Vermelhas',
      state: 'Minas Gerais',
    },
    {
      city: 'Aimorés',
      state: 'Minas Gerais',
    },
    {
      city: 'Aiuruoca',
      state: 'Minas Gerais',
    },
    {
      city: 'Alagoa',
      state: 'Minas Gerais',
    },
    {
      city: 'Albertina',
      state: 'Minas Gerais',
    },
    {
      city: 'Além Paraíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Alfenas',
      state: 'Minas Gerais',
    },
    {
      city: 'Alfredo Vasconcelos',
      state: 'Minas Gerais',
    },
    {
      city: 'Almenara',
      state: 'Minas Gerais',
    },
    {
      city: 'Alpercata',
      state: 'Minas Gerais',
    },
    {
      city: 'Alpinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Alterosa',
      state: 'Minas Gerais',
    },
    {
      city: 'Alto Caparaó',
      state: 'Minas Gerais',
    },
    {
      city: 'Alto Jequitibá',
      state: 'Minas Gerais',
    },
    {
      city: 'Alto Rio Doce',
      state: 'Minas Gerais',
    },
    {
      city: 'Alvarenga',
      state: 'Minas Gerais',
    },
    {
      city: 'Alvinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Alvorada de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Amparo do Serra',
      state: 'Minas Gerais',
    },
    {
      city: 'Andradas',
      state: 'Minas Gerais',
    },
    {
      city: 'Andrelândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Angelândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Antônio Carlos',
      state: 'Minas Gerais',
    },
    {
      city: 'Antônio Dias',
      state: 'Minas Gerais',
    },
    {
      city: 'Antônio Prado de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Araçaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Aracitaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Araçuaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Araguari',
      state: 'Minas Gerais',
    },
    {
      city: 'Arantina',
      state: 'Minas Gerais',
    },
    {
      city: 'Araponga',
      state: 'Minas Gerais',
    },
    {
      city: 'Araporã',
      state: 'Minas Gerais',
    },
    {
      city: 'Arapuá',
      state: 'Minas Gerais',
    },
    {
      city: 'Araújos',
      state: 'Minas Gerais',
    },
    {
      city: 'Araxá',
      state: 'Minas Gerais',
    },
    {
      city: 'Arceburgo',
      state: 'Minas Gerais',
    },
    {
      city: 'Arcos',
      state: 'Minas Gerais',
    },
    {
      city: 'Areado',
      state: 'Minas Gerais',
    },
    {
      city: 'Argirita',
      state: 'Minas Gerais',
    },
    {
      city: 'Aricanduva',
      state: 'Minas Gerais',
    },
    {
      city: 'Arinos',
      state: 'Minas Gerais',
    },
    {
      city: 'Astolfo Dutra',
      state: 'Minas Gerais',
    },
    {
      city: 'Ataléia',
      state: 'Minas Gerais',
    },
    {
      city: 'Augusto de Lima',
      state: 'Minas Gerais',
    },
    {
      city: 'Baependi',
      state: 'Minas Gerais',
    },
    {
      city: 'Baldim',
      state: 'Minas Gerais',
    },
    {
      city: 'Bambuí',
      state: 'Minas Gerais',
    },
    {
      city: 'Bandeira',
      state: 'Minas Gerais',
    },
    {
      city: 'Bandeira do Sul',
      state: 'Minas Gerais',
    },
    {
      city: 'Barão de Cocais',
      state: 'Minas Gerais',
    },
    {
      city: 'Barão de Monte Alto',
      state: 'Minas Gerais',
    },
    {
      city: 'Barbacena',
      state: 'Minas Gerais',
    },
    {
      city: 'Barra Longa',
      state: 'Minas Gerais',
    },
    {
      city: 'Barroso',
      state: 'Minas Gerais',
    },
    {
      city: 'Bela Vista de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Belmiro Braga',
      state: 'Minas Gerais',
    },
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Belo Oriente',
      state: 'Minas Gerais',
    },
    {
      city: 'Belo Vale',
      state: 'Minas Gerais',
    },
    {
      city: 'Berilo',
      state: 'Minas Gerais',
    },
    {
      city: 'Berizal',
      state: 'Minas Gerais',
    },
    {
      city: 'Bertópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Betim',
      state: 'Minas Gerais',
    },
    {
      city: 'Bias Fortes',
      state: 'Minas Gerais',
    },
    {
      city: 'Bicas',
      state: 'Minas Gerais',
    },
    {
      city: 'Biquinhas',
      state: 'Minas Gerais',
    },
    {
      city: 'Boa Esperança',
      state: 'Minas Gerais',
    },
    {
      city: 'Bocaina de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Bocaiúva',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Despacho',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Jardim de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Jesus da Penha',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Jesus do Amparo',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Jesus do Galho',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Repouso',
      state: 'Minas Gerais',
    },
    {
      city: 'Bom Sucesso',
      state: 'Minas Gerais',
    },
    {
      city: 'Bonfim',
      state: 'Minas Gerais',
    },
    {
      city: 'Bonfinópolis de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Bonito de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Borda da Mata',
      state: 'Minas Gerais',
    },
    {
      city: 'Botelhos',
      state: 'Minas Gerais',
    },
    {
      city: 'Botumirim',
      state: 'Minas Gerais',
    },
    {
      city: 'Brás Pires',
      state: 'Minas Gerais',
    },
    {
      city: 'Brasilândia de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Brasília de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Brasópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Braúnas',
      state: 'Minas Gerais',
    },
    {
      city: 'Brumadinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Bueno Brandão',
      state: 'Minas Gerais',
    },
    {
      city: 'Buenópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Bugre',
      state: 'Minas Gerais',
    },
    {
      city: 'Buritis',
      state: 'Minas Gerais',
    },
    {
      city: 'Buritizeiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Cabeceira Grande',
      state: 'Minas Gerais',
    },
    {
      city: 'Cabo Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Cachoeira da Prata',
      state: 'Minas Gerais',
    },
    {
      city: 'Cachoeira de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Cachoeira de Pajeú',
      state: 'Minas Gerais',
    },
    {
      city: 'Cachoeira Dourada',
      state: 'Minas Gerais',
    },
    {
      city: 'Caetanópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Caeté',
      state: 'Minas Gerais',
    },
    {
      city: 'Caiana',
      state: 'Minas Gerais',
    },
    {
      city: 'Cajuri',
      state: 'Minas Gerais',
    },
    {
      city: 'Caldas',
      state: 'Minas Gerais',
    },
    {
      city: 'Camacho',
      state: 'Minas Gerais',
    },
    {
      city: 'Camanducaia',
      state: 'Minas Gerais',
    },
    {
      city: 'Cambuí',
      state: 'Minas Gerais',
    },
    {
      city: 'Cambuquira',
      state: 'Minas Gerais',
    },
    {
      city: 'Campanário',
      state: 'Minas Gerais',
    },
    {
      city: 'Campanha',
      state: 'Minas Gerais',
    },
    {
      city: 'Campestre',
      state: 'Minas Gerais',
    },
    {
      city: 'Campina Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Campo Azul',
      state: 'Minas Gerais',
    },
    {
      city: 'Campo Belo',
      state: 'Minas Gerais',
    },
    {
      city: 'Campo do Meio',
      state: 'Minas Gerais',
    },
    {
      city: 'Campo Florido',
      state: 'Minas Gerais',
    },
    {
      city: 'Campos Altos',
      state: 'Minas Gerais',
    },
    {
      city: 'Campos Gerais',
      state: 'Minas Gerais',
    },
    {
      city: 'Cana Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Canaã',
      state: 'Minas Gerais',
    },
    {
      city: 'Canápolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Candeias',
      state: 'Minas Gerais',
    },
    {
      city: 'Cantagalo',
      state: 'Minas Gerais',
    },
    {
      city: 'Caparaó',
      state: 'Minas Gerais',
    },
    {
      city: 'Capela Nova',
      state: 'Minas Gerais',
    },
    {
      city: 'Capelinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Capetinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Capim Branco',
      state: 'Minas Gerais',
    },
    {
      city: 'Capinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Capitão Andrade',
      state: 'Minas Gerais',
    },
    {
      city: 'Capitão Enéas',
      state: 'Minas Gerais',
    },
    {
      city: 'Capitólio',
      state: 'Minas Gerais',
    },
    {
      city: 'Caputira',
      state: 'Minas Gerais',
    },
    {
      city: 'Caraí',
      state: 'Minas Gerais',
    },
    {
      city: 'Caranaíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Carandaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Carangola',
      state: 'Minas Gerais',
    },
    {
      city: 'Caratinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Carbonita',
      state: 'Minas Gerais',
    },
    {
      city: 'Careaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Carlos Chagas',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmésia',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo da Cachoeira',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo da Mata',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo do Cajuru',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo do Paranaíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmo do Rio Claro',
      state: 'Minas Gerais',
    },
    {
      city: 'Carmópolis de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Carneirinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Carrancas',
      state: 'Minas Gerais',
    },
    {
      city: 'Carvalhópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Carvalhos',
      state: 'Minas Gerais',
    },
    {
      city: 'Casa Grande',
      state: 'Minas Gerais',
    },
    {
      city: 'Cascalho Rico',
      state: 'Minas Gerais',
    },
    {
      city: 'Cássia',
      state: 'Minas Gerais',
    },
    {
      city: 'Cataguases',
      state: 'Minas Gerais',
    },
    {
      city: 'Catas Altas',
      state: 'Minas Gerais',
    },
    {
      city: 'Catas Altas da Noruega',
      state: 'Minas Gerais',
    },
    {
      city: 'Catuji',
      state: 'Minas Gerais',
    },
    {
      city: 'Catuti',
      state: 'Minas Gerais',
    },
    {
      city: 'Caxambu',
      state: 'Minas Gerais',
    },
    {
      city: 'Cedro do Abaeté',
      state: 'Minas Gerais',
    },
    {
      city: 'Central de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Centralina',
      state: 'Minas Gerais',
    },
    {
      city: 'Chácara',
      state: 'Minas Gerais',
    },
    {
      city: 'Chalé',
      state: 'Minas Gerais',
    },
    {
      city: 'Chapada do Norte',
      state: 'Minas Gerais',
    },
    {
      city: 'Chapada Gaúcha',
      state: 'Minas Gerais',
    },
    {
      city: 'Chiador',
      state: 'Minas Gerais',
    },
    {
      city: 'Cipotânea',
      state: 'Minas Gerais',
    },
    {
      city: 'Claraval',
      state: 'Minas Gerais',
    },
    {
      city: 'Claro dos Poções',
      state: 'Minas Gerais',
    },
    {
      city: 'Cláudio',
      state: 'Minas Gerais',
    },
    {
      city: 'Coimbra',
      state: 'Minas Gerais',
    },
    {
      city: 'Coluna',
      state: 'Minas Gerais',
    },
    {
      city: 'Comendador Gomes',
      state: 'Minas Gerais',
    },
    {
      city: 'Comercinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição da Aparecida',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição da Barra de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição das Alagoas',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição das Pedras',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição de Ipanema',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição do Mato Dentro',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição do Pará',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição do Rio Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Conceição dos Ouros',
      state: 'Minas Gerais',
    },
    {
      city: 'Cônego Marinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Confins',
      state: 'Minas Gerais',
    },
    {
      city: 'Congonhal',
      state: 'Minas Gerais',
    },
    {
      city: 'Congonhas',
      state: 'Minas Gerais',
    },
    {
      city: 'Congonhas do Norte',
      state: 'Minas Gerais',
    },
    {
      city: 'Conquista',
      state: 'Minas Gerais',
    },
    {
      city: 'Conselheiro Lafaiete',
      state: 'Minas Gerais',
    },
    {
      city: 'Conselheiro Pena',
      state: 'Minas Gerais',
    },
    {
      city: 'Consolação',
      state: 'Minas Gerais',
    },
    {
      city: 'Contagem',
      state: 'Minas Gerais',
    },
    {
      city: 'Coqueiral',
      state: 'Minas Gerais',
    },
    {
      city: 'Coração de Jesus',
      state: 'Minas Gerais',
    },
    {
      city: 'Cordisburgo',
      state: 'Minas Gerais',
    },
    {
      city: 'Cordislândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Corinto',
      state: 'Minas Gerais',
    },
    {
      city: 'Coroaci',
      state: 'Minas Gerais',
    },
    {
      city: 'Coromandel',
      state: 'Minas Gerais',
    },
    {
      city: 'Coronel Fabriciano',
      state: 'Minas Gerais',
    },
    {
      city: 'Coronel Murta',
      state: 'Minas Gerais',
    },
    {
      city: 'Coronel Pacheco',
      state: 'Minas Gerais',
    },
    {
      city: 'Coronel Xavier Chaves',
      state: 'Minas Gerais',
    },
    {
      city: 'Córrego Danta',
      state: 'Minas Gerais',
    },
    {
      city: 'Córrego do Bom Jesus',
      state: 'Minas Gerais',
    },
    {
      city: 'Córrego Fundo',
      state: 'Minas Gerais',
    },
    {
      city: 'Córrego Novo',
      state: 'Minas Gerais',
    },
    {
      city: 'Couto de Magalhães de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Crisólita',
      state: 'Minas Gerais',
    },
    {
      city: 'Cristais',
      state: 'Minas Gerais',
    },
    {
      city: 'Cristália',
      state: 'Minas Gerais',
    },
    {
      city: 'Cristiano Otoni',
      state: 'Minas Gerais',
    },
    {
      city: 'Cristina',
      state: 'Minas Gerais',
    },
    {
      city: 'Crucilândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Cruzeiro da Fortaleza',
      state: 'Minas Gerais',
    },
    {
      city: 'Cruzília',
      state: 'Minas Gerais',
    },
    {
      city: 'Cuparaque',
      state: 'Minas Gerais',
    },
    {
      city: 'Curral de Dentro',
      state: 'Minas Gerais',
    },
    {
      city: 'Curvelo',
      state: 'Minas Gerais',
    },
    {
      city: 'Datas',
      state: 'Minas Gerais',
    },
    {
      city: 'Delfim Moreira',
      state: 'Minas Gerais',
    },
    {
      city: 'Delfinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Delta',
      state: 'Minas Gerais',
    },
    {
      city: 'Descoberto',
      state: 'Minas Gerais',
    },
    {
      city: 'Desterro de Entre Rios',
      state: 'Minas Gerais',
    },
    {
      city: 'Desterro do Melo',
      state: 'Minas Gerais',
    },
    {
      city: 'Diamantina',
      state: 'Minas Gerais',
    },
    {
      city: 'Diogo de Vasconcelos',
      state: 'Minas Gerais',
    },
    {
      city: 'Dionísio',
      state: 'Minas Gerais',
    },
    {
      city: 'Divinésia',
      state: 'Minas Gerais',
    },
    {
      city: 'Divino',
      state: 'Minas Gerais',
    },
    {
      city: 'Divino das Laranjeiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Divinolândia de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Divinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Divisa Alegre',
      state: 'Minas Gerais',
    },
    {
      city: 'Divisa Nova',
      state: 'Minas Gerais',
    },
    {
      city: 'Divisópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Dom Bosco',
      state: 'Minas Gerais',
    },
    {
      city: 'Dom Cavati',
      state: 'Minas Gerais',
    },
    {
      city: 'Dom Joaquim',
      state: 'Minas Gerais',
    },
    {
      city: 'Dom Silvério',
      state: 'Minas Gerais',
    },
    {
      city: 'Dom Viçoso',
      state: 'Minas Gerais',
    },
    {
      city: 'Dona Euzébia',
      state: 'Minas Gerais',
    },
    {
      city: 'Dores de Campos',
      state: 'Minas Gerais',
    },
    {
      city: 'Dores de Guanhães',
      state: 'Minas Gerais',
    },
    {
      city: 'Dores do Indaiá',
      state: 'Minas Gerais',
    },
    {
      city: 'Dores do Turvo',
      state: 'Minas Gerais',
    },
    {
      city: 'Doresópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Douradoquara',
      state: 'Minas Gerais',
    },
    {
      city: 'Durandé',
      state: 'Minas Gerais',
    },
    {
      city: 'Elói Mendes',
      state: 'Minas Gerais',
    },
    {
      city: 'Engenheiro Caldas',
      state: 'Minas Gerais',
    },
    {
      city: 'Engenheiro Navarro',
      state: 'Minas Gerais',
    },
    {
      city: 'Entre Folhas',
      state: 'Minas Gerais',
    },
    {
      city: 'Entre Rios de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Ervália',
      state: 'Minas Gerais',
    },
    {
      city: 'Esmeraldas',
      state: 'Minas Gerais',
    },
    {
      city: 'Espera Feliz',
      state: 'Minas Gerais',
    },
    {
      city: 'Espinosa',
      state: 'Minas Gerais',
    },
    {
      city: 'Espírito Santo do Dourado',
      state: 'Minas Gerais',
    },
    {
      city: 'Estiva',
      state: 'Minas Gerais',
    },
    {
      city: 'Estrela Dalva',
      state: 'Minas Gerais',
    },
    {
      city: 'Estrela do Indaiá',
      state: 'Minas Gerais',
    },
    {
      city: 'Estrela do Sul',
      state: 'Minas Gerais',
    },
    {
      city: 'Eugenópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Ewbank da Câmara',
      state: 'Minas Gerais',
    },
    {
      city: 'Extrema',
      state: 'Minas Gerais',
    },
    {
      city: 'Fama',
      state: 'Minas Gerais',
    },
    {
      city: 'Faria Lemos',
      state: 'Minas Gerais',
    },
    {
      city: 'Felício dos Santos',
      state: 'Minas Gerais',
    },
    {
      city: 'Felisburgo',
      state: 'Minas Gerais',
    },
    {
      city: 'Felixlândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Fernandes Tourinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Ferros',
      state: 'Minas Gerais',
    },
    {
      city: 'Fervedouro',
      state: 'Minas Gerais',
    },
    {
      city: 'Florestal',
      state: 'Minas Gerais',
    },
    {
      city: 'Formiga',
      state: 'Minas Gerais',
    },
    {
      city: 'Formoso',
      state: 'Minas Gerais',
    },
    {
      city: 'Fortaleza de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Fortuna de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Francisco Badaró',
      state: 'Minas Gerais',
    },
    {
      city: 'Francisco Dumont',
      state: 'Minas Gerais',
    },
    {
      city: 'Francisco Sá',
      state: 'Minas Gerais',
    },
    {
      city: 'Franciscópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Frei Gaspar',
      state: 'Minas Gerais',
    },
    {
      city: 'Frei Inocêncio',
      state: 'Minas Gerais',
    },
    {
      city: 'Frei Lagonegro',
      state: 'Minas Gerais',
    },
    {
      city: 'Fronteira',
      state: 'Minas Gerais',
    },
    {
      city: 'Fronteira dos Vales',
      state: 'Minas Gerais',
    },
    {
      city: 'Fruta de Leite',
      state: 'Minas Gerais',
    },
    {
      city: 'Frutal',
      state: 'Minas Gerais',
    },
    {
      city: 'Funilândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Galiléia',
      state: 'Minas Gerais',
    },
    {
      city: 'Gameleiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Glaucilândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Goiabeira',
      state: 'Minas Gerais',
    },
    {
      city: 'Goianá',
      state: 'Minas Gerais',
    },
    {
      city: 'Gonçalves',
      state: 'Minas Gerais',
    },
    {
      city: 'Gonzaga',
      state: 'Minas Gerais',
    },
    {
      city: 'Gouveia',
      state: 'Minas Gerais',
    },
    {
      city: 'Governador Valadares',
      state: 'Minas Gerais',
    },
    {
      city: 'Grão Mogol',
      state: 'Minas Gerais',
    },
    {
      city: 'Grupiara',
      state: 'Minas Gerais',
    },
    {
      city: 'Guanhães',
      state: 'Minas Gerais',
    },
    {
      city: 'Guapé',
      state: 'Minas Gerais',
    },
    {
      city: 'Guaraciaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Guaraciama',
      state: 'Minas Gerais',
    },
    {
      city: 'Guaranésia',
      state: 'Minas Gerais',
    },
    {
      city: 'Guarani',
      state: 'Minas Gerais',
    },
    {
      city: 'Guarará',
      state: 'Minas Gerais',
    },
    {
      city: 'Guarda-Mor',
      state: 'Minas Gerais',
    },
    {
      city: 'Guaxupé',
      state: 'Minas Gerais',
    },
    {
      city: 'Guidoval',
      state: 'Minas Gerais',
    },
    {
      city: 'Guimarânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Guiricema',
      state: 'Minas Gerais',
    },
    {
      city: 'Gurinhatã',
      state: 'Minas Gerais',
    },
    {
      city: 'Heliodora',
      state: 'Minas Gerais',
    },
    {
      city: 'Iapu',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibertioga',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibiá',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibiaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibiracatu',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibiraci',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibirité',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibitiúra de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Ibituruna',
      state: 'Minas Gerais',
    },
    {
      city: 'Icaraí de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Igarapé',
      state: 'Minas Gerais',
    },
    {
      city: 'Igaratinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Iguatama',
      state: 'Minas Gerais',
    },
    {
      city: 'Ijaci',
      state: 'Minas Gerais',
    },
    {
      city: 'Ilicínea',
      state: 'Minas Gerais',
    },
    {
      city: 'Imbé de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Inconfidentes',
      state: 'Minas Gerais',
    },
    {
      city: 'Indaiabira',
      state: 'Minas Gerais',
    },
    {
      city: 'Indianópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Ingaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Inhapim',
      state: 'Minas Gerais',
    },
    {
      city: 'Inhaúma',
      state: 'Minas Gerais',
    },
    {
      city: 'Inimutaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Ipaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Ipanema',
      state: 'Minas Gerais',
    },
    {
      city: 'Ipatinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Ipiaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Ipuiúna',
      state: 'Minas Gerais',
    },
    {
      city: 'Iraí de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Itabira',
      state: 'Minas Gerais',
    },
    {
      city: 'Itabirinha de Mantena',
      state: 'Minas Gerais',
    },
    {
      city: 'Itabirito',
      state: 'Minas Gerais',
    },
    {
      city: 'Itacambira',
      state: 'Minas Gerais',
    },
    {
      city: 'Itacarambi',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaguara',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaipé',
      state: 'Minas Gerais',
    },
    {
      city: 'Itajubá',
      state: 'Minas Gerais',
    },
    {
      city: 'Itamarandiba',
      state: 'Minas Gerais',
    },
    {
      city: 'Itamarati de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Itambacuri',
      state: 'Minas Gerais',
    },
    {
      city: 'Itambé do Mato Dentro',
      state: 'Minas Gerais',
    },
    {
      city: 'Itamogi',
      state: 'Minas Gerais',
    },
    {
      city: 'Itamonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Itanhandu',
      state: 'Minas Gerais',
    },
    {
      city: 'Itanhomi',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaobim',
      state: 'Minas Gerais',
    },
    {
      city: 'Itapagipe',
      state: 'Minas Gerais',
    },
    {
      city: 'Itapecerica',
      state: 'Minas Gerais',
    },
    {
      city: 'Itapeva',
      state: 'Minas Gerais',
    },
    {
      city: 'Itatiaiuçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaú de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaúna',
      state: 'Minas Gerais',
    },
    {
      city: 'Itaverava',
      state: 'Minas Gerais',
    },
    {
      city: 'Itinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Itueta',
      state: 'Minas Gerais',
    },
    {
      city: 'Ituiutaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Itumirim',
      state: 'Minas Gerais',
    },
    {
      city: 'Iturama',
      state: 'Minas Gerais',
    },
    {
      city: 'Itutinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Jaboticatubas',
      state: 'Minas Gerais',
    },
    {
      city: 'Jacinto',
      state: 'Minas Gerais',
    },
    {
      city: 'Jacuí',
      state: 'Minas Gerais',
    },
    {
      city: 'Jacutinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Jaguaraçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Jaíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Jampruca',
      state: 'Minas Gerais',
    },
    {
      city: 'Janaúba',
      state: 'Minas Gerais',
    },
    {
      city: 'Januária',
      state: 'Minas Gerais',
    },
    {
      city: 'Japaraíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Japonvar',
      state: 'Minas Gerais',
    },
    {
      city: 'Jeceaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Jenipapo de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Jequeri',
      state: 'Minas Gerais',
    },
    {
      city: 'Jequitaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Jequitibá',
      state: 'Minas Gerais',
    },
    {
      city: 'Jequitinhonha',
      state: 'Minas Gerais',
    },
    {
      city: 'Jesuânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Joaíma',
      state: 'Minas Gerais',
    },
    {
      city: 'Joanésia',
      state: 'Minas Gerais',
    },
    {
      city: 'João Monlevade',
      state: 'Minas Gerais',
    },
    {
      city: 'João Pinheiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Joaquim Felício',
      state: 'Minas Gerais',
    },
    {
      city: 'Jordânia',
      state: 'Minas Gerais',
    },
    {
      city: 'José Gonçalves de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'José Raydan',
      state: 'Minas Gerais',
    },
    {
      city: 'Josenópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Juatuba',
      state: 'Minas Gerais',
    },
    {
      city: 'Juiz de Fora',
      state: 'Minas Gerais',
    },
    {
      city: 'Juramento',
      state: 'Minas Gerais',
    },
    {
      city: 'Juruaia',
      state: 'Minas Gerais',
    },
    {
      city: 'Juvenília',
      state: 'Minas Gerais',
    },
    {
      city: 'Ladainha',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagamar',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa da Prata',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa dos Patos',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa Dourada',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa Formosa',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa Grande',
      state: 'Minas Gerais',
    },
    {
      city: 'Lagoa Santa',
      state: 'Minas Gerais',
    },
    {
      city: 'Lajinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Lambari',
      state: 'Minas Gerais',
    },
    {
      city: 'Lamim',
      state: 'Minas Gerais',
    },
    {
      city: 'Laranjal',
      state: 'Minas Gerais',
    },
    {
      city: 'Lassance',
      state: 'Minas Gerais',
    },
    {
      city: 'Lavras',
      state: 'Minas Gerais',
    },
    {
      city: 'Leandro Ferreira',
      state: 'Minas Gerais',
    },
    {
      city: 'Leme do Prado',
      state: 'Minas Gerais',
    },
    {
      city: 'Leopoldina',
      state: 'Minas Gerais',
    },
    {
      city: 'Liberdade',
      state: 'Minas Gerais',
    },
    {
      city: 'Lima Duarte',
      state: 'Minas Gerais',
    },
    {
      city: 'Limeira do Oeste',
      state: 'Minas Gerais',
    },
    {
      city: 'Lontra',
      state: 'Minas Gerais',
    },
    {
      city: 'Luisburgo',
      state: 'Minas Gerais',
    },
    {
      city: 'Luislândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Luminárias',
      state: 'Minas Gerais',
    },
    {
      city: 'Luz',
      state: 'Minas Gerais',
    },
    {
      city: 'Machacalis',
      state: 'Minas Gerais',
    },
    {
      city: 'Machado',
      state: 'Minas Gerais',
    },
    {
      city: 'Madre de Deus de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Malacacheta',
      state: 'Minas Gerais',
    },
    {
      city: 'Mamonas',
      state: 'Minas Gerais',
    },
    {
      city: 'Manga',
      state: 'Minas Gerais',
    },
    {
      city: 'Manhuaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Manhumirim',
      state: 'Minas Gerais',
    },
    {
      city: 'Mantena',
      state: 'Minas Gerais',
    },
    {
      city: 'Mar de Espanha',
      state: 'Minas Gerais',
    },
    {
      city: 'Maravilhas',
      state: 'Minas Gerais',
    },
    {
      city: 'Maria da Fé',
      state: 'Minas Gerais',
    },
    {
      city: 'Mariana',
      state: 'Minas Gerais',
    },
    {
      city: 'Marilac',
      state: 'Minas Gerais',
    },
    {
      city: 'Mário Campos',
      state: 'Minas Gerais',
    },
    {
      city: 'Maripá de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Marliéria',
      state: 'Minas Gerais',
    },
    {
      city: 'Marmelópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Martinho Campos',
      state: 'Minas Gerais',
    },
    {
      city: 'Martins Soares',
      state: 'Minas Gerais',
    },
    {
      city: 'Mata Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Materlândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Mateus Leme',
      state: 'Minas Gerais',
    },
    {
      city: 'Mathias Lobato',
      state: 'Minas Gerais',
    },
    {
      city: 'Matias Barbosa',
      state: 'Minas Gerais',
    },
    {
      city: 'Matias Cardoso',
      state: 'Minas Gerais',
    },
    {
      city: 'Matipó',
      state: 'Minas Gerais',
    },
    {
      city: 'Mato Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Matozinhos',
      state: 'Minas Gerais',
    },
    {
      city: 'Matutina',
      state: 'Minas Gerais',
    },
    {
      city: 'Medeiros',
      state: 'Minas Gerais',
    },
    {
      city: 'Medina',
      state: 'Minas Gerais',
    },
    {
      city: 'Mendes Pimentel',
      state: 'Minas Gerais',
    },
    {
      city: 'Mercês',
      state: 'Minas Gerais',
    },
    {
      city: 'Mesquita',
      state: 'Minas Gerais',
    },
    {
      city: 'Minas Novas',
      state: 'Minas Gerais',
    },
    {
      city: 'Minduri',
      state: 'Minas Gerais',
    },
    {
      city: 'Mirabela',
      state: 'Minas Gerais',
    },
    {
      city: 'Miradouro',
      state: 'Minas Gerais',
    },
    {
      city: 'Miraí',
      state: 'Minas Gerais',
    },
    {
      city: 'Miravânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Moeda',
      state: 'Minas Gerais',
    },
    {
      city: 'Moema',
      state: 'Minas Gerais',
    },
    {
      city: 'Monjolos',
      state: 'Minas Gerais',
    },
    {
      city: 'Monsenhor Paulo',
      state: 'Minas Gerais',
    },
    {
      city: 'Montalvânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Alegre de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Azul',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Belo',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Carmelo',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Formoso',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Santo de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Monte Sião',
      state: 'Minas Gerais',
    },
    {
      city: 'Montes Claros',
      state: 'Minas Gerais',
    },
    {
      city: 'Montezuma',
      state: 'Minas Gerais',
    },
    {
      city: 'Morada Nova de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Morro da Garça',
      state: 'Minas Gerais',
    },
    {
      city: 'Morro do Pilar',
      state: 'Minas Gerais',
    },
    {
      city: 'Munhoz',
      state: 'Minas Gerais',
    },
    {
      city: 'Muriaé',
      state: 'Minas Gerais',
    },
    {
      city: 'Mutum',
      state: 'Minas Gerais',
    },
    {
      city: 'Muzambinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Nacip Raydan',
      state: 'Minas Gerais',
    },
    {
      city: 'Nanuque',
      state: 'Minas Gerais',
    },
    {
      city: 'Naque',
      state: 'Minas Gerais',
    },
    {
      city: 'Natalândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Natércia',
      state: 'Minas Gerais',
    },
    {
      city: 'Nazareno',
      state: 'Minas Gerais',
    },
    {
      city: 'Nepomuceno',
      state: 'Minas Gerais',
    },
    {
      city: 'Ninheira',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Belém',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Era',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Lima',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Módica',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Ponte',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Porteirinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Resende',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova Serrana',
      state: 'Minas Gerais',
    },
    {
      city: 'Nova União',
      state: 'Minas Gerais',
    },
    {
      city: 'Novo Cruzeiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Novo Oriente de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Novorizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Olaria',
      state: 'Minas Gerais',
    },
    {
      city: "Olhos-d'Água",
      state: 'Minas Gerais',
    },
    {
      city: 'Olímpio Noronha',
      state: 'Minas Gerais',
    },
    {
      city: 'Oliveira',
      state: 'Minas Gerais',
    },
    {
      city: 'Oliveira Fortes',
      state: 'Minas Gerais',
    },
    {
      city: 'Onça de Pitangui',
      state: 'Minas Gerais',
    },
    {
      city: 'Oratórios',
      state: 'Minas Gerais',
    },
    {
      city: 'Orizânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Ouro Branco',
      state: 'Minas Gerais',
    },
    {
      city: 'Ouro Fino',
      state: 'Minas Gerais',
    },
    {
      city: 'Ouro Preto',
      state: 'Minas Gerais',
    },
    {
      city: 'Ouro Verde de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Padre Carvalho',
      state: 'Minas Gerais',
    },
    {
      city: 'Padre Paraíso',
      state: 'Minas Gerais',
    },
    {
      city: 'Pai Pedro',
      state: 'Minas Gerais',
    },
    {
      city: 'Paineiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Pains',
      state: 'Minas Gerais',
    },
    {
      city: 'Paiva',
      state: 'Minas Gerais',
    },
    {
      city: 'Palma',
      state: 'Minas Gerais',
    },
    {
      city: 'Palmópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Papagaios',
      state: 'Minas Gerais',
    },
    {
      city: 'Pará de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Paracatu',
      state: 'Minas Gerais',
    },
    {
      city: 'Paraguaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Paraisópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Paraopeba',
      state: 'Minas Gerais',
    },
    {
      city: 'Passa Quatro',
      state: 'Minas Gerais',
    },
    {
      city: 'Passa Tempo',
      state: 'Minas Gerais',
    },
    {
      city: 'Passa-Vinte',
      state: 'Minas Gerais',
    },
    {
      city: 'Passabém',
      state: 'Minas Gerais',
    },
    {
      city: 'Passos',
      state: 'Minas Gerais',
    },
    {
      city: 'Patis',
      state: 'Minas Gerais',
    },
    {
      city: 'Patos de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Patrocínio',
      state: 'Minas Gerais',
    },
    {
      city: 'Patrocínio do Muriaé',
      state: 'Minas Gerais',
    },
    {
      city: 'Paula Cândido',
      state: 'Minas Gerais',
    },
    {
      city: 'Paulistas',
      state: 'Minas Gerais',
    },
    {
      city: 'Pavão',
      state: 'Minas Gerais',
    },
    {
      city: 'Peçanha',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedra Azul',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedra Bonita',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedra do Anta',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedra do Indaiá',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedra Dourada',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedralva',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedras de Maria da Cruz',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedrinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedro Leopoldo',
      state: 'Minas Gerais',
    },
    {
      city: 'Pedro Teixeira',
      state: 'Minas Gerais',
    },
    {
      city: 'Pequeri',
      state: 'Minas Gerais',
    },
    {
      city: 'Pequi',
      state: 'Minas Gerais',
    },
    {
      city: 'Perdigão',
      state: 'Minas Gerais',
    },
    {
      city: 'Perdizes',
      state: 'Minas Gerais',
    },
    {
      city: 'Perdões',
      state: 'Minas Gerais',
    },
    {
      city: 'Periquito',
      state: 'Minas Gerais',
    },
    {
      city: 'Pescador',
      state: 'Minas Gerais',
    },
    {
      city: 'Piau',
      state: 'Minas Gerais',
    },
    {
      city: 'Piedade de Caratinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Piedade de Ponte Nova',
      state: 'Minas Gerais',
    },
    {
      city: 'Piedade do Rio Grande',
      state: 'Minas Gerais',
    },
    {
      city: 'Piedade dos Gerais',
      state: 'Minas Gerais',
    },
    {
      city: 'Pimenta',
      state: 'Minas Gerais',
    },
    {
      city: "Pingo-d'Água",
      state: 'Minas Gerais',
    },
    {
      city: 'Pintópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Piracema',
      state: 'Minas Gerais',
    },
    {
      city: 'Pirajuba',
      state: 'Minas Gerais',
    },
    {
      city: 'Piranga',
      state: 'Minas Gerais',
    },
    {
      city: 'Piranguçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Piranguinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Pirapetinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Pirapora',
      state: 'Minas Gerais',
    },
    {
      city: 'Piraúba',
      state: 'Minas Gerais',
    },
    {
      city: 'Pitangui',
      state: 'Minas Gerais',
    },
    {
      city: 'Piumhi',
      state: 'Minas Gerais',
    },
    {
      city: 'Planura',
      state: 'Minas Gerais',
    },
    {
      city: 'Poço Fundo',
      state: 'Minas Gerais',
    },
    {
      city: 'Poços de Caldas',
      state: 'Minas Gerais',
    },
    {
      city: 'Pocrane',
      state: 'Minas Gerais',
    },
    {
      city: 'Pompéu',
      state: 'Minas Gerais',
    },
    {
      city: 'Ponte Nova',
      state: 'Minas Gerais',
    },
    {
      city: 'Ponto Chique',
      state: 'Minas Gerais',
    },
    {
      city: 'Ponto dos Volantes',
      state: 'Minas Gerais',
    },
    {
      city: 'Porteirinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Porto Firme',
      state: 'Minas Gerais',
    },
    {
      city: 'Poté',
      state: 'Minas Gerais',
    },
    {
      city: 'Pouso Alegre',
      state: 'Minas Gerais',
    },
    {
      city: 'Pouso Alto',
      state: 'Minas Gerais',
    },
    {
      city: 'Prados',
      state: 'Minas Gerais',
    },
    {
      city: 'Prata',
      state: 'Minas Gerais',
    },
    {
      city: 'Pratápolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Pratinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Presidente Bernardes',
      state: 'Minas Gerais',
    },
    {
      city: 'Presidente Juscelino',
      state: 'Minas Gerais',
    },
    {
      city: 'Presidente Kubitschek',
      state: 'Minas Gerais',
    },
    {
      city: 'Presidente Olegário',
      state: 'Minas Gerais',
    },
    {
      city: 'Prudente de Morais',
      state: 'Minas Gerais',
    },
    {
      city: 'Quartel Geral',
      state: 'Minas Gerais',
    },
    {
      city: 'Queluzito',
      state: 'Minas Gerais',
    },
    {
      city: 'Raposos',
      state: 'Minas Gerais',
    },
    {
      city: 'Raul Soares',
      state: 'Minas Gerais',
    },
    {
      city: 'Recreio',
      state: 'Minas Gerais',
    },
    {
      city: 'Reduto',
      state: 'Minas Gerais',
    },
    {
      city: 'Resende Costa',
      state: 'Minas Gerais',
    },
    {
      city: 'Resplendor',
      state: 'Minas Gerais',
    },
    {
      city: 'Ressaquinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Riachinho',
      state: 'Minas Gerais',
    },
    {
      city: 'Riacho dos Machados',
      state: 'Minas Gerais',
    },
    {
      city: 'Ribeirão das Neves',
      state: 'Minas Gerais',
    },
    {
      city: 'Ribeirão Vermelho',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Acima',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Casca',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio do Prado',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Doce',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Espera',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Manso',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Novo',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Paranaíba',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Pardo de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Piracicaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Pomba',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Preto',
      state: 'Minas Gerais',
    },
    {
      city: 'Rio Vermelho',
      state: 'Minas Gerais',
    },
    {
      city: 'Ritápolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Rochedo de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Rodeiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Romaria',
      state: 'Minas Gerais',
    },
    {
      city: 'Rosário da Limeira',
      state: 'Minas Gerais',
    },
    {
      city: 'Rubelita',
      state: 'Minas Gerais',
    },
    {
      city: 'Rubim',
      state: 'Minas Gerais',
    },
    {
      city: 'Sabará',
      state: 'Minas Gerais',
    },
    {
      city: 'Sabinópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Sacramento',
      state: 'Minas Gerais',
    },
    {
      city: 'Salinas',
      state: 'Minas Gerais',
    },
    {
      city: 'Salto da Divisa',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Bárbara',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Bárbara do Leste',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Bárbara do Monte Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Bárbara do Tugúrio',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Cruz de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Cruz de Salinas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Cruz do Escalvado',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Efigênia de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Fé de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Helena de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Juliana',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Luzia',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Margarida',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Maria de Itabira',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Maria do Salto',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Maria do Suaçuí',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita de Caldas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita de Ibitipoca',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita de Jacutinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita do Itueto',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rita do Sapucaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Rosa da Serra',
      state: 'Minas Gerais',
    },
    {
      city: 'Santa Vitória',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana da Vargem',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana de Cataguases',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana de Pirapama',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Deserto',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Garambéu',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Jacaré',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Manhuaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Paraíso',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana do Riacho',
      state: 'Minas Gerais',
    },
    {
      city: 'Santana dos Montes',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Amparo',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Aventureiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Grama',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Itambé',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Jacinto',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Monte',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Retiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Antônio do Rio Abaixo',
      state: 'Minas Gerais',
    },
    {
      city: 'Santo Hipólito',
      state: 'Minas Gerais',
    },
    {
      city: 'Santos Dumont',
      state: 'Minas Gerais',
    },
    {
      city: 'São Bento Abade',
      state: 'Minas Gerais',
    },
    {
      city: 'São Brás do Suaçuí',
      state: 'Minas Gerais',
    },
    {
      city: 'São Domingos das Dores',
      state: 'Minas Gerais',
    },
    {
      city: 'São Domingos do Prata',
      state: 'Minas Gerais',
    },
    {
      city: 'São Félix de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'São Francisco',
      state: 'Minas Gerais',
    },
    {
      city: 'São Francisco de Paula',
      state: 'Minas Gerais',
    },
    {
      city: 'São Francisco de Sales',
      state: 'Minas Gerais',
    },
    {
      city: 'São Francisco do Glória',
      state: 'Minas Gerais',
    },
    {
      city: 'São Geraldo',
      state: 'Minas Gerais',
    },
    {
      city: 'São Geraldo da Piedade',
      state: 'Minas Gerais',
    },
    {
      city: 'São Geraldo do Baixio',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gonçalo do Abaeté',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gonçalo do Pará',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gonçalo do Rio Abaixo',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gonçalo do Rio Preto',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gonçalo do Sapucaí',
      state: 'Minas Gerais',
    },
    {
      city: 'São Gotardo',
      state: 'Minas Gerais',
    },
    {
      city: 'São João Batista do Glória',
      state: 'Minas Gerais',
    },
    {
      city: 'São João da Lagoa',
      state: 'Minas Gerais',
    },
    {
      city: 'São João da Mata',
      state: 'Minas Gerais',
    },
    {
      city: 'São João da Ponte',
      state: 'Minas Gerais',
    },
    {
      city: 'São João das Missões',
      state: 'Minas Gerais',
    },
    {
      city: 'São João del Rei',
      state: 'Minas Gerais',
    },
    {
      city: 'São João do Manhuaçu',
      state: 'Minas Gerais',
    },
    {
      city: 'São João do Manteninha',
      state: 'Minas Gerais',
    },
    {
      city: 'São João do Oriente',
      state: 'Minas Gerais',
    },
    {
      city: 'São João do Pacuí',
      state: 'Minas Gerais',
    },
    {
      city: 'São João do Paraíso',
      state: 'Minas Gerais',
    },
    {
      city: 'São João Evangelista',
      state: 'Minas Gerais',
    },
    {
      city: 'São João Nepomuceno',
      state: 'Minas Gerais',
    },
    {
      city: 'São Joaquim de Bicas',
      state: 'Minas Gerais',
    },
    {
      city: 'São José da Barra',
      state: 'Minas Gerais',
    },
    {
      city: 'São José da Lapa',
      state: 'Minas Gerais',
    },
    {
      city: 'São José da Safira',
      state: 'Minas Gerais',
    },
    {
      city: 'São José da Varginha',
      state: 'Minas Gerais',
    },
    {
      city: 'São José do Alegre',
      state: 'Minas Gerais',
    },
    {
      city: 'São José do Divino',
      state: 'Minas Gerais',
    },
    {
      city: 'São José do Goiabal',
      state: 'Minas Gerais',
    },
    {
      city: 'São José do Jacuri',
      state: 'Minas Gerais',
    },
    {
      city: 'São José do Mantimento',
      state: 'Minas Gerais',
    },
    {
      city: 'São Lourenço',
      state: 'Minas Gerais',
    },
    {
      city: 'São Miguel do Anta',
      state: 'Minas Gerais',
    },
    {
      city: 'São Pedro da União',
      state: 'Minas Gerais',
    },
    {
      city: 'São Pedro do Suaçuí',
      state: 'Minas Gerais',
    },
    {
      city: 'São Pedro dos Ferros',
      state: 'Minas Gerais',
    },
    {
      city: 'São Romão',
      state: 'Minas Gerais',
    },
    {
      city: 'São Roque de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião da Bela Vista',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião da Vargem Alegre',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Anta',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Maranhão',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Oeste',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Paraíso',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Rio Preto',
      state: 'Minas Gerais',
    },
    {
      city: 'São Sebastião do Rio Verde',
      state: 'Minas Gerais',
    },
    {
      city: 'São Thomé das Letras',
      state: 'Minas Gerais',
    },
    {
      city: 'São Tiago',
      state: 'Minas Gerais',
    },
    {
      city: 'São Tomás de Aquino',
      state: 'Minas Gerais',
    },
    {
      city: 'São Vicente de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Sapucaí-Mirim',
      state: 'Minas Gerais',
    },
    {
      city: 'Sardoá',
      state: 'Minas Gerais',
    },
    {
      city: 'Sarzedo',
      state: 'Minas Gerais',
    },
    {
      city: 'Sem-Peixe',
      state: 'Minas Gerais',
    },
    {
      city: 'Senador Amaral',
      state: 'Minas Gerais',
    },
    {
      city: 'Senador Cortes',
      state: 'Minas Gerais',
    },
    {
      city: 'Senador Firmino',
      state: 'Minas Gerais',
    },
    {
      city: 'Senador José Bento',
      state: 'Minas Gerais',
    },
    {
      city: 'Senador Modestino Gonçalves',
      state: 'Minas Gerais',
    },
    {
      city: 'Senhora de Oliveira',
      state: 'Minas Gerais',
    },
    {
      city: 'Senhora do Porto',
      state: 'Minas Gerais',
    },
    {
      city: 'Senhora dos Remédios',
      state: 'Minas Gerais',
    },
    {
      city: 'Sericita',
      state: 'Minas Gerais',
    },
    {
      city: 'Seritinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Serra Azul de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Serra da Saudade',
      state: 'Minas Gerais',
    },
    {
      city: 'Serra do Salitre',
      state: 'Minas Gerais',
    },
    {
      city: 'Serra dos Aimorés',
      state: 'Minas Gerais',
    },
    {
      city: 'Serrania',
      state: 'Minas Gerais',
    },
    {
      city: 'Serranópolis de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Serranos',
      state: 'Minas Gerais',
    },
    {
      city: 'Serro',
      state: 'Minas Gerais',
    },
    {
      city: 'Sete Lagoas',
      state: 'Minas Gerais',
    },
    {
      city: 'Setubinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Silveirânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Silvianópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Simão Pereira',
      state: 'Minas Gerais',
    },
    {
      city: 'Simonésia',
      state: 'Minas Gerais',
    },
    {
      city: 'Sobrália',
      state: 'Minas Gerais',
    },
    {
      city: 'Soledade de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Tabuleiro',
      state: 'Minas Gerais',
    },
    {
      city: 'Taiobeiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Taparuba',
      state: 'Minas Gerais',
    },
    {
      city: 'Tapira',
      state: 'Minas Gerais',
    },
    {
      city: 'Tapiraí',
      state: 'Minas Gerais',
    },
    {
      city: 'Taquaraçu de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Tarumirim',
      state: 'Minas Gerais',
    },
    {
      city: 'Teixeiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Teófilo Otoni',
      state: 'Minas Gerais',
    },
    {
      city: 'Timóteo',
      state: 'Minas Gerais',
    },
    {
      city: 'Tiradentes',
      state: 'Minas Gerais',
    },
    {
      city: 'Tiros',
      state: 'Minas Gerais',
    },
    {
      id: '061aeb77-f6a5-407a-8880-93a6002e4200',
      city: 'Tocantins',
      state: 'Minas Gerais',
    },
    {
      city: 'Tocos do Moji',
      state: 'Minas Gerais',
    },
    {
      city: 'Toledo',
      state: 'Minas Gerais',
    },
    {
      city: 'Tombos',
      state: 'Minas Gerais',
    },
    {
      city: 'Três Corações',
      state: 'Minas Gerais',
    },
    {
      city: 'Três Marias',
      state: 'Minas Gerais',
    },
    {
      city: 'Três Pontas',
      state: 'Minas Gerais',
    },
    {
      city: 'Tumiritinga',
      state: 'Minas Gerais',
    },
    {
      city: 'Tupaciguara',
      state: 'Minas Gerais',
    },
    {
      city: 'Turmalina',
      state: 'Minas Gerais',
    },
    {
      city: 'Turvolândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Ubá',
      state: 'Minas Gerais',
    },
    {
      city: 'Ubaí',
      state: 'Minas Gerais',
    },
    {
      city: 'Ubaporanga',
      state: 'Minas Gerais',
    },
    {
      city: 'Uberaba',
      state: 'Minas Gerais',
    },
    {
      city: 'Uberlândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Umburatiba',
      state: 'Minas Gerais',
    },
    {
      city: 'Unaí',
      state: 'Minas Gerais',
    },
    {
      city: 'União de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Uruana de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Urucânia',
      state: 'Minas Gerais',
    },
    {
      city: 'Urucuia',
      state: 'Minas Gerais',
    },
    {
      city: 'Vargem Alegre',
      state: 'Minas Gerais',
    },
    {
      city: 'Vargem Bonita',
      state: 'Minas Gerais',
    },
    {
      city: 'Vargem Grande do Rio Pardo',
      state: 'Minas Gerais',
    },
    {
      city: 'Varginha',
      state: 'Minas Gerais',
    },
    {
      city: 'Varjão de Minas',
      state: 'Minas Gerais',
    },
    {
      city: 'Várzea da Palma',
      state: 'Minas Gerais',
    },
    {
      city: 'Varzelândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Vazante',
      state: 'Minas Gerais',
    },
    {
      city: 'Verdelândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Veredinha',
      state: 'Minas Gerais',
    },
    {
      city: 'Veríssimo',
      state: 'Minas Gerais',
    },
    {
      city: 'Vermelho Novo',
      state: 'Minas Gerais',
    },
    {
      city: 'Vespasiano',
      state: 'Minas Gerais',
    },
    {
      city: 'Viçosa',
      state: 'Minas Gerais',
    },
    {
      city: 'Vieiras',
      state: 'Minas Gerais',
    },
    {
      city: 'Virgem da Lapa',
      state: 'Minas Gerais',
    },
    {
      city: 'Virgínia',
      state: 'Minas Gerais',
    },
    {
      city: 'Virginópolis',
      state: 'Minas Gerais',
    },
    {
      city: 'Virgolândia',
      state: 'Minas Gerais',
    },
    {
      city: 'Visconde do Rio Branco',
      state: 'Minas Gerais',
    },
    {
      city: 'Volta Grande',
      state: 'Minas Gerais',
    },
    {
      city: 'Wenceslau Braz',
      state: 'Minas Gerais',
    },
  ];

  await prisma.city.createMany({ data: cityData });

  console.log('Finished seeding.');
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

console.log('Bottom of script');
