'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('produtos', [
      // Baggio
      {
        nome_produto: 'Baggio café Premium-10 Cápsulas',
        sku: 'cfp',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Baggio Premium Caffé.Com é um café de intensidade forte com notas marcantes e um blend exclusivo para o seu dia-a-dia.## Nossas cápsulas são compatíveis com máquinas Nespresso®*.',
        informacoes_tecnicas: 'Características:## Tipo: 100% Coffea Arabica# Origem: Mogiana Paulista# Variedade: Premium Caffé.Com# Bebida: Apenas Mole# Torra: Escura# Intensidade: 11# Não contém açúcar e não contém glúten',
        peso: '0.50',
        preco: '20.90',
        custo: '20.90',
        title_pagina: 'Baggio café Premium-10 Cápsulas',
        palavras_chave: 'Baggio café Premium-10 Cápsulas',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644592642532-.PNG',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644592642552-.PNG',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644592642583-.PNG'
      },
      {
        nome_produto: 'Baggio Aromas Chocolate Trufado-10 Cápsulas',
        sku: 'cfp-01',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Baggio Aromas Chocolate Trufado é um café com aroma de trufas e chocolate da mais alta qualidade. Sinta leves toques de frutas secas, nozes e conhaque. Perfeito para momentos especiais.## Nossas cápsulas são compatíveis com máquinas Nespresso®*. ',
        informacoes_tecnicas: 'Características:## Tipo: 100% Coffea Arabica## Origem: Mogiana Paulista e Sul de Minas## Variedade: Especial Aromatizado Chocolate Trufado## Bebida: Mole## Torra: Média## Intensidade: 7## Não contém açúcar e não contém glúten',
        peso: '0.50',
        preco: '20.90',
        custo: '20.90',
        title_pagina: 'Baggio Aromas Chocolate Trufado-10 Cápsulas',
        palavras_chave: 'Baggio Aromas Chocolate Trufado-10 Cápsulas',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644592704561-.PNG',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644592704573-.PNG',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644592704593-.PNG'
      },
      {
        nome_produto: 'Baggio Clássico - 10 Cápsulas',
        sku: 'cfp-02',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Baggio Café Clássico é um café equilibrado com notas frutadas, baixa acidez e corpo aveludado. Para finalizar, a torra média garante a acidez, açúcares e amargor balanceados, fazendo com que o Baggio Clássico mantenha seu perfeito equilíbrio.## As cápsulas são compatíveis com máquinas Nespresso®*.',
        informacoes_tecnicas: 'Características:## Tipo: 100% Coffea Arabica## Origem: Mogiana Paulista e Sul de Minas Gerais## Bebida: Mole## Torra: Média## Intensidade: 8## Cápsulas BPA Free (livre de Bisfenol A)## Não contém açúcar e não contém glúten',
        peso: '0.50',
        preco: '20.90',
        custo: '20.90',
        title_pagina: 'Baggio Clássico - 10 Cápsulas',
        palavras_chave: 'Baggio Clássico - 10 Cápsulas',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644592722962-.PNG',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644592722964-.PNG',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644592722983-.PNG'
      },
      {
        nome_produto: 'Baggio Aromas Chocolate com Avelã-10 Cápsulas',
        sku: 'cfp-02',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Baggio Aromas Chocolate com Avelã é um café especial com aroma da mais perfeita combinação entre chocolate e avelã. Perfeito para seus momentos mais especiais.## Nossas cápsulas são compatíveis com máquinas Nespresso®*.',
        informacoes_tecnicas: 'Características:## Tipo: 100% Coffea Arabica## Origem: Mogiana Paulista e Sul de Minas Gerais## Bebida: Mole## Torra: Média## Intensidade: 7## Não contém açúcar e não contém glúten',
        peso: '0.50',
        preco: '20.90',
        custo: '20.90',
        title_pagina: 'Baggio Aromas Chocolate com Avelã-10 Cápsulas',
        palavras_chave: 'Baggio Aromas Chocolate com Avelã-10 Cápsulas',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644592737989-.PNG',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644592738001-.PNG',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644592738028-.PNG'
      },
      //===========starbucks =============
      {
        nome_produto: 'STARBUCKS Espresso Colombia',
        sku: 'cfs',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Beba e saboreie esta origem única da Colômbia, equilibrada, sabor suculento e final característico de nozes. STARBUCKS® Espresso Colômbia criado para as máquinas NESCAFÉ® Dolce Gusto®.',
        informacoes_tecnicas: 'Características:## Quantidade: 12-Cápsulas## Intensidade: 7## Não contém açúcar e não contém glúten',
        peso: '0.80',
        preco: '26.99',
        custo: '26.99',
        title_pagina: 'STARBUCKS Espresso Colombia',
        palavras_chave: 'STARBUCKS Espresso Colombia',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644597873639-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644597873642-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644597873645-.jpeg'
      },
      {
        nome_produto: 'STARBUCKS Cappuccino',
        sku: 'cfs-01',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Saboreie o STARBUCKS® Cappucino encorpado e cremoso que combina o espresso com torrefação escura e uma camada cremosa de leite, criado para as máquinas NESCAFÉ® Dolce Gusto®.',
        informacoes_tecnicas: 'Características:## Quantidade: 12-Cápsulas## Não contém açúcar e não contém glúten',
        peso: '0.80',
        preco: '26.99',
        custo: '26.99',
        title_pagina: 'STARBUCKS Cappuccino',
        palavras_chave: 'STARBUCKS Cappuccino',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644597940576-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644597940578-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644597940580-.jpeg'
      },
      {
        nome_produto: 'STARBUCKS Caramel Macchiato',
        sku: 'cfs-02',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Descubra o famoso e cremoso STARBUCKS® Caramel Mocchiato criado para as máquinas NESCAFÉ® Dolce Gusto®.',
        informacoes_tecnicas: 'Características:## Quantidade: 12-Cápsulas## Não contém açúcar e não contém glúten',
        peso: '0.80',
        preco: '26.99',
        custo: '26.99',
        title_pagina: 'STARBUCKS Caramel Macchiato',
        palavras_chave: 'STARBUCKS Caramel Macchiato',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644597983367-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644597983370-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644597983374-.jpeg'
      },
      {
        nome_produto: 'STARBUCKS Americano House Blend',
        sku: 'cfs-03',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Rico em notas de caramelo, descubra o STARBUCKS® House Blend com seu equilíbrio perfeito de aroma, corpo e sabor, criado para as máquinas NESCAFÉ® Dolce Gusto®.',
        informacoes_tecnicas: 'Características:## Quantidade: 12-Cápsulas## Intensidade: 8## Não contém açúcar e não contém glúten',
        peso: '0.80',
        preco: '26.99',
        custo: '26.99',
        title_pagina: 'STARBUCKS Americano House Blend',
        palavras_chave: 'STARBUCKS Americano House Blend',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644598000830-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644598000847-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644598000848-.jpeg'
      },
      //===================== Coffee ++ ==============
      {
        nome_produto: 'Café Clássico Coffeemais Cápsula 10 unid.',
        sku: 'cfm',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Intensidade e sabor | Nosso café Clássico traz notas sensoriais de CHOCOLATE, CARAMELO e FRUTAS SECAS. O resultado é um café com acidez equilibrada, intensidade média com a praticidade (e sabor) do café espresso.',
        informacoes_tecnicas: '100% ARÁBICA | O Coffee ++ Clássico oferece grãos superespeciais e 100% arábica, que são  cultivados com processos criteriosos em altas altitudes no Brasil. Na xícara, esse café tem sabor marcante, doçura natural, notas sensoriais e aromas únicos. Sem dúvidas, cada xícara é uma experiência realmente sublime!## +84 PONTOS | O café superespecial acima de 84 pontos é avaliado de acordo com padrões internacionais da Specialty Association Coffee (SCA). Isso significa que a bebida cumpre regras internacionais de qualidade para chegar a essa pontuação. Tanto que não necessita de açúcar, já que tem doçura natural, acidez equilibrada, notas sensoriais e muitos sabores. Tudo com afeto, inspiração e conexões. Viva cada compasso dessa experiência e seja bem-vindo ao extraordinário mundo Coffee ++!## CAFÉ ESPECIAL X CAFÉ TRADICIONAL | Café especial é a potência de sabor, com grãos 100% arábicas, aspectos sensoriais diferenciados, acidez equilibrada e doçura natural. Já o café tradicional pode ter a mistura de grãos Robustas (conilon), o que significa mais concentração de cafeína, amargor e ausência de aspectos sensoriais. Dessa forma, para esconder os defeitos, a indústria carboniza a torra dos grãos. Que tal abandonar o café queimado e conhecer o doce natural dos grãos especiais?',
        peso: '0.50',
        preco: '23.90',
        custo: '23.90',
        title_pagina: 'Café Clássico Coffeemais Cápsula 10 unid.',
        palavras_chave: 'Café Clássico Coffeemais Cápsula 10 unid.',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644600802443-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644600802446-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644600802465-.jpeg'
      },
      {
        nome_produto: 'Café Coffeemais Chapada de Minas Cápsula 10 Unid.',
        sku: 'cfm-01',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Intensidade e sabor | Nosso café Clássico traz notas sensoriais de CHOCOLATE, CARAMELO e FRUTAS SECAS. O resultado é um café com acidez equilibrada, intensidade média com a praticidade (e sabor) do café espresso.',
        informacoes_tecnicas: '100% ARÁBICA | O Coffee ++ Clássico oferece grãos superespeciais e 100% arábica, que são  cultivados com processos criteriosos em altas altitudes no Brasil. Na xícara, esse café tem sabor marcante, doçura natural, notas sensoriais e aromas únicos. Sem dúvidas, cada xícara é uma experiência realmente sublime!## +84 PONTOS | O café superespecial acima de 84 pontos é avaliado de acordo com padrões internacionais da Specialty Association Coffee (SCA). Isso significa que a bebida cumpre regras internacionais de qualidade para chegar a essa pontuação. Tanto que não necessita de açúcar, já que tem doçura natural, acidez equilibrada, notas sensoriais e muitos sabores. Tudo com afeto, inspiração e conexões. Viva cada compasso dessa experiência e seja bem-vindo ao extraordinário mundo Coffee ++!## CAFÉ ESPECIAL X CAFÉ TRADICIONAL | Café especial é a potência de sabor, com grãos 100% arábicas, aspectos sensoriais diferenciados, acidez equilibrada e doçura natural. Já o café tradicional pode ter a mistura de grãos Robustas (conilon), o que significa mais concentração de cafeína, amargor e ausência de aspectos sensoriais. Dessa forma, para esconder os defeitos, a indústria carboniza a torra dos grãos. Que tal abandonar o café queimado e conhecer o doce natural dos grãos especiais?',
        peso: '0.50',
        preco: '23.90',
        custo: '23.90',
        title_pagina: 'Café Coffeemais Chapada de Minas Cápsula 10 Unid.',
        palavras_chave: 'Café Coffeemais Chapada de Minas Cápsula 10 Unid.',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644600831723-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644600831725-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644600831741-.jpeg'
      },
      {
        nome_produto: 'Café Coffeemais Mantiqueira de Minas Cápsula 10 un.',
        sku: 'cfm-02',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Intensidade e sabor | Nosso café Clássico traz notas sensoriais de CHOCOLATE, CARAMELO e FRUTAS SECAS. O resultado é um café com acidez equilibrada, intensidade média com a praticidade (e sabor) do café espresso.',
        informacoes_tecnicas: '100% ARÁBICA | O Coffee ++ Clássico oferece grãos superespeciais e 100% arábica, que são  cultivados com processos criteriosos em altas altitudes no Brasil. Na xícara, esse café tem sabor marcante, doçura natural, notas sensoriais e aromas únicos. Sem dúvidas, cada xícara é uma experiência realmente sublime!## +84 PONTOS | O café superespecial acima de 84 pontos é avaliado de acordo com padrões internacionais da Specialty Association Coffee (SCA). Isso significa que a bebida cumpre regras internacionais de qualidade para chegar a essa pontuação. Tanto que não necessita de açúcar, já que tem doçura natural, acidez equilibrada, notas sensoriais e muitos sabores. Tudo com afeto, inspiração e conexões. Viva cada compasso dessa experiência e seja bem-vindo ao extraordinário mundo Coffee ++!## CAFÉ ESPECIAL X CAFÉ TRADICIONAL | Café especial é a potência de sabor, com grãos 100% arábicas, aspectos sensoriais diferenciados, acidez equilibrada e doçura natural. Já o café tradicional pode ter a mistura de grãos Robustas (conilon), o que significa mais concentração de cafeína, amargor e ausência de aspectos sensoriais. Dessa forma, para esconder os defeitos, a indústria carboniza a torra dos grãos. Que tal abandonar o café queimado e conhecer o doce natural dos grãos especiais?',
        peso: '0.50',
        preco: '23.90',
        custo: '23.90',
        title_pagina: 'Café Coffeemais Mantiqueira de Minas Cápsula 10 un.',
        palavras_chave: 'Café Coffeemais Mantiqueira de Minas Cápsula 10 un.',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644600849474-.jpeg',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644600849476-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644600849524-.jpeg'
      },
      {
        nome_produto: 'Café Coffeemais Cerrado Mineiro Cápsula 10 Unid.',
        sku: 'cfm-03',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Intensidade e sabor | Nosso café Clássico traz notas sensoriais de CHOCOLATE, CARAMELO e FRUTAS SECAS. O resultado é um café com acidez equilibrada, intensidade média com a praticidade (e sabor) do café espresso.',
        informacoes_tecnicas: '100% ARÁBICA | O Coffee ++ Clássico oferece grãos superespeciais e 100% arábica, que são  cultivados com processos criteriosos em altas altitudes no Brasil. Na xícara, esse café tem sabor marcante, doçura natural, notas sensoriais e aromas únicos. Sem dúvidas, cada xícara é uma experiência realmente sublime!## +84 PONTOS | O café superespecial acima de 84 pontos é avaliado de acordo com padrões internacionais da Specialty Association Coffee (SCA). Isso significa que a bebida cumpre regras internacionais de qualidade para chegar a essa pontuação. Tanto que não necessita de açúcar, já que tem doçura natural, acidez equilibrada, notas sensoriais e muitos sabores. Tudo com afeto, inspiração e conexões. Viva cada compasso dessa experiência e seja bem-vindo ao extraordinário mundo Coffee ++!## CAFÉ ESPECIAL X CAFÉ TRADICIONAL | Café especial é a potência de sabor, com grãos 100% arábicas, aspectos sensoriais diferenciados, acidez equilibrada e doçura natural. Já o café tradicional pode ter a mistura de grãos Robustas (conilon), o que significa mais concentração de cafeína, amargor e ausência de aspectos sensoriais. Dessa forma, para esconder os defeitos, a indústria carboniza a torra dos grãos. Que tal abandonar o café queimado e conhecer o doce natural dos grãos especiais?',
        peso: '0.50',
        preco: '23.90',
        custo: '23.90',
        title_pagina: 'Café Coffeemais Cerrado Mineiro Cápsula 10 Unid.',
        palavras_chave: 'Café Coffeemais Cerrado Mineiro Cápsula 10 Unid.',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644600876524-.webp',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644600876525-.jpeg',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644600876539-.jpeg'
      },
      //============ Lor ===============
      {
        nome_produto: 'Cápsulas Café LOR Ristretto 20 Un',
        sku: 'cfl',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'O RISTRETTO 20 unidades deslumbra os sentidos com a sua personalidade viva e fresca, com um potente aroma picante. Uma combinação ideal que, na busca da perfeição do espresso, o levará a uma experiência intensa e inesquecível',
        informacoes_tecnicas: 'Melhor servido como Ristretto (25ml)## Cápsulas de café LOR, compatíveis com máquinas de café Nespresso ®*.',
        peso: '0.104',
        preco: '44.90',
        custo: '44.90',
        title_pagina: 'Cápsulas Café LOR Ristretto 20 Un',
        palavras_chave: 'Cápsulas Café LOR Ristretto 20 Un',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644602020955-.png',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644602020959-.png',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644602020974-.png'
      },
      {
        nome_produto: 'Cápsulas Café LOR Indonésia 10 Un',
        sku: 'cfl-01',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Um café robusto, poderoso e complexo, com delicadas notas amadeiradas e de chocolate amargo que capturam a essência nativa. Os grãos são manuseados de uma forma especial que cria um sabor encorpado e deixa uma sensação adocicada na boca.',
        informacoes_tecnicas: 'Melhor servido como Ristretto (40ml)## Cápsulas de café LOR, compatíveis com máquinas de café Nespresso ®*.',
        peso: '0.104',
        preco: '24.90',
        custo: '24.90',
        title_pagina: 'Cápsulas Café LOR Indonésia 10 Un',
        palavras_chave: 'Cápsulas Café LOR Indonésia 10 Un',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644602054987-.png',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644602054988-.png',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644602054989-.png'
      },
      {
        nome_produto: 'Cápsulas Café LOR Guatemala 10 Un',
        sku: 'cfl-02',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'O solo de calcário combinado com a mistura de correntes de ar quentes e frias produzem este café suave e radiante, com notas cítricas e de maçã doce. Com torra clara a média, é um blend elegante e refinado que revela incríveis sabores para uma experiência aromática rica e profunda.',
        informacoes_tecnicas: 'Melhor servido como Ristretto (40ml)## Cápsulas de café LOR, compatíveis com máquinas de café Nespresso ®*.',
        peso: '0.104',
        preco: '24.90',
        custo: '24.90',
        title_pagina: 'Cápsulas Café LOR Guatemala 10 Un',
        palavras_chave: 'Cápsulas Café LOR Guatemala 10 Un',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644602171162-.png',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644602171177-.png',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644602171178-.png'
      },
      {
        nome_produto: 'Cápsulas Café LOR Estremo 10 Un',
        sku: 'cfl-03',
        cod_barra: '123456789123',
        status_produto: 'Habilitado',
        categoria: 'Cápsula',
        descricao_produto: 'Uma ousada combinação, assim é o LUNGO ESTREMO. Um passeio místico pelo tentador aroma de um espresso de torra intensa, com notas de especiarias. Tudo para obter uma experiência de um café forte e encorpado. Descubra a sofisticação dos cafés em cápsulas LOR e se envolva no equilíbrio de sabores suaves e intensos',
        informacoes_tecnicas: 'Melhor servido como Ristretto (110ml)## Cápsulas de café LOR, compatíveis com máquinas de café Nespresso ®*.',
        peso: '0.52',
        preco: '24.90',
        custo: '24.90',
        title_pagina: 'Cápsulas Café LOR Estremo 10 Un',
        palavras_chave: 'Cápsulas Café LOR Estremo 10 Un',
        estoque: '50',
        imagem: 'images/uploads/imagemDoProduto/imagem-1644602196413-.png',
        miniaturaUm: 'images/uploads/imagemDoProduto/miniaturaUm-1644602196415-.png',
        miniaturaDois: 'images/uploads/imagemDoProduto/miniaturaDois-1644602196415-.png'
      }
    ], {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};